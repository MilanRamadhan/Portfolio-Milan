"use client";

const items = [
  { label: "FULL-STACK WEB", icon: "◈" },
  { label: "NEXT.JS & REACT", icon: "◈" },
  { label: "MACHINE LEARNING", icon: "◈" },
  { label: "PYTHON & SCIKIT", icon: "◈" },
  { label: "MOBILE APPS", icon: "◈" },
  { label: "KOTLIN & FLUTTER", icon: "◈" },
  { label: "SMART CITY", icon: "◈" },
  { label: "UI/UX DESIGN", icon: "◈" },
  { label: "BOOKING SYSTEM", icon: "◈" },
  { label: "LARAVEL & VUE", icon: "◈" },
  { label: "POSTGRESQL", icon: "◈" },
  { label: "FIREBASE & IOT", icon: "◈" },
];

// Duplicate for seamless loop
const tickerItems = [...items, ...items];

export default function SkillsTicker() {
  return (
    <div className="border-t border-gray-300/50 overflow-hidden py-5 group">
      <div className="flex gap-0 w-max animate-ticker group-hover:[animation-play-state:paused]">
        {tickerItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
            <span className="text-gray-400 text-[10px]">{item.icon}</span>
            <span className="font-bold text-xs tracking-widest text-gray-700 uppercase">{item.label}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
