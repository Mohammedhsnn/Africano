import { Star } from "lucide-react";
import type { Messages } from "@/messages/nl";

type Props = {
  reviews: Messages["home"]["reviews"];
};

export function HomeReviews({ reviews }: Props) {
  return (
    <section
      className="bg-ink px-5 py-16 sm:px-6 md:py-24 lg:px-8"
      aria-labelledby="home-reviews-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14">
          <h2
            id="home-reviews-heading"
            className="font-display text-5xl font-extrabold uppercase leading-[0.9] text-cream md:text-7xl"
          >
            {reviews.title}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-cream/70">
            {reviews.subtitle}
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
          {reviews.items.map((item, index) => (
            <li key={index}>
              <figure className="relative flex h-full flex-col rounded-lg border border-white/[0.08] bg-coal p-6 pt-10 md:p-8 md:pt-12">
                <span
                  className="absolute left-6 top-1 font-display text-7xl font-extrabold leading-none text-flame md:left-8"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="flex-1 text-lg leading-relaxed text-cream">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-4">
                  <span className="font-display text-lg font-bold uppercase tracking-[0.04em] text-cream">
                    {item.author}
                  </span>
                  <span
                    className="flex gap-0.5"
                    role="img"
                    aria-label={reviews.starsAria}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-saffron text-saffron"
                        strokeWidth={0}
                        aria-hidden
                      />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
