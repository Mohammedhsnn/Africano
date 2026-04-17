"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export function LocaleHtmlAttributes() {
  const pathname = usePathname();
  useEffect(() => {
    const seg = pathname.split("/")[1];
    document.documentElement.lang = isLocale(seg) ? seg : defaultLocale;
  }, [pathname]);
  return null;
}
