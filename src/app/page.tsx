import { PartyPopper, Truck, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { MobileShell } from "@/components/MobileShell";
import { SocialLinks } from "@/components/SocialLinks";
import { SiteFooter } from "@/components/SiteFooter";

const highlightCards: {
  icon?: LucideIcon;
  halalBadge?: string;
  title: string;
  text: string;
}[] = [
  {
    icon: PartyPopper,
    title: "Feesten & events",
    text: "Catering voor feesten, evenementen en speciale gelegenheden — met passie bereid.",
  },
  {
    halalBadge: "حلال",
    title: "Eigen smaak",
    text: "Zelf ontwikkelde gerechten en zorgvuldig gekozen kruiden, aangevuld met traditionele Somalische klassiekers — alles is halal.",
  },
  {
    icon: Truck,
    title: "Foodtruck",
    text: "Rice bowls, toppings en huisgemaakte sauzen — vers op locatie.",
  },
];

export default function HomePage() {
  return (
    <MobileShell variant="light">
      <section className="relative -mx-0 -mt-24 flex min-h-[82vh] flex-col items-center justify-center overflow-hidden bg-[#050505] px-4 pt-28 text-center md:-mt-20 md:min-h-[92vh] md:pt-24 lg:min-h-[100vh]">
        <HeroBackgroundVideo />
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-75"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(180,31,35,0.28),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(144,0,16,0.16),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.48)_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl py-12 md:py-16">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            <span aria-hidden>✦</span> Sinds 2021
          </p>
          <h1 className="mb-6 font-headline text-3xl font-extrabold leading-tight tracking-tighter text-white md:text-5xl">
            Africano Catering{" "}
            <span className="text-primary-container">smaak met zorg,</span>{" "}
            op uw feest of event.
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-stone-400 md:text-lg">
            Voor particulieren en bedrijven: catering en foodtruck, met eigen
            gerechten, bijzondere kruiden en traditionele Somalische smaken.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/catering"
              className="inline-block rounded-lg bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-primary-container md:px-8 md:py-4"
            >
              Ontdek catering
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black md:px-8 md:py-4"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Over ons
              </p>
              <h2 className="font-headline text-2xl font-extrabold uppercase tracking-tighter text-on-surface md:text-3xl">
                Waar we voor staan
              </h2>
            </div>
            <Link
              href="/over-ons"
              className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary"
            >
              Lees het hele verhaal →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {highlightCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-xl border border-black/5 bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  {card.halalBadge ? (
                    <span
                      className="mb-4 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white px-2.5 text-base font-black text-primary shadow-sm"
                      aria-hidden
                    >
                      {card.halalBadge}
                    </span>
                  ) : (
                    Icon && (
                      <Icon
                        className="mb-4 h-9 w-9 text-primary"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    )
                  )}
                  <h3 className="mb-2 font-headline text-lg font-bold text-on-surface">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary">
                    {card.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-14 text-white md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-14">
          <div className="rounded-2xl border border-white/10 bg-stone-950/80 p-8 md:p-10">
            <p className="mb-3 text-2xl" aria-hidden>
              🍽️
            </p>
            <h2 className="font-headline text-xl font-black uppercase tracking-tighter md:text-2xl">
              Catering
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Vanaf <strong className="text-white">20 personen</strong> voor
              bruiloften, verjaardagen en bedrijfsfeesten. Verse gerechten,
              aangepast aan uw wensen — wij regelen het eten, u geniet
              zorgeloos.
            </p>
            <Link
              href="/catering"
              className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-primary hover:underline"
            >
              Meer over catering →
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-stone-950/80 p-8 md:p-10">
            <p className="mb-3 text-2xl" aria-hidden>
              🚚
            </p>
            <h2 className="font-headline text-xl font-black uppercase tracking-tighter md:text-2xl">
              Food truck
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Wij komen naar uw locatie en bereiden vers ter plekke — gezellige
              sfeer, lekker eten voor uw gasten.
            </p>
            <Link
              href="/foodtruck"
              className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-primary hover:underline"
            >
              Meer over de truck →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-primary/10 px-6 py-12 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-headline text-lg font-bold uppercase tracking-tighter text-on-surface md:text-xl">
              Online shop
            </h2>
            <p className="mt-2 max-w-xl text-sm text-secondary">
              Onze shop is nog in aanbouw. Tot die tijd helpen we u graag via
              e-mail met bestellingen en aanvragen.
            </p>
          </div>
          <Link
            href="/shop"
            className="shrink-0 rounded-lg border border-primary/30 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Shop-info
          </Link>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-2xl font-black uppercase tracking-tighter text-on-surface md:text-3xl">
            Laten we praten
          </h2>
          <p className="mt-4 text-secondary">
            Bel, app of mail — we denken graag met u mee over catering, truck of
            maatwerk.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary-container"
          >
            Contact
          </Link>
          <div className="mt-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Volg ons ook op
            </p>
            <SocialLinks
              tone="light"
              className="flex flex-wrap items-center justify-center gap-2"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </MobileShell>
  );
}
