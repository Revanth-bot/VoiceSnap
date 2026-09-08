import { useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  FileCheck, 
  Sparkles,
  ExternalLink,
  Info,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { APP_CONFIG, APK_DOWNLOAD_URL } from "../config";

interface DownloadCTAProps {
  onOpenGuide?: () => void;
}

export function DownloadCTA({ onOpenGuide }: DownloadCTAProps) {
  const [showPlaceholderNotice, setShowPlaceholderNotice] = useState(false);

  const handleDownloadClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (APK_DOWNLOAD_URL === "YOUR_APK_DOWNLOAD_LINK") {
      e.preventDefault();
      setShowPlaceholderNotice(true);
    }
  };

  return (
    <section id="download" className="relative py-24 sm:py-36 overflow-hidden">
      {/* Intense Glowing Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-indigo-600/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto rounded-[36px] p-8 sm:p-14 lg:p-16 bg-white/5 border border-white/10 relative overflow-hidden text-center shadow-[0_20px_80px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          
          {/* Top Decorative Lights */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
            <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
            <span>Official Mobile Release</span>
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-4 max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Ready to Try <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300">
                Voice App?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed font-['Outfit']">
              Experience a smarter, hands-free way to interact with your camera.
            </p>
          </div>

          {/* Central Download Action */}
          <div className="flex flex-col items-center justify-center space-y-6">
            
            <a
              href={APK_DOWNLOAD_URL === "YOUR_APK_DOWNLOAD_LINK" ? "#" : APK_DOWNLOAD_URL}
              download={APK_DOWNLOAD_URL !== "YOUR_APK_DOWNLOAD_LINK"}
              onClick={handleDownloadClick}
              id="btn-main-download-apk"
              className="px-10 sm:px-14 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-bold text-lg sm:text-xl text-white shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
            >
              <Download className="w-6 h-6 text-white" />
              <span>⬇ Download APK</span>
            </a>

            {/* Platform Tag */}
            <div className="inline-flex items-center gap-3 text-sm font-semibold text-slate-300 bg-white/5 border border-white/10 px-5 py-2 rounded-full">
              <span className="text-indigo-400">●</span>
              <span>{APP_CONFIG.platform}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-mono text-xs">{APP_CONFIG.version}</span>
            </div>

            {/* Placeholder Notice Modal Alert if not replaced yet */}
            {showPlaceholderNotice && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-5 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-200 text-sm max-w-lg text-left space-y-2 shadow-xl"
              >
                <div className="flex items-center gap-2 font-bold text-white">
                  <Info className="w-4 h-4 text-indigo-400" />
                  <span>APK Download Link Placeholder</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The download button is currently linked to the placeholder <code className="font-mono bg-black/50 px-1 py-0.5 rounded text-indigo-300">YOUR_APK_DOWNLOAD_LINK</code>.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To connect your real APK, open <code className="font-mono bg-black/50 px-1 py-0.5 rounded text-indigo-300">src/config.ts</code> and set <code className="font-mono bg-black/50 px-1 py-0.5 rounded text-indigo-300">APK_DOWNLOAD_URL</code> to your APK file path or direct link.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  {onOpenGuide && (
                    <button
                      onClick={onOpenGuide}
                      className="text-xs text-indigo-400 hover:text-indigo-300 underline font-semibold"
                    >
                      Open Full Setup Guide →
                    </button>
                  )}
                  <button
                    onClick={() => setShowPlaceholderNotice(false)}
                    className="text-xs text-slate-400 hover:text-white px-2 py-1 bg-white/10 rounded-lg"
                  >
                    Dismiss
                  </button>
                </div>
              </motion.div>
            )}

            {/* App Specs Grid */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl text-xs text-slate-300">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Clean Package</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2">
                <FileCheck className="w-4 h-4 text-indigo-400" />
                <span>Requires {APP_CONFIG.minAndroid}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Standalone & Offline</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
