"use client";

import {
  Home,
  Mail,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items: { href: string; icon: LucideIcon; label: string }[] = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/catering", icon: UtensilsCrossed, label: "Catering" },
  { href: "/foodtruck", icon: Truck, label: "Truck" },
  { href: "/contact", icon: Mail, label: "Contact" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch justify-around border-t border-white/10 bg-black/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden"
      aria-label="Hoofdnavigatie"
    >
      {items.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex min-w-[4rem] flex-col items-center gap-0.5 py-2 text-[10px] font-bold uppercase tracking-wide ${
              active ? "text-primary" : "text-stone-500"
            }`}
          >
            <Icon
              className="h-5 w-5"
              strokeWidth={1.75}
              aria-hidden
            />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
