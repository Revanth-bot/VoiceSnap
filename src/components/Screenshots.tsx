import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Camera, 
  Home as HomeIcon, 
  Mic, 
  Image as ImageIcon, 
  Settings as SettingsIcon,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  UploadCloud
} from "lucide-react";
import { APP_SCREENSHOTS, ScreenshotItem } from "../config";

export function Screenshots() {
  const [activeTab, setActiveTab] = useState<string>("camera");
  const activeScreenshot = APP_SCREENSHOTS.find(s => s.id === activeTab) || APP_SCREENSHOTS[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case "home": return <HomeIcon className="w-4 h-4" />;
      case "camera": return <Camera className="w-4 h-4" />;
      case "voice-commands": return <Mic className="w-4 h-4" />;
      case "gallery": return <ImageIcon className="w-4 h-4" />;
      case "settings": return <SettingsIcon className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="screenshots" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-indigo-400" />
            <span>App Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            See Voice App in Action
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            Explore the interface designed for seamless, one-sentence camera control across every screen.
          </p>
        </div>

        {/* Screen Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {APP_SCREENSHOTS.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(screen.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                activeTab === screen.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              {getTabIcon(screen.id)}
              <span>{screen.title}</span>
            </button>
          ))}
        </div>

        {/* Main Display: Smartphone Mockup with Placeholder / Real Screenshot */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[280px] sm:w-[300px] h-[550px] sm:h-[580px] rounded-[3rem] p-3 bg-slate-900 shadow-2xl border-4 border-slate-800 backdrop-blur-xl">
              
              {/* Screen Inner Frame */}
              <div className="w-full h-full rounded-[2.2rem] bg-[#0A0C16] border border-white/10 overflow-hidden relative flex flex-col justify-between p-4">
                
                {/* Top Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-full border border-white/10 z-30" />

                {/* Status Bar */}
                <div className="pt-3 flex items-center justify-between text-[11px] text-slate-400 font-mono z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="text-[10px]">5G</span>
                    <div className="w-4 h-2 rounded-sm border border-slate-400 p-[1px]">
                      <div className="w-full h-full bg-indigo-400 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Main Screen Content: If user provides real image, render image, otherwise render rich placeholder */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreenshot.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="my-auto w-full h-[440px] rounded-2xl bg-gradient-to-b from-slate-900 via-[#0E1322] to-slate-950 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden"
                  >
                    {activeScreenshot.imageUrl && activeScreenshot.imageUrl !== "[APP SCREENSHOT HERE]" ? (
                      <img 
                        src={activeScreenshot.imageUrl} 
                        alt={`${activeScreenshot.title} screen`}
                        className="absolute inset-0 w-full h-full object-cover" 
                      />
                    ) : (
                      /* Placeholder Visual View */
                      <>
                        {/* Placeholder Stamp Banner */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#070913]/90 backdrop-blur-sm z-10 space-y-3">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                            {getTabIcon(activeScreenshot.id)}
                          </div>
                          
                          <div className="space-y-1">
                            <div className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                              [APP SCREENSHOT HERE]
                            </div>
                            <div className="text-base font-bold text-white">
                              {activeScreenshot.title} View
                            </div>
                            <div className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
                              {activeScreenshot.description}
                            </div>
                          </div>

                          {/* Simulated Live UI Info Box */}
                          <div className="w-full rounded-xl bg-white/5 border border-white/10 p-2.5 text-left space-y-1 text-[11px]">
                            <div className="text-slate-400 font-semibold flex items-center justify-between">
                              <span>Mode:</span>
                              <span className="text-indigo-300 font-mono">{activeScreenshot.simulatedUI.mode}</span>
                            </div>
                            <div className="text-slate-400 font-semibold flex items-center justify-between">
                              <span>Trigger:</span>
                              <span className="text-purple-300 font-mono text-[10px]">{activeScreenshot.simulatedUI.activeCommand}</span>
                            </div>
                          </div>

                          <div className="pt-1 text-[10px] text-slate-500 font-mono">
                            Replace in config.ts → APP_SCREENSHOTS
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Home Indicator */}
                <div className="w-28 h-1 bg-white/30 rounded-full mx-auto" />
              </div>
            </div>
          </div>

          {/* Screenshot Details & Interactive Explanations */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Screen Overview</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-extrabold text-white">
                {activeScreenshot.title} Screen
              </h3>
              <p className="text-base text-slate-400 leading-relaxed">
                {activeScreenshot.description}
              </p>
            </div>

            {/* Simulated Feature Highlights on this Screen */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                Key Interface Elements:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeScreenshot.simulatedUI.details.map((detail, idx) => (
                  <div key={idx} className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Developer Tag for easy replacement */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-3">
              <UploadCloud className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold text-white">Easy Image Replacement:</span>
                <p className="text-slate-400 leading-relaxed">
                  To use your actual app screenshots, open <code className="text-indigo-300 font-mono bg-black/40 px-1 py-0.5 rounded">src/config.ts</code> and replace the <code className="text-indigo-300 font-mono">[APP SCREENSHOT HERE]</code> string for <span className="text-white font-semibold">"{activeScreenshot.title}"</span> with your screenshot image URL.
                </p>
              </div>
            </div>

            {/* Next / Prev Tab Buttons */}
            <div className="flex items-center gap-3 pt-2">
              {APP_SCREENSHOTS.map((screen) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveTab(screen.id)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTab === screen.id 
                      ? "w-8 bg-gradient-to-r from-indigo-400 to-purple-500" 
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to ${screen.title} screenshot`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
