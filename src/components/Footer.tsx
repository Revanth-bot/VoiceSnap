import { 
  Mic, 
  Download, 
  ArrowUp, 
  Sparkles,
  ExternalLink,
  MessageSquare,
  Globe,
  Share2
} from "lucide-react";
import { APP_CONFIG, APK_DOWNLOAD_URL, SOCIAL_LINKS } from "../config";

interface FooterProps {
  onOpenGuide?: () => void;
}

export function Footer({ onOpenGuide }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400 text-sm z-10">
      
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Bio (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1.5px] shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-[#0B0D18] rounded-[10px] flex items-center justify-center">
                  <div className="flex items-center gap-[2px] h-4">
                    <span className="w-[2.5px] h-2.5 bg-indigo-400 rounded-full" />
                    <span className="w-[2.5px] h-4 bg-purple-400 rounded-full" />
                    <span className="w-[2.5px] h-2 bg-indigo-400 rounded-full" />
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold text-white font-['Outfit']">
                {APP_CONFIG.name}
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The official mobile application for hands-free voice-controlled photography, smile detection prompts, and zero-latency shutter execution.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
                {APP_CONFIG.platform}
              </span>
              <span className="text-xs text-slate-500">
                Official Release {APP_CONFIG.releaseYear}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-indigo-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#intro" className="hover:text-indigo-300 transition-colors">Meet Voice App</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-indigo-300 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#demo" className="hover:text-indigo-300 transition-colors">Voice Demo</a>
              </li>
              <li>
                <a href="#why-voice-app" className="hover:text-indigo-300 transition-colors">Why Voice App</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Features
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-indigo-300 transition-colors">Voice Commands</a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-300 transition-colors">Voice Photo & Video</a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-300 transition-colors">Smile Detection</a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-300 transition-colors">Gallery & Editing</a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-indigo-300 transition-colors">App Screenshots</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Links (Clearly marked placeholders) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Connect & Social
            </h4>
            <div className="space-y-2.5">
              <div className="text-xs text-slate-500 font-mono">
                [SOCIAL MEDIA LINK HERE]
              </div>
              <ul className="space-y-2">
                <li>
                  <a 
                    href={SOCIAL_LINKS.github === "[SOCIAL MEDIA LINK HERE]" ? "#" : SOCIAL_LINKS.github}
                    className="hover:text-indigo-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
                <li>
                  <a 
                    href={SOCIAL_LINKS.twitter === "[SOCIAL MEDIA LINK HERE]" ? "#" : SOCIAL_LINKS.twitter}
                    className="hover:text-indigo-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>Twitter / X</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
                <li>
                  <a 
                    href={SOCIAL_LINKS.telegram === "[SOCIAL MEDIA LINK HERE]" ? "#" : SOCIAL_LINKS.telegram}
                    className="hover:text-indigo-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>Telegram Community</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
              </ul>

              {onOpenGuide && (
                <button
                  onClick={onOpenGuide}
                  className="pt-2 text-xs text-indigo-400 hover:text-indigo-300 underline flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Developer Replacement Guide</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {APP_CONFIG.releaseYear} {APP_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Official Android APK Promotional Site</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 flex items-center gap-1 transition-all"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
