import Link from "next/link";
import { notFound } from "next/navigation";
import { HalalStamp } from "@/components/HalalStamp";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary, hasLocale } from "@/lib/i18n/dictionaries";
import { localizePath } from "@/lib/i18n/paths";

export default async function OverOnsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const a = dict.about;

  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-5 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <header className="relative">
            <p className="font-script text-2xl text-saffron md:text-3xl">
              {a.eyebrow}
            </p>
            <h1 className="mt-2 font-display text-[clamp(3rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.88] text-cream">
              {a.title}{" "}
              <span className="text-flame">{a.titleYear}</span>
            </h1>
            <HalalStamp label={dict.home.halalStamp} className="mt-10 hidden md:flex" />
          </header>

          <div className="space-y-6 text-cream/80">
            <p className="text-xl leading-relaxed text-cream">{a.p1}</p>
            <p className="text-lg leading-relaxed">{a.p2}</p>
            <p className="text-lg leading-relaxed">{a.p3}</p>
          </div>
        </div>

        <ul className="mx-auto mt-16 grid w-full max-w-6xl gap-4 md:grid-cols-3 md:gap-6">
          {a.pillars.map((x) => (
            <li
              key={x.n}
              className="rounded-lg border border-white/[0.08] bg-coal p-6 md:p-7"
            >
              <span className="font-display text-5xl font-extrabold leading-none text-flame">
                {x.n}
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-cream">
                {x.t}
              </h2>
              <p className="mt-2 leading-relaxed text-cream/65">{x.d}</p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-14 flex w-full max-w-6xl flex-col gap-5 rounded-lg bg-flame p-7 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <p className="max-w-xl font-display text-2xl font-bold uppercase leading-tight md:text-3xl">
            {a.ctaText}
          </p>
          <Link
            href={localizePath(locale, "/contact")}
            className="btn shrink-0 bg-white text-flame hover:bg-ink hover:text-white"
          >
            {a.ctaButton}
          </Link>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
