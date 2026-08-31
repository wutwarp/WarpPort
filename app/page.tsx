import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
