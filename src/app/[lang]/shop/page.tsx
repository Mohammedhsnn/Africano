import { Mail } from "lucide-react";
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

export default async function ShopPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const s = dict.shop;

  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-4 pb-12 md:px-8">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {s.eyebrow}
          </p>
          <h1 className="font-headline text-3xl font-black uppercase tracking-tighter text-white md:text-4xl">
            {s.title}
          </h1>
        </header>

        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-8 text-stone-300 md:p-10">
          <p className="text-lg leading-relaxed">
            <StrongLine text={s.p1} strong={s.p1Strong} />
          </p>
          <p className="leading-relaxed text-stone-400">{s.p2}</p>
          <p className="leading-relaxed text-stone-400">{s.p3}</p>
        </div>

        <div className="mx-auto mt-10 flex flex-col items-center gap-3">
          <a
            href="mailto:info@africanocatering.nl"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary-container"
          >
            <Mail className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
            {s.mailCta}
          </a>
          <Link
            href={localizePath(locale, "/contact")}
            className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-primary"
          >
            {s.allContact}
          </Link>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
