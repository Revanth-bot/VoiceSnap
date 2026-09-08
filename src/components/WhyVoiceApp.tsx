import { motion } from "motion/react";
import { 
  Sparkles, 
  Zap, 
  Sliders, 
  CheckCircle2, 
  Camera, 
  ShieldCheck,
  Star
} from "lucide-react";
import { WHY_VOICE_APP_ITEMS } from "../config";

export function WhyVoiceApp() {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles": return <Sparkles className="w-6 h-6 text-indigo-400" />;
      case "Zap": return <Zap className="w-6 h-6 text-purple-400" />;
      case "Sliders": return <Sliders className="w-6 h-6 text-indigo-400" />;
      case "CheckCircle2": return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case "Camera": return <Camera className="w-6 h-6 text-pink-400" />;
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="why-voice-app" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 text-indigo-400" />
            <span>Key Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Voice App?
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            Designed for photographers, vloggers, families, and creators who want effortless hands-free control over every shot.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_VOICE_APP_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 space-y-4 relative overflow-hidden group shadow-xl"
            >
              {/* Subtle Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                {getBenefitIcon(item.icon)}
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Glowing Bottom Line on Hover */}
              <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
