export type TruckStop = {
  /** 0 = zondag … 6 = zaterdag */
  weekday: number;
  city: string;
  spot: string;
  open: string;
  close: string;
  mapsUrl: string;
};

/** Vaste wekelijkse standplaatsen van de foodtruck (bron: actuele flyer). */
export const truckStops: TruckStop[] = [
  {
    weekday: 2,
    city: "Goes",
    spot: "Molenplein",
    open: "16:00",
    close: "20:00",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Molenplein%2C%20Goes",
  },
  {
    weekday: 3,
    city: "Hulst",
    spot: "Bierkaaistraat",
    open: "16:00",
    close: "20:00",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bierkaaistraat%2C%20Hulst",
  },
  {
    weekday: 4,
    city: "Terneuzen",
    spot: "Bellamystraat",
    open: "16:00",
    close: "21:00",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bellamystraat%2C%20Terneuzen",
  },
  {
    weekday: 5,
    city: "Terneuzen",
    spot: "Bellamystraat",
    open: "16:00",
    close: "21:00",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bellamystraat%2C%20Terneuzen",
  },
];

export type StopStatus = "open" | "today" | "tomorrow" | "later";

export type DatedStop = TruckStop & {
  /** Aantal dagen tot de eerstvolgende keer dat de truck hier staat. */
  daysAhead: number;
  status: StopStatus;
  /** Datum van de eerstvolgende keer (UTC-middernacht van die dag in Amsterdam). */
  date: Date;
};

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** Huidige datum en tijd in Nederland, los van de tijdzone van de bezoeker. */
function amsterdamNow(ms: number) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Amsterdam",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    })
      .formatToParts(new Date(ms))
      .map((p) => [p.type, p.value]),
  );
  const year = Number(parts.year);
  const month = Number(parts.month);
  const day = Number(parts.day);
  return {
    year,
    month,
    day,
    weekday: new Date(Date.UTC(year, month - 1, day)).getUTCDay(),
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
}

/** Koppelt aan elke standplaats de eerstvolgende datum en een status. */
export function datedStops(ms: number): DatedStop[] {
  const now = amsterdamNow(ms);
  return truckStops.map((stop) => {
    let daysAhead = (stop.weekday - now.weekday + 7) % 7;
    if (daysAhead === 0 && now.minutes >= toMinutes(stop.close)) daysAhead = 7;

    let status: StopStatus = "later";
    if (daysAhead === 0) {
      status = now.minutes >= toMinutes(stop.open) ? "open" : "today";
    } else if (daysAhead === 1) {
      status = "tomorrow";
    }

    return {
      ...stop,
      daysAhead,
      status,
      date: new Date(Date.UTC(now.year, now.month - 1, now.day + daysAhead)),
    };
  });
}

/** De eerstvolgende (of huidige) standplaats. */
export function nextStop(stops: DatedStop[]): DatedStop {
  return stops.reduce((best, s) => (s.daysAhead < best.daysAhead ? s : best));
}
