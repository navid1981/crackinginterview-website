import Image from "next/image";
import Link from "next/link";
import { Apple, Monitor } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.22),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(59,130,246,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_15%_70%,rgba(192,132,252,0.1),transparent)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-[8%] top-[18%] size-72 rounded-full bg-violet-600/25 blur-[100px] orb-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[5%] top-[35%] size-96 rounded-full bg-blue-500/20 blur-[110px] orb-float orb-float-delay-1"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[25%] left-[20%] size-80 rounded-full bg-purple-500/20 blur-[95px] orb-float orb-float-delay-2"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-violet-400/80 sm:text-xs">
          INTRODUCING CRACKINGINTERVIEW
        </p>

        <h1 className="font-sans text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Ace Any Technical Interview with
          <br />
          <span className="gradient-text">AI-Powered</span> Assistance
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl">
          Real-time AI solutions for coding, system design, and verbal interviews. Extract
          problems, capture screenshots, record audio — get instant, expert-level answers.
        </p>

        <p className="mt-8 text-sm text-zinc-500">Available on macOS and Windows</p>

        <div
          id="download"
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
        >
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

        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 sm:text-[11px]">
          No credit card required
        </p>

        <div className="relative mt-14 w-full max-w-4xl sm:mt-20">
          <div
            className="pointer-events-none absolute -inset-4 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35),transparent_70%)] opacity-90 blur-2xl sm:-inset-8"
            aria-hidden
          />
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent">
            <div className="overflow-hidden rounded-2xl bg-black/40 p-1 sm:p-1.5">
              <Image
                src="/images/algorithm.png"
                alt="CrackingInterview app showing algorithm problem solving"
                width={1200}
                height={720}
                priority
                className="app-screenshot h-auto w-full"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
