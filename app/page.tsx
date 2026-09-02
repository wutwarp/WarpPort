import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { LanguageProvider } from "@/components/LanguageProvider";
import { AboutExperienceSection } from "@/components/AboutExperienceSection";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
