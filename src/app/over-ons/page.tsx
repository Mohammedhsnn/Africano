import Link from "next/link";
import { MobileShell } from "@/components/MobileShell";
import { SocialLinks } from "@/components/SocialLinks";
import { SiteFooter } from "@/components/SiteFooter";

export default function OverOnsPage() {
  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-4 pb-12 md:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Over ons
          </span>
          <h1 className="font-headline text-3xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
            Africano Catering sinds{" "}
            <span className="text-primary">2021</span>
          </h1>
        </header>

        <div className="mx-auto max-w-3xl space-y-8 text-stone-300">
          <p className="text-lg leading-relaxed">
            Africano Catering staat sinds 2021 klaar voor zowel particulieren
            als bedrijven. Wij verzorgen catering voor feesten, evenementen en
            speciale gelegenheden, met gerechten die met zorg en passie worden
            bereid.
          </p>
          <p className="leading-relaxed">
            Onze keuken bestaat uit unieke, zelf ontwikkelde gerechten,
            samengesteld met bijzondere en zorgvuldig geselecteerde kruiden.
            Daarnaast bieden wij een aantal Somalische gerechten, bereid op
            traditionele wijze. Deze combinatie zorgt voor een eigen,
            herkenbare smaak die Africano Catering onderscheidt.
          </p>
          <p className="leading-relaxed">
            Naast catering zijn wij ook actief met onze Africano foodtruck. Met
            de foodtruck brengen wij onze gerechten direct naar verschillende
            locaties en evenementen. Hier serveren wij verse en smaakvolle
            maaltijden, zoals onze bekende rice bowls met verschillende toppings
            en huisgemaakte sauzen.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Zorg & passie",
              d: "Elk event krijgt de aandacht die het verdient.",
            },
            {
              n: "02",
              t: "Eigen receptuur",
              d: "Unieke gerechten met karaktervolle kruiden.",
            },
            {
              n: "03",
              t: "Traditie",
              d: "Somalische klassiekers, traditioneel bereid.",
            },
          ].map((x) => (
            <div
              key={x.n}
              className="rounded-xl border border-white/10 bg-stone-950/90 p-6"
            >
              <span className="font-headline text-2xl font-black text-primary">
                {x.n}
              </span>
              <h2 className="mt-3 font-headline text-sm font-bold uppercase tracking-wide text-white">
                {x.t}
              </h2>
              <p className="mt-2 text-sm text-stone-500">{x.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-sm text-stone-300">
              Nieuwsgierig naar catering of de foodtruck? We denken graag met u
              mee.
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block shrink-0 rounded-lg bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary-container"
          >
            Contact
          </Link>
        </div>
      </main>
      <SiteFooter />
    </MobileShell>
  );
}
