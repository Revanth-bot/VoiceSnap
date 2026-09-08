import { motion } from "motion/react";
import { 
  Mic, 
  Camera, 
  Video, 
  Smile, 
  Sliders, 
  Image as ImageIcon, 
  Sparkles, 
  Settings2,
  Check
} from "lucide-react";
import { APP_FEATURES } from "../config";

export function Features() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Mic": return <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-lg">🎙️</div>;
      case "Camera": return <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg">📸</div>;
      case "Smile": return <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 text-lg">😊</div>;
      case "Sliders": 
      case "Settings2": return <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg">⚙️</div>;
      case "Image": return <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg">🖼️</div>;
      case "Video": return <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg">🎥</div>;
      default: return <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-lg">✨</div>;
    }
  };

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-indigo-800/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
            <Mic className="w-3.5 h-3.5 text-indigo-400" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300">
              Just Say It.
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            From zero-lag voice triggers to intelligent smile detection, explore all the built-in capabilities designed to make your mobile photography effortless.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APP_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 shadow-lg"
            >
              {/* Corner Ambient Glow */}
              <div 
                className="absolute -top-16 -right-16 w-32 h-32 bg-indigo-500/10 group-hover:bg-indigo-500/20 rounded-full blur-2xl transition-all duration-300 pointer-events-none"
              />

              <div className="space-y-4">
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between">
                  {getIcon(feature.icon)}
                  
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-colors">
                    {feature.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom Feature Ready Check */}
              <div className="pt-5 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-500">
                <Check className="w-3.5 h-3.5 text-indigo-400" />
                <span>Ready out-of-the-box</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
