import { motion } from "motion/react";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Right Immersive Indigo Orb */}
      <div className="absolute -top-[10%] -right-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-indigo-600/20 rounded-full blur-[120px]" />

      {/* Bottom Left Immersive Purple Orb */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Center Subtle Ambient Indigo/Violet Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] animate-pulse-glow" 
        style={{ animationDelay: "1s" }}
      />

      {/* Subtle Grid Background lines */}
      <div 
        className="absolute inset-0 opacity-[0.025]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Subtle Floating Ambient Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-400/30"
          style={{
            width: `${(i % 3) * 2 + 3}px`,
            height: `${(i % 3) * 2 + 3}px`,
            top: `${(i * 9 + 5) % 95}%`,
            left: `${(i * 17 + 8) % 92}%`,
            boxShadow: '0 0 10px rgba(99,102,241,0.5)'
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.25, 1]
          }}
          transition={{
            duration: 6 + (i % 5) * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4
          }}
        />
      ))}
    </div>
  );
}
