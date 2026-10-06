import {
  ArrowRight,
  ChefHat,
  Mail,
  MessageCircle,
  PartyPopper,
  Phone,
  Truck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HalalStamp } from "@/components/HalalStamp";
import { HomeReviews } from "@/components/HomeReviews";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialLinks } from "@/components/SocialLinks";
import { TruckSchedule, TruckStatus } from "@/components/TruckSchedule";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary, hasLocale } from "@/lib/i18n/dictionaries";
import { localizePath } from "@/lib/i18n/paths";

const heroVideoSrc =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || "/media/africano-hero.mp4";

const tel = "+31641947956";

function StrongLine({
  text,
  strong,
  strongClassName,
}: {
  text: string;
  strong: string;
  strongClassName?: string;
}) {
  const parts = text.split("{strong}");
  if (parts.length !== 2) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <strong className={strongClassName}>{strong}</strong>
      {parts[1]}
    </>
  );
}

function ServiceCard({
  href,
  image,
  imageAlt,
  imageClassName,
  title,
  link,
  children,
}: {
  href: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  title: string;
  link: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-lg bg-ink text-cream shadow-[0_24px_50px_-28px_rgba(11,9,8,0.7)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
          className={`object-cover transition-transform duration-700 group-hover:scale-[1.04] ${imageClassName ?? ""}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="font-display text-3xl font-extrabold uppercase leading-none md:text-4xl">
          {title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-cream/75">{children}</p>
        <span className="mt-6 inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-[0.08em] text-ember transition-colors group-hover:text-white">
          {link}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            strokeWidth={2.25}
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const h = dict.home;

  const values: { key: string; icon: LucideIcon; title: string; text: string }[] =
    [
      {
        key: "events",
        icon: PartyPopper,
        title: h.cardEventsTitle,
        text: h.cardEventsText,
      },
      {
        key: "taste",
        icon: ChefHat,
        title: h.cardTasteTitle,
        text: h.cardTasteText,
      },
      {
        key: "truck",
        icon: Truck,
        title: h.cardTruckTitle,
        text: h.cardTruckText,
      },
    ];

  // Twee keer de lijst per helft, zodat de band ook op brede schermen naadloos doorloopt.
  const bandItems = [...h.band, ...h.band];

  return (
    <MobileShell>
      <section className="relative -mt-16 flex min-h-[calc(100svh-4.5rem)] flex-col justify-end overflow-hidden bg-ink md:-mt-20 md:min-h-[min(100svh,64rem)]">
        <video
          className="hero-bg-video pointer-events-none absolute inset-0 z-0 h-full w-full min-h-full min-w-full object-cover object-center md:object-[50%_88%] [transform:translateZ(0)] [backface-visibility:hidden]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/africano-hero-poster.jpg"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          aria-hidden
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_top,#0b0908_0%,rgba(11,9,8,0.95)_52%,rgba(11,9,8,0.5)_70%,rgba(11,9,8,0.15)_85%,rgba(11,9,8,0.5)_100%)] md:bg-[linear-gradient(to_top,#0b0908_0%,transparent_32%),linear-gradient(100deg,rgba(11,9,8,0.95)_0%,rgba(11,9,8,0.78)_45%,rgba(11,9,8,0.25)_80%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-5 pb-10 pt-32 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:pb-20 lg:px-8">
          <div>
            <p className="font-script text-2xl text-saffron md:text-3xl">
              {h.heroBadge}
            </p>
            <h1 className="mt-3 font-display text-[clamp(3.4rem,12vw,7.75rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.01em] text-cream">
              <span className="block">{h.heroTitleLead}</span>
              <span className="block text-flame">{h.heroTitleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
              {h.heroSub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={localizePath(locale, "/catering")}
                className="btn bg-flame text-white hover:bg-flame-deep"
              >
                {h.ctaCatering}
              </Link>
              <Link
                href={localizePath(locale, "/foodtruck")}
                className="btn border-cream/35 text-cream hover:border-cream hover:bg-cream hover:text-ink"
              >
                {h.ctaTruck}
              </Link>
            </div>
          </div>
          <TruckStatus
            locale={locale}
            labels={dict.truck}
            href={`${localizePath(locale, "/foodtruck")}#weekschema`}
          />
        </div>
      </section>

      <div className="overflow-hidden bg-flame py-3 text-white md:py-3.5">
        <ul className="sr-only">
          {h.band.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="marquee-track flex w-max" aria-hidden>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {bandItems.map((item, i) => (
                <span key={i} className="flex items-center">
                  <span className="px-5 font-display text-lg font-bold uppercase italic tracking-[0.06em] md:px-7 md:text-xl">
                    {item}
                  </span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-saffron" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="bg-cream px-5 py-16 text-ink sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-14">
            <p className="font-script text-2xl text-flame md:text-3xl">
              {h.servicesEyebrow}
            </p>
            <h2 className="mt-1 font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">
              {h.servicesTitle}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <ServiceCard
              href={localizePath(locale, "/catering")}
              image="/media/catering-ambience.png"
              imageAlt={h.cateringImageAlt}
              title={h.cateringTitle}
              link={h.cateringMore}
            >
              <StrongLine
                text={h.cateringBlurb}
                strong={h.cateringBlurbStrong}
                strongClassName="text-white"
              />
            </ServiceCard>
            <ServiceCard
              href={localizePath(locale, "/foodtruck")}
              image="/media/foodtruck/truck-wrap.jpg"
              imageAlt={h.truckImageAlt}
              imageClassName="object-[50%_20%]"
              title={h.truckTitle}
              link={h.truckMore}
            >
              {h.truckBlurb}
            </ServiceCard>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">
              <span className="block text-cream">{h.scheduleTitle}</span>
              <span className="block text-saffron">{h.scheduleTitleAccent}</span>
            </h2>
            <div className="max-w-sm">
              <p className="leading-relaxed text-cream/75">{h.scheduleText}</p>
              <Link
                href={`${localizePath(locale, "/foodtruck")}#menu`}
                className="btn mt-5 bg-flame text-white hover:bg-flame-deep"
              >
                {h.scheduleCta}
              </Link>
            </div>
          </div>
          <TruckSchedule locale={locale} labels={dict.truck} />
        </div>
      </section>

      <section className="bg-cream px-5 py-16 text-ink sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <div className="relative">
            <p className="font-script text-2xl text-flame md:text-3xl">
              {h.aboutEyebrow}
            </p>
            <h2 className="mt-1 font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">
              {h.aboutHeading}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
              {h.aboutText}
            </p>
            <Link
              href={localizePath(locale, "/over-ons")}
              className="group mt-7 inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-[0.08em] text-flame hover:text-flame-deep"
            >
              {h.aboutLink}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.25}
                aria-hidden
              />
            </Link>
            <HalalStamp
              label={h.halalStamp}
              className="mt-10 hidden md:flex"
            />
          </div>
          <ul className="divide-y divide-ink/10 border-y border-ink/10 self-start">
            {values.map(({ key, icon: Icon, title, text }) => (
              <li key={key} className="flex gap-5 py-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ink text-saffron">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight">
                    {title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-ink/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HomeReviews reviews={h.reviews} />

      <section className="bg-flame px-5 py-16 text-white sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-6xl font-extrabold uppercase leading-[0.86] md:text-8xl">
                {h.ctaSectionTitle}
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/90">
                {h.ctaSectionText}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:w-64 md:flex-col">
              <a
                href={`tel:${tel}`}
                className="btn bg-white text-flame hover:bg-ink hover:text-white"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                {h.ctaCall}
              </a>
              <a
                href={`https://wa.me/${tel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-white/60 text-white hover:border-white hover:bg-white hover:text-flame"
              >
                <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                {h.ctaWhatsapp}
              </a>
              <a
                href="mailto:info@africanocatering.nl"
                className="btn border-white/60 text-white hover:border-white hover:bg-white hover:text-flame"
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                {h.ctaMail}
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-white/25 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-white/85">
              <strong className="font-semibold text-white">{h.shopTitle}</strong>{" "}
              — {h.shopText}{" "}
              <Link
                href={localizePath(locale, "/shop")}
                className="font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white"
              >
                {h.shopCta}
              </Link>
            </p>
            <div className="flex flex-col gap-2 md:items-end">
              <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white/80">
                {h.socialEyebrow}
              </p>
              <SocialLinks tone="red" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
