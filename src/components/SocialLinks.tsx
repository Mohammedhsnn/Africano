import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

type SocialItem = {
  href: string;
  label: string;
  Icon: typeof FaInstagram;
};

const items: SocialItem[] = [
  {
    href: "https://www.instagram.com/africano_df/",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/p/Africano_df-100063039529960/",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.tiktok.com/@africanocatering1",
    label: "TikTok",
    Icon: FaTiktok,
  },
];

type Props = {
  /** Achtergrond waarop de links staan. */
  tone?: "dark" | "light" | "red";
  className?: string;
  showIcons?: boolean;
};

const palettes = {
  dark: "border-white/15 text-cream/85 hover:border-ember hover:text-white",
  light: "border-ink/15 text-ink hover:border-flame hover:text-flame",
  red: "border-white/50 text-white hover:border-white hover:bg-white hover:text-flame",
};

export function SocialLinks({ tone = "dark", className, showIcons = true }: Props) {
  return (
    <div
      className={
        className ??
        "flex flex-wrap items-center gap-2"
      }
    >
      {items.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${palettes[tone]}`}
        >
          {showIcons ? <Icon className="h-3.5 w-3.5" aria-hidden /> : null}
          {label}
        </a>
      ))}
    </div>
  );
}
