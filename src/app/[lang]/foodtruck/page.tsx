import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";
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

  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-4 pb-12 md:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#090909] via-[#050505] to-[#160608] px-6 pb-14 pt-12 md:px-12 md:pb-20 md:pt-16">
          <div
            className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center md:text-left">
              <p className="mb-3 text-3xl" aria-hidden>
                🚚
              </p>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {f.eyebrow}
              </p>
              <h1 className="font-headline text-3xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
                {f.title}
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-stone-300 md:mx-0 md:text-lg">
                {f.intro}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
                {f.chips.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-stone-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[1.75rem] bg-primary/20 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/30 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.85)]">
                <Image
                  src="/media/foodtruck-showcase.png"
                  alt={f.imageAlt}
                  width={1536}
                  height={1024}
                  className="h-[250px] w-full object-cover md:h-[330px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-stone-950/70 p-7 md:p-8">
            <p className="leading-relaxed text-stone-300">{f.body}</p>
            <div className="mt-7">
              <h2 className="mb-4 font-headline text-sm font-bold uppercase tracking-widest text-white">
                {f.suitableFor}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {f.suitableList.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-sm text-stone-200"
                  >
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
          </div>

          <aside className="rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/15 to-transparent p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {f.asideEyebrow}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">
              {f.asideText}
            </p>
            <div className="mt-7">
              <Link
                href={localizePath(locale, "/contact")}
                className="inline-block w-full rounded-lg bg-primary px-6 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-container"
              >
                {f.cta}
              </Link>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
