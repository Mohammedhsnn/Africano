import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";

export default function CateringPage() {
  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-4 pb-12 md:px-8">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-3xl" aria-hidden>
            🍽️
          </p>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Catering — Africano Catering
          </p>
          <h1 className="font-headline text-3xl font-black uppercase tracking-tighter text-white md:text-4xl">
            Catering op maat
          </h1>
          <p className="mt-4 text-stone-400">
            Geen online menu: wij bespreken graag persoonlijk wat er bij uw
            gelegenheid past.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {["Feesten", "Bruiloften", "Bedrijven", "Vanaf 20 personen"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-stone-200"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </header>

        <section className="mx-auto grid w-full max-w-6xl gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-stone-950/70 via-black/60 to-stone-900/70 p-4 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:p-6">
          <div className="rounded-2xl border border-white/10 bg-stone-950/70 p-7 md:p-8">
            <p className="mb-4 inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Vanaf 20 personen
            </p>
            <p className="text-lg leading-relaxed text-stone-200">
              Africano Catering verzorgt catering voor bruiloften,
              verjaardagsfeesten en bedrijfsfeesten{" "}
              <strong className="text-white">vanaf 20 personen</strong>.
            </p>
            <p className="mt-5 leading-relaxed text-stone-300">
              Wij maken verse gerechten met veel smaak. Alles wordt met zorg
              bereid en aangepast aan uw wensen.
            </p>
            <p className="mt-5 leading-relaxed text-stone-300">
              Heeft u iets te vieren of een feest gepland? Dan zorgen wij voor
              het eten, zodat u zorgeloos kunt genieten.
            </p>
            <p className="mt-5 border-l-2 border-primary pl-6 text-stone-200">
              Staat wat u zoekt er niet tussen? Neem gerust contact met ons op.
              Wij denken graag met u mee.
            </p>

            <ul className="mt-8 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
              {[
                "Bruiloften & partijen",
                "Verjaardagsfeesten",
                "Bedrijfsfeesten",
                "Evenementen op locatie",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-4 py-3"
                >
                  <CircleCheck
                    className="h-5 w-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary-container"
              >
                Neem contact op
              </Link>
              <Link
                href="/foodtruck"
                className="text-xs font-bold uppercase tracking-widest text-stone-300 hover:text-primary"
              >
                Of bekijk de food truck →
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 md:min-h-[360px]">
              <Image
                src="/media/catering-ambience.png"
                alt="Sfeervolle Africano catering opstelling"
                fill
                priority
                className="object-cover object-[70%_center]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </MobileShell>
  );
}
