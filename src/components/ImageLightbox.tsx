"use client";

import { Download, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

type LightboxImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
};

type Labels = {
  enlarge: string;
  close: string;
  download: string;
};

function LightboxItem({
  image,
  labels,
}: {
  image: LightboxImage;
  labels: Labels;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  return (
    <li>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="group relative block aspect-[4/5] w-full overflow-hidden rounded-lg border border-white/10 bg-black text-left outline-none focus-visible:ring-2 focus-visible:ring-saffron"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black via-black/80 to-transparent p-5 pt-16">
          <span className="font-display text-2xl font-extrabold uppercase leading-none text-cream">
            {image.label}
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-flame px-3 py-2 font-display text-sm font-bold uppercase tracking-[0.06em] text-white">
            <Maximize2 className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            {labels.enlarge}
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={image.label}
        className="lightbox m-auto max-h-none max-w-none bg-transparent p-0 text-cream"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="flex max-h-dvh w-screen flex-col items-center gap-3 p-3 sm:w-auto">
          <div className="flex w-full items-center justify-end gap-2">
            <a
              href={image.src}
              download
              className="btn border-white/30 px-3 py-2 text-sm text-cream hover:border-white"
            >
              <Download className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              {labels.download}
            </a>
            <button
              type="button"
              onClick={close}
              className="btn bg-flame px-3 py-2 text-sm text-white hover:bg-flame-deep"
            >
              <X className="h-4 w-4" strokeWidth={2.5} aria-hidden />
              {labels.close}
            </button>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 960px) 960px, 100vw"
            className="h-auto max-h-[calc(100dvh-5rem)] w-auto max-w-full rounded-md"
          />
        </div>
      </dialog>
    </li>
  );
}

export function ImageLightbox({
  images,
  labels,
}: {
  images: LightboxImage[];
  labels: Labels;
}) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 md:gap-8">
      {images.map((image) => (
        <LightboxItem key={image.src} image={image} labels={labels} />
      ))}
    </ul>
  );
}
