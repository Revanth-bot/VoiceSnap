import { motion } from "motion/react";
import { 
  Smartphone, 
  Mic, 
  Zap, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../config";

export function HowItWorks() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone": return <Smartphone className="w-8 h-8" />;
      case "Mic": return <Mic className="w-8 h-8" />;
      case "Zap": return <Zap className="w-8 h-8" />;
      default: return <Sparkles className="w-8 h-8" />;
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Effortless Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How It Works in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300">
              3 Simple Steps
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            Getting started with Voice App takes less than 10 seconds. No complex setup or cloud accounts required.
          </p>
        </div>

        {/* 3 Step Flow with Animated Connectors */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Animated Connecting Line between Step cards on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/6 right-1/6 h-[2px] -translate-y-8 bg-gradient-to-r from-indigo-500/30 via-purple-500/40 to-indigo-500/30 z-0 pointer-events-none" />

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-xl z-10"
            >
              {/* Step Number Watermark in Background */}
              <span className="absolute top-4 right-6 text-6xl sm:text-7xl font-black text-white/[0.03] font-['Outfit'] select-none pointer-events-none">
                {step.stepNumber}
              </span>

              <div className="space-y-6">
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
                    {getStepIcon(step.icon)}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                    Step {step.stepNumber}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Indicator */}
              <div className="pt-8 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-indigo-400 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Instant response</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
