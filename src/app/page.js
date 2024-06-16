import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import CertificationSection from "./components/CertificationSection";
 import ExperiencesSection from "./components/ExperienceSection";
 import Experience2Section from "./components/Experience2Section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#24292f]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <Experience2Section />
        <ExperiencesSection/> 
        <SkillsSection />
        <ProjectsSection />
        <CertificationSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
