import { 
  X, 
  Download, 
  Image as ImageIcon, 
  Sliders, 
  Share2, 
  Check, 
  Copy, 
  FileCode, 
  Sparkles 
} from "lucide-react";
import { useState } from "react";

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomizationGuideModal({ isOpen, onClose }: GuideModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card bg-[#0B0E1B] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                How to Replace Placeholders & Assets
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              All placeholders have been centralized into a single file for easy replacement: <code className="text-indigo-300 font-mono">src/config.ts</code>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5 Replacement Steps */}
        <div className="space-y-6 text-sm">
          
          {/* 1. APK Link */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-white">
                <Download className="w-4 h-4 text-indigo-400" />
                <span>1. Replace APK Download Link</span>
              </div>
              <button
                onClick={() => copyToClipboard('export const APK_DOWNLOAD_URL = "https://your-domain.com/voice-app.apk";', 'apk')}
                className="text-xs px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-indigo-300 flex items-center gap-1"
              >
                {copiedKey === 'apk' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedKey === 'apk' ? 'Copied' : 'Copy snippet'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Open <code className="text-indigo-300 font-mono">src/config.ts</code> at line 9 and replace:
            </p>
            <pre className="p-2.5 rounded-xl bg-black/60 font-mono text-xs text-indigo-300 overflow-x-auto">
              export const APK_DOWNLOAD_URL = "YOUR_APK_DOWNLOAD_LINK";
            </pre>
          </div>

          {/* 2. App Screenshots */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-white">
                <ImageIcon className="w-4 h-4 text-purple-400" />
                <span>2. Replace App Screenshots</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In <code className="text-indigo-300 font-mono">src/config.ts</code> under <code className="text-purple-300 font-mono">APP_SCREENSHOTS</code>, replace the <code className="text-indigo-300 font-mono">imageUrl: "[APP SCREENSHOT HERE]"</code> for each screen (Home, Camera, Voice Commands, Gallery, Settings) with your local path (e.g. <code className="text-indigo-300 font-mono">"/screenshots/camera.png"</code>) or remote image URL.
            </p>
          </div>

          {/* 3. App Name / Tagline */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white">
              <Sliders className="w-4 h-4 text-indigo-400" />
              <span>3. Change App Name, Tagline & Description</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In <code className="text-indigo-300 font-mono">src/config.ts</code> under <code className="text-indigo-300 font-mono">APP_CONFIG</code>, you can modify the name, tagline ("Your Voice. Your Command."), subtitle, version, and package size.
            </p>
          </div>

          {/* 4. Social Media Links */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white">
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span>4. Replace Social Media Links</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In <code className="text-indigo-300 font-mono">src/config.ts</code> under <code className="text-emerald-300 font-mono">SOCIAL_LINKS</code>, replace <code className="text-indigo-300 font-mono">"[SOCIAL MEDIA LINK HERE]"</code> with your real GitHub, Twitter/X, Telegram, Discord, or support email.
            </p>
          </div>

          {/* 5. App Logo */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white">
              <FileCode className="w-4 h-4 text-amber-400" />
              <span>5. App Logo / Favicon</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              The website uses an animated sound wave gradient SVG logo in <code className="text-indigo-300 font-mono">src/components/Navbar.tsx</code>. You can also replace it with your custom <code className="text-amber-300 font-mono">&lt;img src="/logo.png" /&gt;</code> anytime.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 hover:scale-105 transition-transform"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
}
