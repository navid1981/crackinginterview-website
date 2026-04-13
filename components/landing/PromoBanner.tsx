"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

function formatCountdown(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

export type PromoBannerProps = {
  className?: string;
  onDismiss?: () => void;
};

export function PromoBanner({ className, onDismiss }: PromoBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);

  useEffect(() => {
    const min = 5 * 3600;
    const max = 6 * 3600;
    setSecondsRemaining(min + Math.floor(Math.random() * (max - min)));
  }, []);

  useEffect(() => {
    if (secondsRemaining === null) return;
    const id = window.setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev === null || prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [secondsRemaining !== null]);

  function handleDismiss() {
    setDismissed(true);
    onDismiss?.();
  }

  if (dismissed) return null;

  const timeLabel =
    secondsRemaining === null ? "--:--:--" : formatCountdown(Math.max(0, secondsRemaining));

  return (
    <div
      role="banner"
      className={cn(
        "relative sticky top-0 z-[60] flex h-10 w-full items-center justify-center gap-2 border-b border-violet-500/20 px-3 pr-11 sm:gap-4 sm:px-4 sm:pr-12",
        "bg-gradient-to-r from-violet-950 via-purple-950 to-violet-950",
        className,
      )}
    >
      <p className="min-w-0 flex-1 text-center text-[10px] font-medium leading-tight text-white/95 sm:text-xs md:text-left">
        <span className="hidden md:inline">
          Download CrackingInterview — AI-Powered Interview Assistant. Try Free Today
        </span>
        <span className="md:hidden">CrackingInterview — Try Free Today</span>
      </p>

      <div
        className="flex shrink-0 items-center gap-1 rounded-md border border-white/10 bg-black/25 px-1.5 py-0.5 font-mono text-[10px] font-semibold tabular-nums text-violet-100 backdrop-blur-sm sm:gap-1.5 sm:px-2 sm:text-[11px]"
        aria-live="polite"
        aria-label={`Offer time remaining ${timeLabel}`}
      >
        <span className="hidden text-white/50 sm:inline">Ends in</span>
        {timeLabel}
      </div>

      <Link
        href="/#download"
        className="shrink-0 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm shadow-violet-900/40 transition hover:from-violet-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:px-3 sm:text-xs"
      >
        Download Now
      </Link>

      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:right-3"
        aria-label="Dismiss promotion"
      >
        <X className="size-4" strokeWidth={2} />
      </button>
    </div>
  );
}
