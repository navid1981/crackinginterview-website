"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Compare", href: "/compare" },
  { label: "Guide", href: "/guide" },
] as const;

export type HeaderProps = {
  bannerVisible: boolean;
  className?: string;
};

export function Header({ bannerVisible, className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed right-0 left-0 z-50 border-b border-white/[0.06] bg-black/55 backdrop-blur-xl backdrop-saturate-150",
        bannerVisible ? "top-10" : "top-0",
        className,
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/images/app-icon.png"
            alt=""
            width={30}
            height={30}
            className="size-[30px] rounded-lg"
            priority
          />
          <span className="text-base font-bold tracking-tight sm:text-lg">
            <span className="text-white">Cracking</span>
            <span className="text-[#8b5cf6]">Interview</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex md:flex-1 md:justify-center lg:gap-2"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#download"
            className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-900/30 transition hover:from-violet-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
          >
            Download
          </Link>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg text-white/90 transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" strokeWidth={2} /> : <Menu className="size-5" strokeWidth={2} />}
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        className={cn(
          "fixed right-0 left-0 z-50 overflow-hidden border-b border-white/[0.06] bg-black/80 backdrop-blur-2xl transition-[max-height,opacity] duration-300 ease-out md:hidden",
          bannerVisible ? "top-24" : "top-14",
          mobileOpen ? "max-h-[min(70vh,28rem)] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav
          className="flex w-full flex-col gap-0.5 px-4 py-3"
          aria-label="Mobile primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/90 transition hover:bg-white/[0.06]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#download"
            className="mt-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-3 text-center text-base font-semibold text-white shadow-md shadow-violet-900/30"
            onClick={() => setMobileOpen(false)}
          >
            Download
          </Link>
        </nav>
      </div>
    </header>
  );
}
