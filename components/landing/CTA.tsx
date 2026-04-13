import Link from "next/link";
import { Apple, Monitor } from "lucide-react";

export function CTA() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.06] bg-black px-4 py-20 sm:px-6 sm:py-28"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(139,92,246,0.18),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(192,132,252,0.1),transparent)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2
          id="cta-heading"
          className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Ready to Ace Your Next Interview?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">
          Download CrackingInterview for free and start solving problems in seconds.
        </p>

        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/CrackingInterview_1.0.0_universal.dmg"
            prefetch={false}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-violet-500 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-950/50 transition hover:from-violet-500 hover:via-purple-500 hover:to-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:h-14 sm:text-base"
          >
            <Apple className="size-5 shrink-0" strokeWidth={2} aria-hidden />
            Download for Mac
          </Link>
          <Link
            href="/CrackingInterview_1.0.0_x64-setup.exe"
            prefetch={false}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-8 text-sm font-semibold text-white backdrop-blur-md transition hover:border-violet-500/35 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:h-14 sm:text-base"
          >
            <Monitor className="size-5 shrink-0" strokeWidth={2} aria-hidden />
            Download for Windows
          </Link>
        </div>
      </div>
    </section>
  );
}
