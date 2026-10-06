import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaInstagram } from "react-icons/fa6";
import { ImageLightbox } from "@/components/ImageLightbox";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";
import { TruckSchedule } from "@/components/TruckSchedule";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary, hasLocale } from "@/lib/i18n/dictionaries";
import { localizePath } from "@/lib/i18n/paths";

export default async function FoodtruckPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const f = dict.foodtruck;
  const m = f.menu;

  return (
    <MobileShell>
      <main className="flex flex-1 flex-col">
        <section className="px-5 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
            <div>
              <p className="font-script text-2xl text-saffron md:text-3xl">
                {f.eyebrow}
              </p>
              <h1 className="mt-2 font-display text-[clamp(3rem,9vw,6rem)] font-extrabold uppercase leading-[0.88] text-cream">
                {f.title}
                <span className="brush mt-4 block w-fit px-5 pb-2 pt-1.5 text-[0.48em] italic leading-none text-white">
                  {f.titleAccent}
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80">
                {f.intro}
              </p>
              <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg font-bold uppercase tracking-[0.06em] text-cream">
                {f.chips.map((chip, i) => (
                  <li key={chip} className="flex items-center gap-3">
                    {i > 0 ? (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-flame"
                        aria-hidden
                      />
                    ) : null}
                    {chip}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="btn bg-flame text-white hover:bg-flame-deep"
                >
                  {f.ctaMenu}
                </a>
                <a
                  href="#weekschema"
                  className="btn border-cream/35 text-cream hover:border-cream hover:bg-cream hover:text-ink"
                >
                  {f.ctaSchedule}
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[420px] md:mr-0">
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-lg bg-flame md:translate-x-4 md:translate-y-4"
                aria-hidden
              />
              <Image
                src="/media/foodtruck/truck-wrap.jpg"
                alt={f.imageAlt}
                width={436}
                height={530}
                preload
                sizes="(min-width: 768px) 420px, 90vw"
                className="relative h-auto w-full rounded-lg border border-white/10"
              />
            </div>
          </div>
        </section>

        <section
          id="weekschema"
          className="border-t border-white/[0.06] bg-[#100d0c] px-5 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">
                <span className="block text-cream">{f.scheduleTitle}</span>
                <span className="block text-saffron">
                  {f.scheduleTitleAccent}
                </span>
              </h2>
              <p className="max-w-sm leading-relaxed text-cream/70">
                {f.scheduleText}
              </p>
            </div>
            <TruckSchedule locale={locale} labels={dict.truck} />
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="https://www.instagram.com/africano_df/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-[0.08em] text-ember transition-colors hover:text-white"
              >
                <FaInstagram className="h-5 w-5" aria-hidden />
                {f.scheduleInstagram}
              </a>
              <p className="font-script text-2xl text-cream/90">{f.slogan}</p>
            </div>
          </div>
        </section>

        <section
          id="menu"
          className="px-5 py-16 sm:px-6 md:py-24 lg:px-8"
          aria-labelledby="menu-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 md:mb-14">
              <h2
                id="menu-heading"
                className="brush inline-block px-6 pb-3 pt-2 font-display text-5xl font-extrabold uppercase italic leading-none text-white md:px-8 md:text-7xl"
              >
                {m.title}
              </h2>
              <p className="mt-5 text-cream/65">{m.subtitle}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
              <div className="grid gap-6">
                <article className="rounded-lg border border-white/[0.08] bg-coal p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-4xl font-extrabold uppercase leading-none text-ember md:text-5xl">
                        {m.bowl.name}
                      </h3>
                      <p className="mt-3 font-medium text-cream">
                        {m.bowl.meats}
                      </p>
                      <p className="text-sm italic text-cream/60">
                        {m.bowl.meatsNote}
                      </p>
                    </div>
                    <Image
                      src="/media/foodtruck/rice-bowl.jpg"
                      alt={m.bowl.imageAlt}
                      width={180}
                      height={135}
                      sizes="144px"
                      className="h-auto w-28 shrink-0 mix-blend-lighten md:w-36"
                    />
                  </div>
                  <ul className="mt-6 divide-y divide-white/[0.08] border-t border-white/[0.08]">
                    {m.bowl.sizes.map((size) => (
                      <li
                        key={size.name}
                        className="flex items-center justify-between gap-4 py-3.5"
                      >
                        <div className="min-w-0">
                          <p className="font-display text-xl font-bold uppercase leading-tight text-cream">
                            {size.name}
                          </p>
                          <p className="text-sm text-cream/60">{size.note}</p>
                        </div>
                        <p className="shrink-0 font-display text-2xl font-extrabold text-saffron">
                          {size.price}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm italic text-cream/60">
                    {m.bowl.footnote}
                  </p>
                </article>

                <article className="rounded-lg border border-white/[0.08] bg-coal p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-4xl font-extrabold uppercase leading-none text-ember md:text-5xl">
                        {m.wrap.name}
                      </h3>
                      <p className="mt-2 font-display text-2xl font-extrabold text-saffron">
                        {m.wrap.price}
                      </p>
                    </div>
                    <Image
                      src="/media/foodtruck/qunbala-wrap.jpg"
                      alt={m.wrap.imageAlt}
                      width={150}
                      height={170}
                      sizes="120px"
                      className="h-auto w-24 shrink-0 mix-blend-lighten md:w-28"
                    />
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {m.wrap.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-white/[0.06] px-3 py-1.5 text-cream"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-white/[0.08] pt-4">
                    <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-cream/55">
                      {m.wrap.extrasLabel}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                      {m.wrap.extras.map((extra) => (
                        <li key={extra.name} className="text-cream">
                          {extra.name}{" "}
                          <span className="font-semibold text-saffron">
                            {extra.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>

                <article className="rounded-lg border border-white/[0.08] bg-coal p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                    <h3 className="font-display text-4xl font-extrabold uppercase leading-none text-ember md:text-5xl">
                      {m.sides.title}
                    </h3>
                    <div className="flex shrink-0 items-end gap-1">
                      <Image
                        src="/media/foodtruck/sambosa.jpg"
                        alt={m.sides.sambosaAlt}
                        width={128}
                        height={64}
                        sizes="96px"
                        className="h-auto w-20 mix-blend-lighten md:w-24"
                      />
                      <Image
                        src="/media/foodtruck/basbusa.jpg"
                        alt={m.sides.basbusaAlt}
                        width={122}
                        height={80}
                        sizes="88px"
                        className="h-auto w-16 mix-blend-lighten md:w-20"
                      />
                    </div>
                  </div>
                  <ul className="mt-5 divide-y divide-white/[0.08] border-t border-white/[0.08]">
                    {m.sides.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between gap-4 py-3.5"
                      >
                        <div className="min-w-0">
                          <p className="font-display text-xl font-bold uppercase leading-tight text-cream">
                            {item.name}
                          </p>
                          <p className="text-sm text-cream/60">{item.note}</p>
                        </div>
                        {item.price ? (
                          <p className="shrink-0 font-display text-2xl font-extrabold text-saffron">
                            {item.price}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <aside className="self-start rounded-lg bg-cream p-6 text-ink md:p-8 lg:sticky lg:top-28">
                <h3 className="font-display text-4xl font-extrabold uppercase leading-none md:text-5xl">
                  {m.build.title}
                </h3>
                <ol className="mt-6 grid gap-6">
                  {m.build.steps.map((step, i) => (
                    <li key={step.title}>
                      <p className="flex items-center gap-3 font-display text-2xl font-extrabold uppercase leading-none">
                        <span className="flex h-8 w-8 -skew-x-6 items-center justify-center bg-flame text-lg text-white">
                          {i + 1}
                        </span>
                        {step.title}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {step.items.map((item) => (
                          <li
                            key={item.name}
                            className="rounded-md border border-ink/15 bg-white/60 px-3 py-1.5 text-[15px]"
                          >
                            {item.name}
                            {item.note ? (
                              <span className="ml-1.5 font-semibold text-flame">
                                {item.note}
                              </span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] bg-[#100d0c] px-5 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 md:mb-12">
              <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.9] text-cream md:text-7xl">
                {f.cardsTitle}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-cream/70">
                {f.cardsText}
              </p>
            </div>
            <ImageLightbox
              labels={{ enlarge: f.enlarge, close: f.close, download: f.download }}
              images={[
                {
                  src: "/media/foodtruck/weekschema-flyer.jpg",
                  width: 941,
                  height: 1672,
                  alt: f.flyerAlt,
                  label: f.flyerLabel,
                },
                {
                  src: "/media/foodtruck/menukaart.jpg",
                  width: 864,
                  height: 1340,
                  alt: f.menuCardAlt,
                  label: f.menuCardLabel,
                },
              ]}
            />
          </div>
        </section>

        <section className="bg-cream px-5 py-16 text-ink sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
            <div>
              <p className="font-script text-2xl text-flame md:text-3xl">
                {f.bookingEyebrow}
              </p>
              <h2 className="mt-1 font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">
                {f.bookingTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
                {f.body}
              </p>
              <h3 className="mt-8 font-display text-lg font-bold uppercase tracking-[0.1em] text-ink/60">
                {f.suitableFor}
              </h3>
              <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {f.suitableList.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-lg">
                    <Check
                      className="h-5 w-5 shrink-0 text-flame"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="self-start rounded-lg bg-flame p-7 text-white md:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white/80">
                {f.asideEyebrow}
              </p>
              <p className="mt-3 text-lg leading-relaxed">{f.asideText}</p>
              <Link
                href={localizePath(locale, "/contact")}
                className="btn mt-7 w-full bg-white text-flame hover:bg-ink hover:text-white"
              >
                {f.cta}
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
