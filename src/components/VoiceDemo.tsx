import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mic, 
  Camera, 
  Video, 
  Smile, 
  Image as ImageIcon, 
  Sparkles, 
  CheckCircle2,
  Volume2,
  RefreshCw,
  Zap,
  Play
} from "lucide-react";
import { DEMO_COMMANDS } from "../config";

type DemoState = "idle" | "listening" | "detected" | "completed";

export function VoiceDemo() {
  const [selectedCommand, setSelectedCommand] = useState(DEMO_COMMANDS[0]);
  const [demoState, setDemoState] = useState<DemoState>("idle");
  const [flashScreen, setFlashScreen] = useState(false);
  const [capturedCount, setCapturedCount] = useState(1);

  // Trigger the interactive voice flow
  const triggerDemo = (command = selectedCommand) => {
    if (demoState === "listening" || demoState === "detected") return;
    
    setSelectedCommand(command);
    setDemoState("listening");

    // Sequence: Listening (1.2s) -> Detected (1.2s) -> Completed
    setTimeout(() => {
      setDemoState("detected");

      setTimeout(() => {
        setDemoState("completed");
        
        // If it's a photo command, trigger a camera flash effect
        if (command.phrase.toLowerCase().includes("photo") || command.phrase.toLowerCase().includes("smile")) {
          setFlashScreen(true);
          setTimeout(() => setFlashScreen(false), 250);
          setCapturedCount(prev => prev + 1);
        }
      }, 1300);
    }, 1200);
  };

  const getCommandIcon = (iconName: string) => {
    switch (iconName) {
      case "Camera": return <Camera className="w-5 h-5" />;
      case "Video": return <Video className="w-5 h-5" />;
      case "Smile": return <Smile className="w-5 h-5" />;
      case "Image": return <ImageIcon className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="demo" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Flash Effect on photo capture */}
      {flashScreen && (
        <div className="fixed inset-0 bg-white/70 z-50 pointer-events-none transition-opacity duration-200" />
      )}

      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
            <Mic className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Just Say It.
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            Try the simulated voice engine below. Click any command bubble or hit the interactive microphone to see how Voice App detects and executes in real-time.
          </p>
        </div>

        {/* Interactive Demo Container */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden shadow-2xl backdrop-blur-xl">
            
            {/* Command Speech Bubble Selector Pills */}
            <div className="space-y-3 mb-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 text-center">
                Click a sample voice command to test:
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-3">
                {DEMO_COMMANDS.map((cmd) => (
                  <button
                    key={cmd.phrase}
                    onClick={() => triggerDemo(cmd)}
                    className={`px-5 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2.5 transition-all duration-200 cursor-pointer active:scale-95 ${
                      selectedCommand.phrase === cmd.phrase
                        ? "bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-indigo-400/80 text-white shadow-lg shadow-indigo-500/20"
                        : "bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    <span className="text-indigo-400">{getCommandIcon(cmd.icon)}</span>
                    <span>“{cmd.phrase}”</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Simulation Stage */}
            <div className="relative rounded-2xl bg-[#090B14] border border-white/10 p-8 sm:p-12 flex flex-col items-center justify-center text-center min-h-[340px] overflow-hidden">
              
              {/* Dynamic Waveform & State Displays */}
              <div className="relative z-10 flex flex-col items-center space-y-6 max-w-lg w-full">
                
                {/* Big Interactive Microphone Button */}
                <div className="relative">
                  {/* Outer pulse aura during listening */}
                  {demoState === "listening" && (
                    <motion.div 
                      className="absolute -inset-4 rounded-full bg-indigo-500/30 blur-md"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                  {demoState === "detected" && (
                    <motion.div 
                      className="absolute -inset-4 rounded-full bg-purple-500/40 blur-md"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                  {demoState === "completed" && (
                    <div className="absolute -inset-4 rounded-full bg-emerald-500/30 blur-md" />
                  )}

                  <button
                    onClick={() => triggerDemo()}
                    id="btn-voice-demo-mic"
                    disabled={demoState === "listening" || demoState === "detected"}
                    className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-300 active:scale-95 group ${
                      demoState === "listening"
                        ? "bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-indigo-500/50"
                        : demoState === "detected"
                        ? "bg-gradient-to-tr from-purple-500 to-indigo-600 text-white shadow-purple-500/50"
                        : demoState === "completed"
                        ? "bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-emerald-500/50"
                        : "bg-gradient-to-tr from-slate-800 to-slate-900 border-2 border-indigo-400/40 text-indigo-300 hover:border-indigo-300 hover:text-white"
                    }`}
                  >
                    <Mic className={`w-9 h-9 sm:w-10 sm:h-10 ${demoState === "listening" ? "animate-bounce" : ""}`} />
                    <span className="text-[10px] font-mono mt-1 font-semibold uppercase tracking-wider">
                      {demoState === "listening" ? "Listening" : demoState === "detected" ? "Processing" : demoState === "completed" ? "Triggered" : "Tap Mic"}
                    </span>
                  </button>
                </div>

                {/* Animated Audio Equalizer Bars when active */}
                <div className="h-8 flex items-center justify-center gap-1.5">
                  {[20, 50, 90, 40, 75, 100, 60, 85, 30, 95, 45, 70, 25].map((val, i) => (
                    <motion.div
                      key={i}
                      className={`w-1 sm:w-1.5 rounded-full transition-colors ${
                        demoState === "listening" 
                          ? "bg-indigo-400" 
                          : demoState === "detected" 
                          ? "bg-purple-400" 
                          : demoState === "completed" 
                          ? "bg-emerald-400" 
                          : "bg-white/10"
                      }`}
                      animate={{
                        height: demoState === "listening" || demoState === "detected"
                          ? [6, (val / 100) * 32, 6]
                          : 6
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* State Progress Sequence Visualizer */}
                <div className="w-full flex items-center justify-center gap-2 sm:gap-4 text-xs font-mono">
                  <div className={`px-3 py-1 rounded-full border transition-all ${
                    demoState === "listening" 
                      ? "bg-indigo-500/20 border-indigo-400 text-indigo-300 font-bold" 
                      : "bg-white/5 border-white/10 text-slate-500"
                  }`}>
                    1. Listening...
                  </div>

                  <span className="text-slate-600">→</span>

                  <div className={`px-3 py-1 rounded-full border transition-all ${
                    demoState === "detected" 
                      ? "bg-purple-500/20 border-purple-400 text-purple-300 font-bold" 
                      : "bg-white/5 border-white/10 text-slate-500"
                  }`}>
                    2. Command Detected
                  </div>

                  <span className="text-slate-600">→</span>

                  <div className={`px-3 py-1 rounded-full border transition-all ${
                    demoState === "completed" 
                      ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold" 
                      : "bg-white/5 border-white/10 text-slate-500"
                  }`}>
                    3. Action Completed
                  </div>
                </div>

                {/* Feedback Card Outcome */}
                <AnimatePresence mode="wait">
                  {demoState === "completed" ? (
                    <motion.div
                      key="completed"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3 shadow-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div className="text-left">
                        <div className="font-bold text-white flex items-center gap-2">
                          <span>{selectedCommand.action}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 font-mono text-emerald-300">
                            Latency: 18ms
                          </span>
                        </div>
                        <div className="text-xs text-slate-300">{selectedCommand.feedback}</div>
                      </div>
                    </motion.div>
                  ) : demoState === "detected" ? (
                    <motion.div
                      key="detected"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm flex items-center gap-2.5"
                    >
                      <Zap className="w-4 h-4 text-purple-400 animate-spin" />
                      <span className="font-semibold text-white">Recognized phrase: “{selectedCommand.phrase}”</span>
                    </motion.div>
                  ) : demoState === "listening" ? (
                    <motion.div
                      key="listening"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-indigo-300 font-mono flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                      Listening for voice trigger... Say “{selectedCommand.phrase}”
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-slate-400 flex items-center gap-1.5"
                    >
                      <span>Click the microphone or select any voice command above to test.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

            {/* Bottom Simulation Stats Note */}
            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 px-2 gap-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Simulation mode • No actual camera permissions required for demo</span>
              </span>

              {demoState === "completed" && (
                <button
                  onClick={() => setDemoState("idle")}
                  className="text-indigo-400 hover:text-indigo-300 underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Demo</span>
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
