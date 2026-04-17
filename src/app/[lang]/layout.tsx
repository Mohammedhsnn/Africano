import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/LocaleProvider";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary, hasLocale } from "@/lib/i18n/dictionaries";

const siteUrl = "https://www.africanocatering.nl";

export async function generateStaticParams() {
  return [{ lang: "nl" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  const locale = lang as Locale;

  return {
    title: {
      default: `${dict.meta.siteName} | ${dict.meta.defaultTitle}`,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.defaultDescription,
    keywords: [...dict.meta.keywords],
    alternates: {
      languages: {
        "nl-NL": `${siteUrl}/nl`,
        "en-GB": `${siteUrl}/en`,
        nl: `${siteUrl}/nl`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "nl" ? "nl_NL" : "en_GB",
      url: `${siteUrl}/${locale}`,
      siteName: dict.meta.siteName,
      title: `${dict.meta.siteName} | ${dict.meta.defaultTitle}`,
      description: dict.meta.defaultDescription,
      images: [
        {
          url: "/brand/africano-logo.png",
          width: 1200,
          height: 630,
          alt: `${dict.meta.siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.meta.siteName} | ${dict.meta.defaultTitle}`,
      description: dict.meta.defaultDescription,
      images: ["/brand/africano-logo.png"],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return <LocaleProvider locale={lang as Locale}>{children}</LocaleProvider>;
}
