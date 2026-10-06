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
      <main className="flex flex-1 flex-col px-5 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <header className="mb-10">
            <p className="font-script text-2xl text-saffron md:text-3xl">
              {s.eyebrow}
            </p>
            <h1 className="mt-2 font-display text-[clamp(3rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.88] text-cream">
              {s.title}
            </h1>
          </header>

          <div className="space-y-5 rounded-lg border border-white/[0.08] border-l-4 border-l-saffron bg-coal p-7 text-lg text-cream/75 md:p-10">
            <p className="text-xl leading-relaxed text-cream">
              <StrongLine text={s.p1} strong={s.p1Strong} />
            </p>
            <p className="leading-relaxed">{s.p2}</p>
            <p className="leading-relaxed">{s.p3}</p>
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="mailto:info@africanocatering.nl"
              className="btn bg-flame text-white hover:bg-flame-deep"
            >
              <Mail className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
              {s.mailCta}
            </a>
            <Link
              href={localizePath(locale, "/contact")}
              className="font-display text-base font-bold uppercase tracking-[0.08em] text-cream/75 transition-colors hover:text-white"
            >
              {s.allContact}
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
