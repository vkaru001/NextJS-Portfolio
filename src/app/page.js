import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import CertificationSection from "./components/CertificationSection";
 import ExperiencesSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#24292f]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ExperiencesSection/> 
        <ProjectsSection />
        <CertificationSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
