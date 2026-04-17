import { CalendarCheck, Mail, MessageCircle, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialLinks } from "@/components/SocialLinks";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary, hasLocale } from "@/lib/i18n/dictionaries";

const tel = "+31641947956";
const telDisplay = "+31 6 41 94 79 56";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const c = dict.contact;

  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-4 pb-12 md:px-12 lg:px-24">
        <header className="mx-auto mb-12 max-w-4xl text-center">
          <h1 className="font-headline text-3xl font-extrabold uppercase leading-tight tracking-tighter text-white md:text-5xl">
            {c.title} <span className="text-primary">{c.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-stone-400">
            {c.intro}
          </p>
        </header>

        <div className="mx-auto grid w-full max-w-4xl gap-6 md:grid-cols-2">
          <a
            href={`tel:${tel}`}
            className="group flex gap-4 rounded-2xl border border-white/10 bg-stone-950/80 p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-stone-900 group-hover:bg-primary">
              <Phone
                className="h-7 w-7 text-white"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                {c.phone}
              </p>
              <p className="mt-1 text-lg font-medium text-white">{telDisplay}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${tel}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 rounded-2xl border border-white/10 bg-stone-950/80 p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-stone-900 group-hover:bg-primary">
              <MessageCircle
                className="h-7 w-7 text-white"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                {c.whatsapp}
              </p>
              <p className="mt-1 text-lg font-medium text-white">{telDisplay}</p>
              <p className="mt-1 text-xs text-stone-500">{c.whatsappHint}</p>
            </div>
          </a>

          <a
            href="mailto:info@africanocatering.nl"
            className="group flex gap-4 rounded-2xl border border-white/10 bg-stone-950/80 p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-stone-900 group-hover:bg-primary">
              <Mail
                className="h-7 w-7 text-white"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                {c.email}
              </p>
              <p className="mt-1 break-all text-lg font-medium text-white">
                info@africanocatering.nl
              </p>
            </div>
          </a>

          <a
            href="mailto:reservations@africanocatering.nl"
            className="group flex gap-4 rounded-2xl border border-white/10 bg-stone-950/80 p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-stone-900 group-hover:bg-primary">
              <CalendarCheck
                className="h-7 w-7 text-white"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                {c.reservations}
              </p>
              <p className="mt-1 break-all text-lg font-medium text-white">
                reservations@africanocatering.nl
              </p>
            </div>
          </a>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-stone-500">
          {c.footnote}
        </p>
        <div className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            {c.socialEyebrow}
          </p>
          <SocialLinks />
        </div>
      </main>
      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
