import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Download, 
  ArrowRight, 
  Mic, 
  Camera, 
  Video, 
  Smile, 
  Sparkles, 
  CheckCircle2, 
  Shield, 
  Zap,
  Volume2
} from "lucide-react";
import { APP_CONFIG, APK_DOWNLOAD_URL } from "../config";

export function Hero() {
  const [activeFloatIndex, setActiveFloatIndex] = useState(0);
  const [isSimulatingVoice, setIsSimulatingVoice] = useState(true);

  // Rotate through floating highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFloatIndex((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left z-10">
            
            {/* Top Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Next-Gen Voice Interface</span>
            </motion.div>

            {/* Main Headings */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 leading-[1.1]">
                Your Voice.<br />
                Your Command.
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-slate-300 font-['Outfit']">
                {APP_CONFIG.subheading}
              </p>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {APP_CONFIG.description}
              </p>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Primary Download Button */}
              <a
                href={APK_DOWNLOAD_URL === "YOUR_APK_DOWNLOAD_LINK" ? "#download" : APK_DOWNLOAD_URL}
                id="btn-hero-download-apk"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold shadow-xl shadow-indigo-500/20 hover:scale-105 transition-transform text-white flex items-center justify-center gap-2.5 active:scale-95"
              >
                <Download className="w-5 h-5 text-white" />
                <span>Download APK</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 text-white font-mono">
                  Android
                </span>
              </a>

              {/* Secondary Explore Features Button */}
              <a
                href="#features"
                id="btn-hero-explore-features"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-md active:scale-95"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Meet Voice App Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left max-w-xl"
            >
              <p className="text-sm text-slate-400 italic leading-relaxed">
                “Meet Voice App: The hands-free camera revolution. Customize your commands to snap photos, start videos, or trigger smile detection without touching your device.”
              </p>
            </motion.div>

            {/* Quick Specs Micro-Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Free & Standalone</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-400" />
                <span>Zero Latency Voice Shutter</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span>100% Offline Audio Processing</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Smartphone Mockup with Floating UI Elements */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Glowing Backdrop Aura */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-indigo-600/30 via-purple-600/30 to-indigo-800/30 rounded-full blur-[110px] pointer-events-none -z-10" />

            {/* Realistic Floating Smartphone (Slate-900 Bezel from Immersive UI) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[280px] sm:w-[300px] h-[540px] sm:h-[570px] bg-slate-900 rounded-[3rem] border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between p-3.5 select-none animate-float-subtle group"
            >
              {/* Smartphone Inner Screen Canvas */}
              <div className="w-full h-full rounded-[2.2rem] bg-slate-950 border border-white/5 overflow-hidden relative flex flex-col justify-between p-4 select-none">
                
                {/* Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-slate-800 rounded-b-xl z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-indigo-500/40" />
                </div>

                {/* Smartphone Screen Header */}
                <div className="pt-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
                      Voice App
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-indigo-300">
                    PHOTO 4K
                  </span>
                </div>

                {/* Smartphone Center: Camera Viewfinder Simulation */}
                <div className="relative my-auto w-full aspect-[3/4] rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 overflow-hidden flex flex-col items-center justify-center p-4">
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20">
                    <div className="border-r border-b border-white" />
                    <div className="border-r border-b border-white" />
                    <div className="border-b border-white" />
                    <div className="border-r border-b border-white" />
                    <div className="border-r border-b border-white" />
                    <div className="border-b border-white" />
                    <div className="border-r border-white" />
                    <div className="border-r border-white" />
                    <div className="" />
                  </div>

                  {/* Focus Box */}
                  <div className="w-24 h-24 border border-indigo-400/60 rounded-xl relative flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" />
                    <span className="absolute -top-5 text-[9px] font-mono text-indigo-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-indigo-500/30">
                      Auto-Focus • Ready
                    </span>
                  </div>

                  {/* Real-time Simulated Audio Waveform Bar in Viewfinder */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                        <Mic className="w-3.5 h-3.5 animate-bounce" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-semibold text-slate-200">Listening...</span>
                        <span className="text-[9px] text-indigo-300">"Take Photo" ready</span>
                      </div>
                    </div>
                    {/* Visualizer bars */}
                    <div className="flex items-center gap-1">
                      {[40, 70, 90, 60, 85, 50, 95, 65, 45].map((h, i) => (
                        <motion.div
                          key={i}
                          className="w-[2.5px] bg-gradient-to-t from-indigo-500 to-purple-400 rounded-full"
                          animate={{ height: [6, (h / 100) * 18, 6] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.08,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Smartphone Bottom Controls */}
                <div className="z-20 space-y-2.5 pt-1">
                  <div className="flex items-center justify-around text-[10px] font-medium text-slate-400">
                    <span className="text-white font-semibold">PHOTO</span>
                    <span className="hover:text-slate-200">VIDEO</span>
                    <span className="hover:text-slate-200">SMILE</span>
                    <span className="hover:text-slate-200">CUSTOM</span>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 text-xs">
                      🖼️
                    </div>
                    
                    {/* Voice-Triggered Shutter Button */}
                    <div className="relative group/shutter">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-70 blur-sm animate-pulse" />
                      <div className="relative w-12 h-12 rounded-full border-2 border-white bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-inner">
                          <Mic className="w-4 h-4 text-indigo-900" />
                        </div>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Floating Element 1: "Take Photo" */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute top-20 -left-4 sm:-left-10 px-4 py-2 bg-slate-900/80 border border-white/10 rounded-lg backdrop-blur-md shadow-xl flex items-center gap-2 animate-[float-subtle_4.5s_ease-in-out_infinite]"
            >
              <Camera className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold text-white">“Take Photo”</span>
            </motion.div>

            {/* Floating Element 2: "Smile Please" */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute top-52 -left-6 sm:-left-12 px-4 py-2 bg-slate-900/80 border border-white/10 rounded-lg backdrop-blur-md shadow-xl flex items-center gap-2 animate-[float-subtle_5.2s_ease-in-out_1s_infinite]"
            >
              <Smile className="w-4 h-4 text-pink-400" />
              <span className="text-xs font-semibold text-white">“Smile Please”</span>
            </motion.div>

            {/* Floating Element 3: "Start Video" */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute bottom-36 -right-4 sm:-right-10 px-4 py-2 bg-slate-900/80 border border-white/10 rounded-lg backdrop-blur-md shadow-xl flex items-center gap-2 animate-[float-subtle_4.8s_ease-in-out_0.5s_infinite]"
            >
              <Video className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold text-white">“Start Video”</span>
            </motion.div>

            {/* Floating Element 4: "Voice Command Detected" */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -bottom-3 right-0 sm:-right-4 px-4 py-2.5 bg-indigo-500/20 border border-indigo-400/40 rounded-xl backdrop-blur-md flex items-center gap-3 shadow-xl animate-[float-subtle_6s_ease-in-out_1.5s_infinite]"
            >
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-[10px] text-indigo-100 font-bold uppercase tracking-tighter">
                Voice Command Detected
              </span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
