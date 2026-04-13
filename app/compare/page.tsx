import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Apple, Monitor } from "lucide-react";

import { PageShell } from "@/components/landing/PageShell";

export const metadata: Metadata = {
  title: "Compare AI Interview Assistants — CrackingInterview",
  description:
    "Side-by-side comparison of CrackingInterview vs Final Round AI, LockedIn AI, Interview Coder, and OphyAI — pricing, AI models, input methods, stealth features, and more.",
};

function Yes() {
  return <span className="text-emerald-400">✓</span>;
}

function No() {
  return <span className="text-red-400">✗</span>;
}

function Partial({ children }: { children: ReactNode }) {
  return <span className="text-amber-400">{children}</span>;
}

function Cell({ children, highlight }: { children: ReactNode; highlight?: boolean }) {
  return (
    <td
      className={`border border-white/[0.08] px-3 py-3 text-sm text-zinc-300 sm:px-4 sm:text-base ${
        highlight ? "bg-violet-600/15 text-zinc-100" : "bg-white/[0.02]"
      }`}
    >
      {children}
    </td>
  );
}

export default function ComparePage() {
  return (
    <PageShell>
      <div className="relative px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(139,92,246,0.12),transparent)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <header className="mx-auto max-w-3xl text-center">
            <h1 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              How <span className="gradient-text">CrackingInterview</span> Compares
            </h1>
            <p className="mt-4 text-base text-zinc-400 sm:text-lg">
              More features. Lower price. Built for coding, system design, and verbal interviews.
            </p>
          </header>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] p-1 backdrop-blur-xl sm:p-2">
            <table className="w-full min-w-[920px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="sticky left-0 z-20 border border-white/[0.08] bg-black/90 px-3 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-400 sm:px-4 sm:text-sm">
                    Feature
                  </th>
                  <th className="border border-white/[0.08] bg-violet-600/25 px-3 py-3 text-xs font-semibold text-violet-100 sm:px-4 sm:text-sm">
                    CrackingInterview
                  </th>
                  <th className="border border-white/[0.08] bg-white/[0.04] px-3 py-3 text-xs font-semibold text-zinc-300 sm:px-4 sm:text-sm">
                    Final Round AI
                  </th>
                  <th className="border border-white/[0.08] bg-white/[0.04] px-3 py-3 text-xs font-semibold text-zinc-300 sm:px-4 sm:text-sm">
                    LockedIn AI
                  </th>
                  <th className="border border-white/[0.08] bg-white/[0.04] px-3 py-3 text-xs font-semibold text-zinc-300 sm:px-4 sm:text-sm">
                    Interview Coder
                  </th>
                  <th className="border border-white/[0.08] bg-white/[0.04] px-3 py-3 text-xs font-semibold text-zinc-300 sm:px-4 sm:text-sm">
                    OphyAI
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={6}
                    className="border border-white/[0.08] bg-violet-950/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-200"
                  >
                    Pricing
                  </td>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Monthly
                  </td>
                  <Cell highlight>$15/mo</Cell>
                  <Cell>$90/mo</Cell>
                  <Cell>$30–55/mo</Cell>
                  <Cell>$25/mo</Cell>
                  <Cell>$9–39/mo</Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Annual
                  </td>
                  <Cell highlight>$15/mo</Cell>
                  <Cell>$25/mo ($300/yr)</Cell>
                  <Cell>$30/mo ($360/yr)</Cell>
                  <Cell>$25/mo ($299/yr)</Cell>
                  <Cell>$9–39/mo</Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Free Tier
                  </td>
                  <Cell highlight>
                    <Yes /> 3 calls + BYOK unlimited
                  </Cell>
                  <Cell>
                    <Yes /> Limited
                  </Cell>
                  <Cell>
                    <Yes /> Limited
                  </Cell>
                  <Cell>
                    <Yes /> Limited
                  </Cell>
                  <Cell>
                    <Yes /> 5 credits
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    BYOK
                  </td>
                  <Cell highlight>
                    <Yes /> Unlimited calls
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    className="border border-white/[0.08] bg-violet-950/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-200"
                  >
                    AI &amp; Intelligence
                  </td>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Multiple Premium AI Models
                  </td>
                  <Cell highlight>
                    <Yes /> GPT-5, Claude, Gemini, Grok
                  </Cell>
                  <Cell>
                    <Partial>Limited selection</Partial>
                  </Cell>
                  <Cell>
                    <Yes /> OpenAI, Claude, Gemini
                  </Cell>
                  <Cell>
                    <Partial>Limited selection</Partial>
                  </Cell>
                  <Cell>1–2 models</Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Custom Prompts
                  </td>
                  <Cell highlight>
                    <Yes /> Fully editable
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    System Design Diagrams
                  </td>
                  <Cell highlight>
                    <Yes /> Rendered Mermaid
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Built-in Prompt Library
                  </td>
                  <Cell highlight>
                    <Yes /> 6 prompts + custom
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Document Upload
                  </td>
                  <Cell highlight>
                    <Yes /> PDF, DOCX, TXT placeholders
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    className="border border-white/[0.08] bg-violet-950/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-200"
                  >
                    Input Methods
                  </td>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Chrome Tab Text Extraction
                  </td>
                  <Cell highlight>
                    <Yes /> Direct text
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Screenshot Capture
                  </td>
                  <Cell highlight>
                    <Yes /> Tabs + full display
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Audio / Verbal Interview
                  </td>
                  <Cell highlight>
                    <Yes /> System audio, 20+ languages
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <Yes /> 7 languages
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Multi-Language Audio
                  </td>
                  <Cell highlight>
                    <Yes /> 20+ languages
                  </Cell>
                  <Cell>English only</Cell>
                  <Cell>
                    <Partial>Limited</Partial>
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <Yes /> 7 languages
                  </Cell>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    className="border border-white/[0.08] bg-violet-950/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-200"
                  >
                    Stealth &amp; UX
                  </td>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Stealth Mode
                  </td>
                  <Cell highlight>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Always on Top
                  </td>
                  <Cell highlight>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>Browser overlay</Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Global Hotkeys
                  </td>
                  <Cell highlight>
                    <Yes /> Fully customizable
                  </Cell>
                  <Cell>
                    <Partial>Limited</Partial>
                  </Cell>
                  <Cell>
                    <Partial>Limited</Partial>
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Light / Dark Theme
                  </td>
                  <Cell highlight>
                    <Yes />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Window Transparency
                  </td>
                  <Cell highlight>
                    <Yes /> Adjustable slider
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    className="border border-white/[0.08] bg-violet-950/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-200"
                  >
                    Technical
                  </td>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Native Desktop App
                  </td>
                  <Cell highlight>
                    <Yes /> Tauri/Rust (~17 MB)
                  </Cell>
                  <Cell>
                    <Yes /> Electron (~200 MB+)
                  </Cell>
                  <Cell>
                    <Yes /> Electron (~200 MB+)
                  </Cell>
                  <Cell>
                    <Yes /> Electron (~200 MB+)
                  </Cell>
                  <Cell>Browser-based</Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    macOS + Windows
                  </td>
                  <Cell highlight>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                </tr>
                <tr>
                  <td className="sticky left-0 z-10 border border-white/[0.08] bg-black/95 px-3 py-3 text-sm font-medium text-white sm:px-4">
                    Programming Language Selection
                  </td>
                  <Cell highlight>
                    <Yes /> 9 languages
                  </Cell>
                  <Cell>Auto-detect</Cell>
                  <Cell>Auto-detect</Cell>
                  <Cell>
                    <Yes />
                  </Cell>
                  <Cell>
                    <No />
                  </Cell>
                </tr>
              </tbody>
            </table>
          </div>

          <section className="relative mt-20">
            <div className="section-glow" aria-hidden />
            <h2 className="text-center font-sans text-2xl font-bold text-white sm:text-3xl">
              Why CrackingInterview?
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <article className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white">Best Value</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  $15/mo for everything — no session limits, no credit systems. Or bring your own API key and pay
                  nothing.
                </p>
              </article>
              <article className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white">System Design Diagrams</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  The only tool that renders architecture, ER, and sequence diagrams. Not just text — real visual
                  output.
                </p>
              </article>
              <article className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white">Fully Customizable</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Edit system and user prompts, customize every hotkey, adjust transparency and theme. No other tool
                  offers this level of control.
                </p>
              </article>
              <article className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white">Lightweight &amp; Fast</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Built with Tauri/Rust at just ~17 MB — 10x smaller than Electron competitors. Fast launch, minimal
                  resource usage.
                </p>
              </article>
            </div>
          </section>

          <section className="relative mt-20 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-violet-950/50 via-black to-purple-950/40 px-6 py-14 text-center sm:px-10">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(139,92,246,0.2),transparent)]"
              aria-hidden
            />
            <div className="relative z-10">
              <h2 className="font-sans text-2xl font-bold text-white sm:text-3xl md:text-4xl">Ready to Switch?</h2>
              <p className="mx-auto mt-3 max-w-lg text-zinc-400">
                Download CrackingInterview and try the full workflow — coding, system design, and verbal practice in one
                lightweight app.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
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

          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 text-center text-xs leading-relaxed text-amber-200/90 sm:text-sm">
            <strong className="text-amber-100">Disclaimer:</strong> Competitor features and pricing are compiled from
            publicly available information and may change. This comparison is for general guidance only and is not
            endorsed by any third-party product.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
