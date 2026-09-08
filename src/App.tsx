import { useState } from "react";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AppIntro } from "./components/AppIntro";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { VoiceDemo } from "./components/VoiceDemo";
import { Screenshots } from "./components/Screenshots";
import { WhyVoiceApp } from "./components/WhyVoiceApp";
import { DownloadCTA } from "./components/DownloadCTA";
import { Footer } from "./components/Footer";
import { CustomizationGuideModal } from "./components/CustomizationGuideModal";

export default function App() {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050508] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden">
      {/* Dynamic Ambient Lights & Particles */}
      <BackgroundEffects />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenGuide={() => setGuideModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Meet Voice App Introduction */}
        <AppIntro />

        {/* 3. Key Features Suite */}
        <Features />

        {/* 4. How It Works 3-Step Guide */}
        <HowItWorks />

        {/* 5. Interactive Voice Command Simulator */}
        <VoiceDemo />

        {/* 6. App Screenshots & Mockups Showcase */}
        <Screenshots />

        {/* 7. Why Voice App Benefits */}
        <WhyVoiceApp />

        {/* 8. Download APK Section */}
        <DownloadCTA onOpenGuide={() => setGuideModalOpen(true)} />
      </main>

      {/* 9. Official Footer */}
      <Footer onOpenGuide={() => setGuideModalOpen(true)} />

      {/* Developer Asset Replacement Helper Modal */}
      <CustomizationGuideModal 
        isOpen={guideModalOpen} 
        onClose={() => setGuideModalOpen(false)} 
      />
    </div>
  );
}
