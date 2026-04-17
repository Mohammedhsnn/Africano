"use client";

import { useEffect, useRef } from "react";

/** Override with a CDN or GitHub Release asset URL to keep the HTML bundle light. */
const HERO_VIDEO_SRC =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || "/media/africano-hero.mp4";

/**
 * Hero background: must load immediately (no idle/IO deferral) or iOS often won’t
 * start muted autoplay until a tap. Retries play() on media + visibility events.
 */
export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const tryPlay = async () => {
      if (cancelled) return;
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "true");

      try {
        await video.play();
      } catch {
        /* autoplay may still succeed on a later event */
      }
    };

    const onEnded = () => {
      if (cancelled) return;
      video.currentTime = 0;
      void tryPlay();
    };

    const kickOff = () => void tryPlay();

    video.addEventListener("loadedmetadata", kickOff);
    video.addEventListener("loadeddata", kickOff);
    video.addEventListener("canplay", kickOff);
    video.addEventListener("canplaythrough", kickOff);
    video.addEventListener("ended", onEnded);

    void tryPlay();

    const retryDelaysMs = [80, 250, 700, 2000] as const;
    const timeoutIds = retryDelaysMs.map((ms) =>
      window.setTimeout(() => void tryPlay(), ms),
    );

    const onVisibility = () => {
      if (document.visibilityState === "visible") void tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", kickOff);

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", kickOff);
      video.removeEventListener("loadeddata", kickOff);
      video.removeEventListener("canplay", kickOff);
      video.removeEventListener("canplaythrough", kickOff);
      video.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", kickOff);
      for (const id of timeoutIds) window.clearTimeout(id);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        className="hero-bg-video pointer-events-none h-full w-full min-h-full min-w-full object-cover object-center opacity-[0.58] [transform:translateZ(0)] [backface-visibility:hidden]"
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
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
