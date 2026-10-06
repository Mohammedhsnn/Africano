"use client";

import { useSyncExternalStore } from "react";
import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const noopSubscribe = () => () => {};

export function MobileShell({ children }: Props) {
  // Header/nav pas na hydratie renderen (false op de server, true in de browser).
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  return (
    <>
      {mounted ? <Header /> : null}
      <div className="flex min-h-dvh flex-col bg-ink pb-20 pt-16 text-cream md:pb-0 md:pt-20">
        {children}
      </div>
      {mounted ? <BottomNav /> : null}
    </>
  );
}
