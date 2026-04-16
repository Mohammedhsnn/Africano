import { Mail } from "lucide-react";
import Link from "next/link";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";

export default function ShopPage() {
  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-4 pb-12 md:px-8">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Shop — Africano Catering
          </p>
          <h1 className="font-headline text-3xl font-black uppercase tracking-tighter text-white md:text-4xl">
            Binnenkort online
          </h1>
        </header>

        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-8 text-stone-300 md:p-10">
          <p className="text-lg leading-relaxed">
            Onze shop is op dit moment nog <strong className="text-white">niet beschikbaar</strong>.
          </p>
          <p className="leading-relaxed text-stone-400">
            Wij werken eraan om deze binnenkort online te zetten. Tot die tijd
            kunt u bestellingen en aanvragen eenvoudig via e-mail plaatsen.
          </p>
          <p className="leading-relaxed text-stone-400">
            Heeft u interesse in onze gerechten, catering of foodtruck? Neem
            gerust contact met ons op, wij helpen u graag verder.
          </p>
        </div>

        <div className="mx-auto mt-10 flex flex-col items-center gap-3">
          <a
            href="mailto:info@africanocatering.nl"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary-container"
          >
            <Mail className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
            Mail info@africanocatering.nl
          </a>
          <Link
            href="/contact"
            className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-primary"
          >
            Alle contactopties →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </MobileShell>
  );
}
