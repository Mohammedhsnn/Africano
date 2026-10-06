import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary, hasLocale } from "@/lib/i18n/dictionaries";
import { localizePath } from "@/lib/i18n/paths";

function StrongLine({
  text,
  strong,
}: {
  text: string;
  strong: string;
}) {
  const parts = text.split("{strong}");
  if (parts.length !== 2) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <strong className="text-white">{strong}</strong>
      {parts[1]}
    </>
  );
}

export default async function CateringPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const c = dict.catering;

  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-5 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16 lg:px-8">
        <header className="mx-auto mb-10 w-full max-w-6xl md:mb-14">
          <p className="font-script text-2xl text-saffron md:text-3xl">
            {c.eyebrow}
          </p>
          <h1 className="mt-2 font-display text-[clamp(3rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.88] text-cream">
            {c.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
            {c.intro}
          </p>
          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg font-bold uppercase tracking-[0.06em] text-cream">
            {c.chips.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-flame" aria-hidden />
                ) : null}
                {item}
              </li>
            ))}
          </ul>
        </header>

        <section className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-8">
          <div className="rounded-lg border border-white/[0.08] bg-coal p-7 md:p-10">
            <p className="mb-5 inline-flex -skew-x-6 bg-flame px-3 py-1 font-display text-sm font-bold uppercase tracking-[0.1em] text-white">
              {c.badge}
            </p>
            <p className="text-xl leading-relaxed text-cream">
              <StrongLine text={c.p1} strong={c.p1Strong} />
            </p>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">{c.p2}</p>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">{c.p3}</p>
            <p className="mt-6 border-l-4 border-saffron pl-5 text-lg text-cream">
              {c.quote}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {c.list.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-cream/90">
                  <CircleCheck
                    className="h-5 w-5 shrink-0 text-ember"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link
                href={localizePath(locale, "/contact")}
                className="btn bg-flame text-white hover:bg-flame-deep"
              >
                {c.ctaContact}
              </Link>
              <Link
                href={localizePath(locale, "/foodtruck")}
                className="font-display text-base font-bold uppercase tracking-[0.08em] text-cream/75 transition-colors hover:text-white"
              >
                {c.ctaTruck}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-lg md:min-h-[420px]">
            <Image
              src="/media/catering-ambience.png"
              alt={c.imageAlt}
              fill
              preload
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[70%_center]"
            />
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
