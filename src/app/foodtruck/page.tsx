import { Flame } from "lucide-react";
import Link from "next/link";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";

export default function FoodtruckPage() {
  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-4 pb-12 md:px-8">
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-stone-950 via-black to-[#1a0505] px-6 py-12 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-primary/10 blur-2xl"
            aria-hidden
          />
          <p className="mb-3 text-3xl" aria-hidden>
            🚚
          </p>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Food truck — Africano Catering
          </p>
          <h1 className="max-w-2xl font-headline text-3xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
            De Africano food truck op uw locatie
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone-400">
            Wij komen naar u toe en bereiden het eten vers ter plekke — gezellige
            sfeer en smaakvolle maaltijden voor uw gasten.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-2xl space-y-6 text-stone-300">
          <p className="leading-relaxed">
            De Africano Foodtruck is te boeken voor feesten en evenementen. Denk
            aan onze rice bowls met verschillende toppings en huisgemaakte
            sauzen — vers bereid waar u bent.
          </p>
          <div>
            <h2 className="mb-4 font-headline text-sm font-bold uppercase tracking-widest text-white">
              Geschikt voor
            </h2>
            <ul className="space-y-3">
              {[
                "Verjaardagsfeesten",
                "Bedrijfsfeesten",
                "Evenementen",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Flame
                    className="h-5 w-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="rounded-xl border border-white/10 bg-stone-950/80 p-6 text-sm text-stone-400">
            Heeft u interesse in onze foodtruck? Neem gerust contact met ons op
            voor de mogelijkheden en beschikbaarheid.
          </p>
        </section>

        <div className="mx-auto mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary-container"
          >
            Vraag beschikbaarheid aan
          </Link>
        </div>
      </main>
      <SiteFooter />
    </MobileShell>
  );
}
