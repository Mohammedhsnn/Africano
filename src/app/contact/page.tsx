import { CalendarCheck, Mail, MessageCircle, Phone } from "lucide-react";
import { MobileShell } from "@/components/MobileShell";
import { SiteFooter } from "@/components/SiteFooter";

const tel = "+31641947956";
const telDisplay = "+31 6 41 94 79 56";

export default function ContactPage() {
  return (
    <MobileShell>
      <main className="flex flex-1 flex-col px-4 pb-12 md:px-12 lg:px-24">
        <header className="mb-12 max-w-4xl">
          <h1 className="font-headline text-3xl font-extrabold uppercase leading-tight tracking-tighter text-white md:text-5xl">
            Contact <span className="text-primary">Africano</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-stone-400">
            Bel, app of mail ons voor catering, foodtruck of vragen over de shop.
            We reageren zo snel mogelijk.
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
                Telefoon
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
                WhatsApp
              </p>
              <p className="mt-1 text-lg font-medium text-white">{telDisplay}</p>
              <p className="mt-1 text-xs text-stone-500">
                Bel of stuur een WhatsApp-bericht
              </p>
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
                E-mail
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
                Reserveringen
              </p>
              <p className="mt-1 break-all text-lg font-medium text-white">
                reservations@africanocatering.nl
              </p>
            </div>
          </a>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-stone-500">
          Wij komen op locatie voor catering en foodtruck — geen vaste
          winkeladres nodig voor uw aanvraag.
        </p>
      </main>
      <SiteFooter />
    </MobileShell>
  );
}
