"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/lib/i18n/config";

const LocaleContext = createContext<Locale | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const v = useContext(LocaleContext);
  if (!v) throw new Error("useLocale must be used within LocaleProvider");
  return v;
}
