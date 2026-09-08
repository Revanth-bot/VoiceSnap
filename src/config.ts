/**
 * VOICE APP - CENTRAL CONFIGURATION FILE
 * 
 * You can easily replace the placeholders below with your actual assets,
 * links, screenshots, and texts.
 */

// 1. APK DOWNLOAD LINK
// Replace this with your actual APK direct download URL or hosted file link
export const APK_DOWNLOAD_URL = "YOUR_APK_DOWNLOAD_LINK";

// 2. APP IDENTITY & TEXTS
export const APP_CONFIG = {
  name: "Voice App",
  tagline: "Your Voice. Your Command.",
  subheading: "Control your experience with simple voice commands.",
  description:
    "Voice App enables complete hands-free interaction with your camera and mobile tools using customizable voice triggers, real-time smile detection, and high-precision voice capture.",
  version: "v1.0.0",
  platform: "Android • APK",
  packageSize: "28.4 MB",
  minAndroid: "Android 8.0+",
  developerName: "Voice App Team",
  releaseYear: "2026",
};

// 3. APP SCREENSHOT PLACEHOLDERS & PATHS
// Replace the 'imageUrl' values with your real screenshot images (e.g., '/screenshots/camera.jpg' or external URL)
export interface ScreenshotItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  imageUrl: string; // Set to "[APP SCREENSHOT HERE]" by default or replace with actual image URL
  simulatedUI: {
    header: string;
    mode: string;
    activeCommand?: string;
    details: string[];
  };
}

export const APP_SCREENSHOTS: ScreenshotItem[] = [
  {
    id: "home",
    title: "Home",
    badge: "Quick Dashboard",
    description: "Instant access to voice trigger status, recent captures, and quick camera modes.",
    imageUrl: "[APP SCREENSHOT HERE]",
    simulatedUI: {
      header: "Voice App",
      mode: "Ready",
      activeCommand: "Say 'Take Photo' or 'Start Video'",
      details: ["Voice Engine Active", "Smile Detection: ON", "Mic Sensitivity: 85%"]
    }
  },
  {
    id: "camera",
    title: "Camera",
    badge: "Hands-Free Viewfinder",
    description: "Clean camera viewport with real-time audio waveform and zero-latency voice shutter.",
    imageUrl: "[APP SCREENSHOT HERE]",
    simulatedUI: {
      header: "Camera Viewfinder",
      mode: "Photo Mode • 4K",
      activeCommand: "Trigger: 'Take Photo'",
      details: ["Composition Grid: 3x3", "Level Horizon: Active", "Voice Shutter Ready"]
    }
  },
  {
    id: "voice-commands",
    title: "Voice Commands",
    badge: "Command Manager",
    description: "Map unique trigger words to instant camera actions, timers, and mode switches.",
    imageUrl: "[APP SCREENSHOT HERE]",
    simulatedUI: {
      header: "Custom Trigger List",
      mode: "Command Config",
      activeCommand: "Custom Phrase Active",
      details: ["'Snap' → Instant Capture", "'Record' → Start Video", "'Cheese' → Smile & Shoot"]
    }
  },
  {
    id: "gallery",
    title: "Gallery",
    badge: "Smart Media Vault",
    description: "Chronologically organized media gallery with voice tag filters and instant sharing.",
    imageUrl: "[APP SCREENSHOT HERE]",
    simulatedUI: {
      header: "Media Gallery",
      mode: "All Captures (128)",
      activeCommand: "Voice Filter: 'Show Today'",
      details: ["Photos: 114", "Videos: 14", "Cloud Sync Ready"]
    }
  },
  {
    id: "settings",
    title: "Settings",
    badge: "Engine & Camera Setup",
    description: "Fine-tune microphone sensitivity, smile detection prompts, grid overlays, and aspect ratios.",
    imageUrl: "[APP SCREENSHOT HERE]",
    simulatedUI: {
      header: "Preferences",
      mode: "System Settings",
      activeCommand: "Sensitivity: High",
      details: ["Smile Prompt: 'Smile Please!'", "Shutter Sound: Custom", "Aspect Ratio: 16:9"]
    }
  }
];

// 4. SOCIAL MEDIA & CONTACT LINKS
// Replace with your actual URLs or handles
export const SOCIAL_LINKS = {
  github: "[SOCIAL MEDIA LINK HERE]",
  twitter: "[SOCIAL MEDIA LINK HERE]",
  telegram: "[SOCIAL MEDIA LINK HERE]",
  discord: "[SOCIAL MEDIA LINK HERE]",
  email: "support@voiceapp.com", // Replace with your support email
};

