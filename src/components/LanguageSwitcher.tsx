"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { useLocale } from "@/components/LocaleProvider";

// Labels are static per target locale to avoid async in client
const otherLocaleLabel: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const other = (locales.find((l) => l !== locale) ?? "en") as Locale;

  const stripped = pathname.replace(/^\/(nl|en)(?=\/|$)/, "");
  const rest = stripped === "" ? "/" : stripped;
  const href = localizePath(other, rest);

  const aria =
    other === "en"
      ? "Switch to English"
      : "Schakel naar Nederlands";

  return (
    <Link
      href={href}
      hrefLang={other}
      lang={other}
      className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-300 transition-colors hover:border-primary/40 hover:text-white"
      aria-label={aria}
    >
      {otherLocaleLabel[other]}
    </Link>
  );
}
