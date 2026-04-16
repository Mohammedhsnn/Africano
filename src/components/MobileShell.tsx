import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
  /** Standaard donker (food truck / checkout); licht voor home. */
  variant?: "dark" | "light";
};

export function MobileShell({ children, variant = "dark" }: Props) {
  const main =
    variant === "light"
      ? "flex min-h-dvh flex-col bg-background pb-20 pt-24 text-on-surface md:pb-0 md:pt-20"
      : "flex min-h-dvh flex-col bg-black pb-20 pt-24 text-white md:pb-0 md:pt-20";
  return (
    <>
      <Header />
      <div className={main}>{children}</div>
      <BottomNav />
    </>
  );
}
