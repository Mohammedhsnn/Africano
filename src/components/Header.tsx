"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { localizePath } from "@/lib/i18n/paths";
import en from "@/messages/en";
import nl from "@/messages/nl";

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = locale === "nl" ? nl.nav : en.nav;

  const nav = [
    { href: "/", label: t.home },
    { href: "/over-ons", label: t.about },
    { href: "/catering", label: t.catering },
    { href: "/foodtruck", label: t.foodTruck },
    { href: "/shop", label: t.shop },
    { href: "/contact", label: t.contact },
  ];

  return (
    <>
      <div className="fixed inset-x-0 top-3 z-50 flex justify-center md:hidden">
        <div className="relative w-full px-4">
          <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
            <LanguageSwitcher />
          </div>
          <div className="flex justify-center">
            <Link
              href={localizePath(locale, "/")}
              className="pointer-events-auto"
              title="Africano Catering"
              aria-label="Africano Catering"
            >
              <Image
                src="/brand/africano-mobile-logo-v2.png"
                alt="Africano Catering"
                width={420}
                height={220}
                className="h-16 w-auto drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
                priority
                sizes="220px"
              />
            </Link>
          </div>
        </div>
      </div>

      <header className="fixed top-0 z-50 hidden w-full border-b border-white/[0.06] bg-[#030303]/98 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.85)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#030303]/92 md:block">
        <div className="relative mx-auto flex h-20 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href={localizePath(locale, "/")}
            className="relative z-10 shrink-0"
            title="Africano Catering"
            aria-label="Africano Catering"
          >
            <Image
              src="/brand/africano-logo.png"
              alt="Africano Catering"
              width={420}
              height={220}
              className="h-14 w-auto lg:h-16"
              priority
              sizes="(max-width: 1024px) 220px, 260px"
            />
          </Link>
          <nav
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-label={t.mainMenu}
          >
            <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-0.5">
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
                    className={`rounded-md px-2.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors lg:px-3 lg:text-[11px] ${
                      active
                        ? "bg-white/[0.06] text-primary"
                        : "text-stone-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
          <div className="relative z-10 ml-auto shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
    </>
  );
}
