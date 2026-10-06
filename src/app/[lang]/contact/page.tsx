import {
  CalendarCheck,
  Mail,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
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

  const options: {
    href: string;
    icon: LucideIcon;
    label: string;
    value: string;
    hint?: string;
    external?: boolean;
  }[] = [
    { href: `tel:${tel}`, icon: Phone, label: c.phone, value: telDisplay },
    {
      href: `https://wa.me/${tel}`,
      icon: MessageCircle,
      label: c.whatsapp,
      value: telDisplay,
      hint: c.whatsappHint,
      external: true,
    },
    {
      href: "mailto:info@africanocatering.nl",
      icon: Mail,
      label: c.email,
      value: "info@africanocatering.nl",
    },
    {
      href: "mailto:reservations@africanocatering.nl",
      icon: CalendarCheck,
      label: c.reservations,
      value: "reservations@africanocatering.nl",
    },
  ];

  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-5 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16 lg:px-8">
        <header className="mx-auto mb-10 w-full max-w-5xl md:mb-14">
          <h1 className="font-display text-[clamp(3rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.88] text-cream">
            {c.title} <span className="text-flame">{c.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">
            {c.intro}
          </p>
        </header>

        <ul className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-2 md:gap-5">
          {options.map(({ href, icon: Icon, label, value, hint, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full items-center gap-5 rounded-lg border border-white/[0.08] bg-coal p-5 transition-colors hover:border-flame md:p-6"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-flame text-white transition-colors group-hover:bg-white group-hover:text-flame">
                  <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold uppercase tracking-[0.12em] text-saffron">
                    {label}
                  </span>
                  <span className="mt-0.5 block break-all text-lg font-medium text-cream">
                    {value}
                  </span>
                  {hint ? (
                    <span className="mt-0.5 block text-sm text-cream/55">
                      {hint}
                    </span>
                  ) : null}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-6 border-t border-white/[0.08] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-cream/60">{c.footnote}</p>
          <div className="flex flex-col gap-2 md:items-end">
            <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-saffron">
              {c.socialEyebrow}
            </p>
            <SocialLinks className="flex flex-wrap items-center gap-2" />
          </div>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </MobileShell>
  );
}
