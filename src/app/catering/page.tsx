import { CircleCheck } from "lucide-react";
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
        </header>

        <div className="mx-auto max-w-2xl space-y-8 rounded-2xl border border-white/10 bg-stone-950/60 p-8 md:p-10">
          <p className="text-lg leading-relaxed text-stone-200">
            Africano Catering verzorgt catering voor bruiloften,
            verjaardagsfeesten en bedrijfsfeesten{" "}
            <strong className="text-white">vanaf 20 personen</strong>.
          </p>
          <p className="leading-relaxed text-stone-400">
            Wij maken verse gerechten met veel smaak. Alles wordt met zorg bereid
            en aangepast aan uw wensen.
          </p>
          <p className="leading-relaxed text-stone-400">
            Heeft u iets te vieren of een feest gepland? Dan zorgen wij voor het
            eten, zodat u zorgeloos kunt genieten.
          </p>
          <p className="border-l-2 border-primary pl-6 text-stone-300">
            Staat wat u zoekt er niet tussen? Neem gerust contact met ons op. Wij
            denken graag met u mee.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-2xl gap-3 text-sm text-stone-400 md:grid-cols-2">
          {[
            "Bruiloften & partijen",
            "Verjaardagsfeesten",
            "Bedrijfsfeesten",
            "Evenementen op locatie",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-lg border border-white/5 bg-black/40 px-4 py-3"
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

        <div className="mx-auto mt-12 flex flex-col items-center gap-4 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary-container"
          >
            Neem contact op
          </Link>
          <Link
            href="/foodtruck"
            className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-primary"
          >
            Of bekijk de food truck →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </MobileShell>
  );
}
