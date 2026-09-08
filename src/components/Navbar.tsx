import { useState, useEffect } from "react";
import { 
  Download, 
  Menu, 
  X, 
  Sparkles,
  Smartphone
} from "lucide-react";
import { APP_CONFIG, APK_DOWNLOAD_URL } from "../config";

interface NavbarProps {
  onOpenGuide?: () => void;
}

export function Navbar({ onOpenGuide }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Demo", href: "#demo" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Why Voice App", href: "#why-voice-app" },
    { label: "Download", href: "#download" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-3.5 shadow-2xl shadow-black/60" 
          : "bg-slate-950/40 backdrop-blur-xl border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a 
          href="#hero" 
          id="navbar-logo-link"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-[2px] h-4">
              <span className="w-[2px] h-2.5 bg-white rounded-full animate-[wave-bar_1.2s_ease-in-out_infinite]" />
              <span className="w-[2px] h-4 bg-white rounded-full animate-[wave-bar_1.2s_ease-in-out_0.2s_infinite]" />
              <span className="w-[2px] h-2 bg-white/80 rounded-full animate-[wave-bar_1.2s_ease-in-out_0.4s_infinite]" />
              <span className="w-[2px] h-3.5 bg-white rounded-full animate-[wave-bar_1.2s_ease-in-out_0.1s_infinite]" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
              {APP_CONFIG.name}
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              Official
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenGuide && (
            <button
              onClick={onOpenGuide}
              id="btn-quick-guide"
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all flex items-center gap-1.5"
              title="View how to replace APK & screenshots"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Asset Guide</span>
            </button>
          )}

          <a
            href={APK_DOWNLOAD_URL === "YOUR_APK_DOWNLOAD_LINK" ? "#download" : APK_DOWNLOAD_URL}
            id="btn-navbar-download"
            className="px-5 py-2 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>Download APK</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={APK_DOWNLOAD_URL === "YOUR_APK_DOWNLOAD_LINK" ? "#download" : APK_DOWNLOAD_URL}
            className="px-3 py-1.5 bg-white text-slate-950 rounded-full text-xs font-bold flex items-center gap-1 shadow-md"
          >
            <Download className="w-3.5 h-3.5 text-slate-950" />
            <span>APK</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="btn-mobile-menu-toggle"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#050508]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={APK_DOWNLOAD_URL === "YOUR_APK_DOWNLOAD_LINK" ? "#download" : APK_DOWNLOAD_URL}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/20"
            >
              <Download className="w-5 h-5" />
              <span>Download APK for Android</span>
            </a>

            {onOpenGuide && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-indigo-300 flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Replace Screenshots & APK Link Guide</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
