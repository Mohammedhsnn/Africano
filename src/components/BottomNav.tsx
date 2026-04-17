"use client";

import {
  Home,
  Mail,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { localizePath } from "@/lib/i18n/paths";
import en from "@/messages/en";
import nl from "@/messages/nl";

export function BottomNav() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = locale === "nl" ? nl.nav : en.nav;

  const items: { href: string; icon: LucideIcon; label: string }[] = [
    { href: "/", icon: Home, label: t.home },
    { href: "/catering", icon: UtensilsCrossed, label: t.catering },
    { href: "/foodtruck", icon: Truck, label: t.truckShort },
    { href: "/contact", icon: Mail, label: t.contact },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch justify-around border-t border-white/10 bg-black/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden"
      aria-label={t.bottomNav}
    >
      {items.map((item) => {
        const localized = localizePath(locale, item.href);
        const active =
          item.href === "/"
            ? pathname === localized || pathname === `${localized}/`
            : pathname.startsWith(localized);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={localized}
            className={`relative flex min-w-[4rem] flex-col items-center gap-0.5 py-2 text-[10px] font-bold uppercase tracking-wide ${
              active ? "text-primary" : "text-stone-500"
            }`}
          >
            <Icon
              className="h-5 w-5"
              strokeWidth={1.75}
              aria-hidden
            />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
