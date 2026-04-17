import { Star } from "lucide-react";
import type { Messages } from "@/messages/nl";

/** Africano_df — reviews tab on Facebook */
export const FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/profile.php?id=100063039529960&sk=reviews";

type Props = {
  reviews: Messages["home"]["reviews"];
};

export function HomeReviews({ reviews }: Props) {
  return (
    <section
      className="border-y border-black/5 bg-gradient-to-b from-surface via-surface-container-low to-surface px-6 py-14 md:px-8 md:py-20"
      aria-labelledby="home-reviews-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {reviews.eyebrow}
          </p>
          <h2
            id="home-reviews-heading"
            className="font-headline text-2xl font-black uppercase tracking-tighter text-on-surface md:text-3xl"
          >
            {reviews.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-secondary">
            {reviews.subtitle}
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
          {reviews.items.map((item, index) => (
            <li key={index}>
              <article className="flex h-full flex-col rounded-2xl border border-black/5 bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md md:p-7">
                <div
                  className="mb-4 flex gap-0.5"
                  aria-label={reviews.starsAria}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      strokeWidth={0}
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-on-surface">
                  <span className="text-primary">&ldquo;</span>
                  {item.quote}
                  <span className="text-primary">&rdquo;</span>
                </blockquote>
                <p className="mt-4 text-xs font-medium text-secondary">
                  — {item.author}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <a
            href={FACEBOOK_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {reviews.facebookCta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
