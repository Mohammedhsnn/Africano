"use client";

import { Clock, MapPin, Truck } from "lucide-react";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import type { Locale } from "@/lib/i18n/config";
import {
  datedStops,
  nextStop,
  truckStops,
  type DatedStop,
} from "@/lib/foodtruck";
import type { Messages } from "@/messages/nl";

type Labels = Messages["truck"];

/** Huidige minuut; `null` op de server zodat datums pas in de browser verschijnen. */
function subscribeMinute(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

function useMinute() {
  return useSyncExternalStore(
    subscribeMinute,
    () => Math.floor(Date.now() / 60_000),
    () => null,
  );
}

function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "nl" ? "nl-NL" : "en-GB", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(date);
}

function statusLabel(stop: DatedStop, labels: Labels) {
  if (stop.status === "open") return labels.openNow;
  if (stop.status === "today") return labels.today;
  if (stop.status === "tomorrow") return labels.tomorrow;
  return null;
}

export function TruckSchedule({
  locale,
  labels,
}: {
  locale: Locale;
  labels: Labels;
}) {
  const minute = useMinute();
  const stops = minute === null ? null : datedStops(minute * 60_000);
  const upcoming = stops ? nextStop(stops) : null;

  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      {truckStops.map((base, i) => {
        const stop = stops?.[i];
        const highlight = upcoming !== null && stop === upcoming;
        const badge = stop ? statusLabel(stop, labels) : null;
        return (
          <li
            key={base.weekday}
            className={`relative flex flex-col rounded-lg border p-5 transition-colors md:p-6 ${
              highlight
                ? "border-flame bg-flame/[0.12]"
                : "border-white/[0.08] bg-coal"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-3xl font-extrabold uppercase leading-none text-cream">
                  {labels.weekdays[base.weekday]}
                </p>
                <p className="mt-1.5 min-h-5 text-sm text-cream/55">
                  {stop ? formatDate(stop.date, locale) : " "}
                </p>
              </div>
              {badge ? (
                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-sm px-2 py-1 font-display text-xs font-bold uppercase tracking-[0.08em] ${
                    stop?.status === "open"
                      ? "bg-flame text-white"
                      : "bg-saffron text-ink"
                  }`}
                >
                  {stop?.status === "open" ? (
                    <span
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"
                      aria-hidden
                    />
                  ) : null}
                  {badge}
                </span>
              ) : null}
            </div>

            <p className="mt-5 font-display text-xl font-bold uppercase leading-tight text-saffron">
              {base.city}
              <span className="text-saffron/60"> – </span>
              {base.spot}
            </p>
            <p className="mt-2 flex items-center gap-2 text-cream/80">
              <Clock className="h-4 w-4 text-cream/50" strokeWidth={2} aria-hidden />
              {base.open} – {base.close}
            </p>

            <a
              href={base.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 self-start font-display text-sm font-bold uppercase tracking-[0.08em] text-ember transition-colors hover:text-white"
            >
              <MapPin className="h-4 w-4" strokeWidth={2} aria-hidden />
              {labels.route}
              <span className="sr-only">
                {" "}
                {base.city}, {base.spot}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/** Compacte melding voor de hero: waar staat de truck nu of straks. */
export function TruckStatus({
  locale,
  labels,
  href,
}: {
  locale: Locale;
  labels: Labels;
  href: string;
}) {
  const minute = useMinute();
  const stop = minute === null ? null : nextStop(datedStops(minute * 60_000));

  let when = "";
  if (stop) {
    if (stop.status === "open") when = `${labels.openNow} · ${labels.until} ${stop.close}`;
    else if (stop.status === "today") when = `${labels.today} · ${stop.open} – ${stop.close}`;
    else if (stop.status === "tomorrow") when = `${labels.tomorrow} · ${stop.open} – ${stop.close}`;
    else
      when = `${labels.weekdays[stop.weekday]} ${formatDate(stop.date, locale)} · ${stop.open}`;
  }

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-ink/70 py-2.5 pl-3 pr-4 backdrop-blur-sm transition-[border-color,opacity] duration-300 hover:border-flame ${
        stop ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={stop ? undefined : true}
      tabIndex={stop ? undefined : -1}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-flame text-white">
        <Truck className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
      </span>
      <span className="text-left leading-tight">
        <span className="block font-display text-[13px] font-bold uppercase tracking-[0.1em] text-saffron">
          {when || " "}
        </span>
        <span className="block text-[15px] font-medium text-cream">
          {labels.truckName}
          {stop ? ` · ${stop.city}, ${stop.spot}` : ""}
        </span>
      </span>
    </Link>
  );
}
