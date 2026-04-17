"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { localizePath } from "@/lib/i18n/paths";

function FlagNl({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 9 6"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect fill="#AE1C28" width="9" height="2" />
      <rect fill="#FFF" y="2" width="9" height="2" />
      <rect fill="#21468B" y="4" width="9" height="2" />
    </svg>
  );
}

/** Union Jack (United Kingdom). */
function FlagUk({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path fill="#012169" d="M0 0h60v30H0z" />
      <path stroke="#fff" strokeWidth="6" d="M0 0l60 30M60 0L0 30" />
      <path stroke="#C8102E" strokeWidth="4" d="M0 0l60 30M60 0L0 30" />
      <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
      <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  const stripped = pathname.replace(/^\/(nl|en)(?=\/|$)/, "");
  const rest = stripped === "" ? "/" : stripped;
  const nlHref = localizePath("nl", rest);
  const enHref = localizePath("en", rest);

  const baseLink =
    "flex items-center justify-center rounded-md p-1.5 outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black/80";

  return (
    <div
      className="flex items-center gap-1 bg-transparent"
      role="group"
      aria-label="Taal / Language"
    >
      <Link
        href={nlHref}
        hrefLang="nl"
        lang="nl"
        title="Nederlands"
        aria-label="Nederlands"
        aria-current={locale === "nl" ? "page" : undefined}
        className={`${baseLink} ${
          locale === "nl"
            ? "opacity-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
            : "opacity-45 hover:opacity-[0.88]"
        }`}
      >
        <FlagNl className="h-[13px] w-[19px] rounded-[2px]" />
      </Link>
      <Link
        href={enHref}
        hrefLang="en"
        lang="en"
        title="English"
        aria-label="English"
        aria-current={locale === "en" ? "page" : undefined}
        className={`${baseLink} ${
          locale === "en"
            ? "opacity-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
            : "opacity-45 hover:opacity-[0.88]"
        }`}
      >
        <FlagUk className="h-[13px] w-[26px] rounded-[2px]" />
      </Link>
    </div>
  );
}
