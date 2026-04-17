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
  tone?: "dark" | "light";
  className?: string;
  showIcons?: boolean;
};

export function SocialLinks({ tone = "dark", className, showIcons = true }: Props) {
  const palette =
    tone === "light"
      ? "border-black/10 bg-white text-stone-800 hover:border-primary/40 hover:text-primary"
      : "border-white/10 bg-white/5 text-stone-200 hover:border-primary/40 hover:bg-white/10 hover:text-white";

  return (
    <div
      className={
        className ??
        "flex flex-wrap items-center justify-center gap-2 md:justify-start"
      }
    >
      {items.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors ${palette}`}
        >
          {showIcons ? <Icon className="h-3.5 w-3.5" aria-hidden /> : null}
          {label}
        </a>
      ))}
    </div>
  );
}

