"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { localizePath } from "@/lib/i18n/paths";
import en from "@/messages/en";
import nl from "@/messages/nl";

const tel = "+31641947956";
const telDisplay = "+31 6 41 94 79 56";

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = locale === "nl" ? nl.nav : en.nav;
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 16,
    () => false,
  );

  const nav = [
    { href: "/", label: t.home },
    { href: "/over-ons", label: t.about },
    { href: "/catering", label: t.catering },
    { href: "/foodtruck", label: t.foodTruck },
    { href: "/shop", label: t.shop },
    { href: "/contact", label: t.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-ink/92 shadow-[0_1px_0_rgba(255,255,255,0.06),0_12px_30px_-14px_rgba(0,0,0,0.9)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/75 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 md:h-20 lg:px-8">
        <Link
          href={localizePath(locale, "/")}
          className="shrink-0"
          title="Africano Catering"
          aria-label="Africano Catering"
        >
          <Image
            src="/brand/africano-logo.png"
            alt="Africano Catering"
            width={420}
            height={220}
            className="h-11 w-auto md:h-14"
            preload
            sizes="(max-width: 768px) 90px, 110px"
          />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center md:flex"
          aria-label={t.mainMenu}
        >
          {nav.map((item) => {
            const localized = localizePath(locale, item.href);
            const active =
              item.href === "/"
                ? pathname === localized || pathname === `${localized}/`
                : pathname.startsWith(localized);
            return (
              <Link
                key={item.href}
                href={localized}
                aria-current={active ? "page" : undefined}
                className={`relative px-2.5 py-2 font-display text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-[3px] after:-skew-x-12 after:bg-flame after:transition-transform lg:px-3.5 lg:text-[15px] lg:after:inset-x-3.5 ${
                  active
                    ? "text-white after:scale-x-100"
                    : "text-cream/65 after:scale-x-0 hover:text-white hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-4 md:ml-0">
          <a
            href={`tel:${tel}`}
            className="hidden items-center gap-2 font-display text-[15px] font-semibold tracking-wide text-cream/80 transition-colors hover:text-white lg:inline-flex"
          >
            <Phone className="h-4 w-4 text-ember" strokeWidth={2} aria-hidden />
            {telDisplay}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
