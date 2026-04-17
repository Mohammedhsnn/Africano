"use client";

import { useEffect, useRef, useState } from "react";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const tryPlay = async () => {
      if (cancelled) return;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "true");
      video.setAttribute("webkit-playsinline", "true");

      try {
        await video.play();
      } catch {
        // Some mobile browsers require user interaction before play() succeeds.
      }
    };

    const onPlaying = () => {
      if (!cancelled) setIsPlaying(true);
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("canplay", tryPlay);
    void tryPlay();

    const retryOnInteraction = () => void tryPlay();
    document.addEventListener("touchstart", retryOnInteraction, {
      passive: true,
      once: true,
    });

    return () => {
      cancelled = true;
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("touchstart", retryOnInteraction);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={`hero-bg-video pointer-events-none absolute inset-0 z-0 h-full w-full min-h-full min-w-full object-cover object-center [transform:translateZ(0)] [backface-visibility:hidden] transition-opacity duration-500 ${
        isPlaying ? "opacity-[0.58]" : "opacity-0"
      }`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      tabIndex={-1}
      aria-hidden
    >
      <source src="/media/africano-hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
