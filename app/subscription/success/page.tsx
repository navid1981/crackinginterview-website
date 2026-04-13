import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscription Confirmed — CrackingInterview",
  robots: { index: false, follow: false },
};

export default function SubscriptionSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-zinc-300">
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
          >
            <Image src="/images/app-icon.png" alt="" width={30} height={30} className="size-[30px] rounded-lg" priority />
            <span className="text-base font-bold tracking-tight sm:text-lg">
              <span className="text-white">Cracking</span>
              <span className="text-[#8b5cf6]">Interview</span>
            </span>
          </Link>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="glass-card w-full max-w-lg p-8 text-center hover:translate-y-0 hover:shadow-none sm:p-10">
          <div
            className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30"
            aria-hidden
          >
            <Check className="size-9" strokeWidth={2.5} />
          </div>
          <h1 className="mt-6 font-sans text-2xl font-bold text-white sm:text-3xl">You&apos;re All Set!</h1>
          <p className="mt-3 text-base text-zinc-400">
            Your <span className="font-semibold text-violet-300">Pro subscription</span> is now active.
          </p>

          <ol className="glass-card mt-8 space-y-3 rounded-xl border-white/[0.06] p-5 text-left text-sm hover:translate-y-0 hover:shadow-none sm:text-base">
            <li className="flex gap-3">
              <span className="font-mono font-bold text-violet-400">1.</span>
              <span>
                Go back to the <strong className="text-white">CrackingInterview</strong> app on your desktop.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono font-bold text-violet-400">2.</span>
              <span>
                <strong className="text-white">Sign out</strong> and <strong className="text-white">sign back in</strong>{" "}
                to activate your Pro features.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono font-bold text-violet-400">3.</span>
              <span>Enjoy unlimited AI models, all input sources, and audio recording.</span>
            </li>
          </ol>

          <p className="mt-6 text-xs text-zinc-500 sm:text-sm">
            Your subscription will be managed through the app&apos;s Settings panel.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block text-sm font-medium text-violet-400 transition hover:text-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
          >
            ← Back to crackinginterview.org
          </Link>
        </div>
      </div>
    </div>
  );
}
