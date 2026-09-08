import { motion } from "motion/react";
import { 
  Mic, 
  Camera, 
  Sliders, 
  Smile, 
  Sparkles, 
  ArrowRight,
  Hand,
  Volume2
} from "lucide-react";

export function AppIntro() {
  return (
    <section id="intro" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>App Introduction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300">Voice App</span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            Voice App transforms how you capture moments on mobile. Instead of reaching for awkward shutter buttons or rushing against countdown timers, you can now operate the entire camera hands-free through intuitive, customizable voice commands.
          </p>
        </div>

        {/* 3 Visual Pillars for the App Intro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Hands-Free Camera */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 space-y-6 relative overflow-hidden group shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/10">
              <Camera className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                Hands-Free Photography
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trigger high-definition photos or video recording instantly without touching your screen or relying on delicate selfie sticks.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-indigo-400">
              <span>Zero-touch shutter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Pillar 2: Voice Customization */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-300 space-y-6 relative overflow-hidden group shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/10">
              <Sliders className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                Custom Voice Triggers
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Configure your own personalized voice commands. Train unique trigger words that match your personal speech style and vocabulary.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-purple-400">
              <span>Fully customizable</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Pillar 3: Smart Detection & Media Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-pink-500/30 transition-all duration-300 space-y-6 relative overflow-hidden group shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/10">
              <Smile className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                Smile Detection & Voice Prompts
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Smart facial smile detection provides gentle voice guidance like “Smile Please!” ensuring everyone is smiling before capturing the perfect shot.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-pink-400">
              <span>Smart voice guidance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
