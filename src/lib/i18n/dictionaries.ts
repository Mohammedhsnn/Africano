import "server-only";

import type { Locale } from "./config";
import { isLocale } from "./config";
import en from "@/messages/en";
import nl from "@/messages/nl";
import type { Messages } from "@/messages/nl";

const dictionaries: Record<Locale, Messages> = {
  nl,
  en,
};

export function hasLocale(value: string): value is Locale {
  return isLocale(value);
}

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale];
}
