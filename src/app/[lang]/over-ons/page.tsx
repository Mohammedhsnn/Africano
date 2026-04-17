import Link from "next/link";
import { notFound } from "next/navigation";
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
      <main className="flex flex-1 flex-col px-4 pb-12 md:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {a.eyebrow}
          </span>
          <h1 className="font-headline text-3xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
            {a.title}{" "}
            <span className="text-primary">{a.titleYear}</span>
          </h1>
        </header>

        <div className="mx-auto max-w-3xl space-y-8 text-stone-300">
          <p className="text-lg leading-relaxed">{a.p1}</p>
          <p className="leading-relaxed">{a.p2}</p>
          <p className="leading-relaxed">{a.p3}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
          {a.pillars.map((x) => (
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
            <p className="text-sm text-stone-300">{a.ctaText}</p>
          </div>
          <Link
            href={localizePath(locale, "/contact")}
            className="inline-block shrink-0 rounded-lg bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary-container"
          >
            {a.ctaButton}
          </Link>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
