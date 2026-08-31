"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "@/data/portfolio";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

type ProjectsCopy = (typeof translations)[Language]["projects"];

export function ProjectGalleryModal({
  project,
  language,
  copy,
  onClose,
}: {
  project: Project;
  language: Language;
  copy: ProjectsCopy;
  onClose: () => void;
}) {
  const images = useMemo(
    () => project.images?.length ? project.images : [project.image],
    [project],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const previousImage = useCallback(() => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    setActiveIndex(0);
    setFailedImages([]);
  }, [project]);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && images.length > 1) previousImage();
      if (event.key === "ArrowRight" && images.length > 1) nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [images.length, nextImage, onClose, previousImage]);

  const currentImage = images[activeIndex];
  const currentImageFailed = failedImages.includes(currentImage);

  return (
    <div
      className="gallery-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="gallery-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-gallery-title"
      >
        <header className="gallery-header">
          <div>
            <span>{project.type[language]}</span>
            <h2 id="project-gallery-title">{project.name[language]}</h2>
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label={copy.closeGallery}>×</button>
        </header>

        <div className="gallery-content">
          <div className="gallery-viewer">
            <div
              className="gallery-stage"
              onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null || images.length < 2) return;
                const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
                if (Math.abs(distance) > 45) distance > 0 ? previousImage() : nextImage();
                touchStartX.current = null;
              }}
            >
              {currentImageFailed ? (
                <div className="gallery-empty"><span>{project.shortName}</span><p>{copy.noImages}</p></div>
              ) : (
                <img
                  key={currentImage}
                  src={currentImage}
                  alt={`${project.shortName} ${copy.screenshotSuffix} ${activeIndex + 1}`}
                  onError={() => setFailedImages((current) => current.includes(currentImage) ? current : [...current, currentImage])}
                />
              )}

              {images.length > 1 && (
                <>
                  <button className="gallery-arrow gallery-arrow-previous" type="button" onClick={previousImage} aria-label={copy.previousImage}>‹</button>
                  <button className="gallery-arrow gallery-arrow-next" type="button" onClick={nextImage} aria-label={copy.nextImage}>›</button>
                </>
              )}
            </div>

            <div className="gallery-navigation">
              <p>{copy.imageLabel} {activeIndex + 1} {copy.imageOf} {images.length}</p>
              <span>{copy.browseHint}</span>
            </div>

            {images.length > 1 && (
              <div className="gallery-thumbnails" aria-label={copy.openProject}>
                {images.map((image, index) => (
                  <button
                    className={index === activeIndex ? "is-active" : ""}
                    type="button"
                    key={image}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${copy.imageLabel} ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="gallery-details">
            <p>{project.description[language]}</p>
            <div className="tech-list" aria-label={copy.techStackLabel}>
              {project.techStack.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
