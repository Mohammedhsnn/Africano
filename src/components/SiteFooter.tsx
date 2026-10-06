import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizePath } from "@/lib/i18n/paths";

const tel = "+31641947956";
const telDisplay = "+31 6 41 94 79 56";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const f = dict.footer;
  const n = dict.nav;

  const navLinks = [
    { href: "/", label: n.home },
    { href: "/over-ons", label: n.about },
    { href: "/catering", label: n.catering },
    { href: "/foodtruck", label: n.foodTruck },
    { href: "/shop", label: n.shop },
    { href: "/contact", label: n.contact },
  ];

  const year = new Date().getFullYear();
  const copyright = f.copyright.replace("{year}", String(year));

  return (
    <footer className="mt-auto border-t-4 border-flame bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          <div className="max-w-sm">
            <Link
              href={localizePath(locale, "/")}
              className="inline-block"
              aria-label={dict.meta.siteName}
            >
              <Image
                src="/brand/africano-logo.png"
                alt={dict.meta.siteName}
                width={420}
                height={220}
                className="h-16 w-auto"
                sizes="130px"
              />
            </Link>
            <p className="mt-4 leading-relaxed text-cream/60">
              {f.tagline}{" "}
              <span className="text-cream/85">{f.taglineAccent}</span>
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-saffron">
              {f.pages}
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={localizePath(locale, l.href)}
                    className="text-cream/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-saffron">
              {f.reachUs}
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${tel}`}
                  className="group flex items-start gap-3 text-cream/80 transition-colors hover:text-white"
                >
                  <Phone
                    className="mt-1 h-4 w-4 shrink-0 text-ember"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.1em] text-cream/45">
                      {f.phoneWhatsapp}
                    </span>
                    {telDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@africanocatering.nl"
                  className="group flex items-start gap-3 text-cream/80 transition-colors hover:text-white"
                >
                  <Mail
                    className="mt-1 h-4 w-4 shrink-0 text-ember"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.1em] text-cream/45">
                      {f.email}
                    </span>
                    info@africanocatering.nl
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-sm text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>{copyright}</p>
          <p className="font-script text-lg text-saffron/90">{f.motto}</p>
          <p>
            {f.builtBy}{" "}
            <a
              href="https://www.articxsoftware.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/75 underline decoration-flame underline-offset-4 transition-colors hover:text-white"
            >
              Articx Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
