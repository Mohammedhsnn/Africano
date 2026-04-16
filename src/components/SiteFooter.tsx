import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/catering", label: "Catering" },
  { href: "/foodtruck", label: "Food truck" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

const tel = "+31641947956";
const telDisplay = "+31 6 41 94 79 56";

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-[#050505]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-primary/15 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-14">
        <div className="mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-md">
            <Link
              href="/"
              className="font-headline text-xl font-bold uppercase tracking-tight text-white transition-colors hover:text-primary"
            >
              Africano Catering
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
              Catering &amp; foodtruck sinds 2021 — verse smaken, eigen kruiden
              en een vleugje traditie.{" "}
              <span className="text-stone-400">
                Laten we uw volgende feest lekker maken.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 md:gap-16">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Pagina&apos;s
              </p>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-sm text-stone-400 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Zo bereikt u ons
              </p>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href={`tel:${tel}`}
                    className="flex items-start gap-3 text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary ring-1 ring-white/10">
                      <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                        Bellen / WhatsApp
                      </span>
                      {telDisplay}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@africanocatering.nl"
                    className="flex items-start gap-3 text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary ring-1 ring-white/10">
                      <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                        E-mail
                      </span>
                      info@africanocatering.nl
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 border-t border-white/10 pt-8 text-center md:grid-cols-3 md:items-center">
          <p className="text-[11px] uppercase tracking-widest text-stone-600 md:text-left">
            © {new Date().getFullYear()} Africano Catering · Met zorg bereid in
            Zeeland
          </p>
          <p className="text-[11px] text-stone-600 md:text-center">
            Gerealiseerd door{" "}
            <a
              href="https://www.articxsoftware.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-stone-400 underline decoration-primary underline-offset-4 transition-colors hover:text-white"
            >
              Articx Software
            </a>
          </p>
          <p className="text-[11px] text-stone-600 md:text-right">
            <span className="text-primary">♥</span>{" "}
            <span className="italic text-stone-500">
              Smaak die blijft hangen
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
