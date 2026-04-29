"use client";

import { useState, useRef, useEffect } from "react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt to autoplay when the component mounts
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Autoplay blocked by browser. User interaction needed.", err);
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={togglePlay} className="group bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center w-12 h-12" aria-label="Toggle Music">
        {isPlaying ? (
          <>
            {/* Equalizer Animation (visible when playing) */}
            <div className="flex items-center justify-center gap-[3px] h-4 group-hover:hidden w-6">
              <div className="w-[3px] bg-white rounded-full" style={{ animation: "music-bar 1s ease-in-out infinite 0s", height: "12px" }}></div>
              <div className="w-[3px] bg-white rounded-full" style={{ animation: "music-bar 1.2s ease-in-out infinite 0.2s", height: "16px" }}></div>
              <div className="w-[3px] bg-white rounded-full" style={{ animation: "music-bar 0.8s ease-in-out infinite 0.4s", height: "8px" }}></div>
              <div className="w-[3px] bg-white rounded-full" style={{ animation: "music-bar 1.1s ease-in-out infinite 0.1s", height: "14px" }}></div>
            </div>
            {/* Pause icon (visible only on hover) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden group-hover:block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          </>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        )}
      </button>
      <audio ref={audioRef} src="/music.mp3" loop />
    </div>
  );
}
