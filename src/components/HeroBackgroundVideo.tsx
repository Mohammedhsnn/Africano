"use client";

import { useEffect, useRef, useState } from "react";

/** Override with a CDN or GitHub Release asset URL to keep the HTML bundle light. */
const HERO_VIDEO_SRC =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || "/media/africano-hero.mp4";

export function HeroBackgroundVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Defer the network download until the hero is (almost) visible or the main thread is idle.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let cancelled = false;
    let armed = false;

    const arm = () => {
      if (cancelled || armed) return;
      armed = true;
      setLoadVideo(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) arm();
      },
      { rootMargin: "320px", threshold: 0 },
    );
    io.observe(wrap);

    const win = typeof window !== "undefined" ? window : undefined;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (win && "requestIdleCallback" in win) {
      idleId = win.requestIdleCallback(() => arm(), { timeout: 1200 });
    } else {
      timeoutId = win?.setTimeout(() => arm(), 250);
    }

    return () => {
      cancelled = true;
      io.disconnect();
      if (idleId !== undefined && win && "cancelIdleCallback" in win) {
        win.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) win?.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!loadVideo) return;
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const tryPlay = async () => {
      if (cancelled) return;
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "true");
      video.setAttribute("webkit-playsinline", "true");

      try {
        await video.play();
      } catch {
        // Autoplay may be blocked until a user gesture (handled below).
      }
    };

    const onPlaying = () => {
      if (!cancelled) setIsPlaying(true);
    };

    const onEnded = () => {
      if (cancelled) return;
      video.currentTime = 0;
      void tryPlay();
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("ended", onEnded);
    void video.load();
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
      video.removeEventListener("ended", onEnded);
      document.removeEventListener("touchstart", retryOnInteraction);
    };
  }, [loadVideo]);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <video
        ref={videoRef}
        className={`hero-bg-video h-full w-full min-h-full min-w-full object-cover object-center [transform:translateZ(0)] [backface-visibility:hidden] transition-opacity duration-500 ${
          isPlaying ? "opacity-[0.58]" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
        aria-hidden
      >
        {loadVideo ? (
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        ) : null}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