// 5. KEY FEATURES LIST
export const APP_FEATURES = [
  {
    id: "voice-commands",
    icon: "Mic",
    title: "Voice Commands",
    description: "Control app functions using customizable voice commands without ever touching the screen.",
    gradient: "from-blue-500 to-cyan-400",
    badge: "Core Feature"
  },
  {
    id: "voice-photo",
    icon: "Camera",
    title: "Voice Photo Capture",
    description: "Take photos using a voice command without manually pressing the shutter button.",
    gradient: "from-purple-500 to-indigo-500",
    badge: "Hands-Free"
  },
  {
    id: "voice-video",
    icon: "Video",
    title: "Voice Video Control",
    description: "Use a separate voice command to switch to video mode and control video recording seamlessly.",
    gradient: "from-pink-500 to-rose-500",
    badge: "Dual Mode"
  },
  {
    id: "smile-detection",
    icon: "Smile",
    title: "Smile Detection",
    description: "Detect whether the person is smiling and provide a customizable voice prompt such as “Smile Please!”.",
    gradient: "from-amber-400 to-orange-500",
    badge: "Smart Detection"
  },
  {
    id: "custom-commands",
    icon: "Sliders",
    title: "Custom Commands",
    description: "Allow users to configure their own personalized voice commands and trigger phrases.",
    gradient: "from-emerald-400 to-teal-500",
    badge: "Personalized"
  },
  {
    id: "gallery",
    icon: "Image",
    title: "Gallery",
    description: "View, organize, and manage captured photos and videos in a smooth, high-speed gallery.",
    gradient: "from-cyan-400 to-blue-600",
    badge: "Organized"
  },
  {
    id: "photo-editing",
    icon: "Sparkles",
    title: "Photo Editing",
    description: "Provide built-in options such as editing, creative filters, and image enhancement for captured media.",
    gradient: "from-violet-400 to-purple-600",
    badge: "Enhancements"
  },
  {
    id: "camera-controls",
    icon: "Settings2",
    title: "Camera Controls",
    description: "Support advanced camera settings such as custom image size, alignment grid, and level horizon options.",
    gradient: "from-blue-400 to-indigo-600",
    badge: "Pro Settings"
  }
];

// 6. HOW IT WORKS 3-STEP GUIDE
export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "01",
    title: "Open Voice App",
    subtitle: "Launch & Calibrate",
    description: "Open the application on your Android device. The high-speed voice recognition engine calibrates in under a second.",
    icon: "Smartphone"
  },
  {
    stepNumber: "02",
    title: "Say Your Command",
    subtitle: "Speak Naturally",
    description: "Say your designated trigger like “Take Photo”, “Start Video”, or your customized phrase from any angle.",
    icon: "Mic"
  },
  {
    stepNumber: "03",
    title: "Let Voice App Do the Work",
    subtitle: "Hands-Free Execution",
    description: "The app instantly triggers the camera shutter, checks for smiles, and safely stores your media in the gallery.",
    icon: "Zap"
  }
];

// 7. INTERACTIVE VOICE COMMAND DEMOS
export const DEMO_COMMANDS = [
  {
    phrase: "Take Photo",
    action: "Photo Captured 📸",
    feedback: "High-resolution photo captured and saved to Gallery.",
    icon: "Camera",
    accent: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10"
  },
  {
    phrase: "Start Video",
    action: "Recording Started 🎥",
    feedback: "Switched to 4K Video Mode and initialized recording.",
    icon: "Video",
    accent: "text-purple-400 border-purple-500/40 bg-purple-500/10"
  },
  {
    phrase: "Smile Please",
    action: "Smile Detection Activated 😊",
    feedback: "Detected smile! Captured with optimal lighting and focus.",
    icon: "Smile",
    accent: "text-amber-400 border-amber-500/40 bg-amber-500/10"
  },
  {
    phrase: "Open Gallery",
    action: "Gallery Opened 🖼️",
    feedback: "Opened recent media vault with 128 captures organized.",
    icon: "Image",
    accent: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10"
  }
];

// 8. WHY VOICE APP BENEFITS
export const WHY_VOICE_APP_ITEMS = [
  {
    title: "Hands-free control",
    description: "Take group selfies, tripod captures, and vlog videos without rushing for a timer or awkward button reaching.",
    icon: "Sparkles"
  },
  {
    title: "Faster interaction",
    description: "Zero-latency audio recognition executes your commands in milliseconds, keeping you focused on the moment.",
    icon: "Zap"
  },
  {
    title: "Customizable commands",
    description: "Set your own trigger words and phrases in any accent, language, or nickname that feels natural to you.",
    icon: "Sliders"
  },
  {
    title: "Easy to use",
    description: "Intuitive, clean interface designed for immediate clarity with no complicated learning curve.",
    icon: "CheckCircle2"
  },
  {
    title: "Modern camera experience",
    description: "Packed with pro features including smile detection, composition grids, horizon levelers, and photo enhancement.",
    icon: "Camera"
  },
  {
    title: "Designed for convenience",
    description: "Engineered to operate reliably in noisy environments, low light, and diverse mobile scenarios.",
    icon: "ShieldCheck"
  }
];
