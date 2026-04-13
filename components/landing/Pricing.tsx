import { Check } from "lucide-react";

const freeFeatures = [
  "3 AI calls to try the app",
  "Bring your own API key for unlimited use",
  "Chrome tab input (coding practice sites)",
  "Text extraction and screenshot",
  "Custom prompts and hotkeys",
  "Document upload placeholders",
] as const;

const proFeatures = [
  "150 AI calls per month",
  "10 hours of audio recording",
  "All 4 premium AI models included",
  "All input sources (any website, display, audio)",
  "No domain restrictions",
  "Priority support",
] as const;

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-28 bg-black px-4 py-20 sm:px-6 sm:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="section-glow" aria-hidden />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2
          id="pricing-heading"
          className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Plans
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-zinc-400 sm:text-lg">
          Start free. Upgrade when you&apos;re ready.
        </p>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-[700px] gap-5 md:grid-cols-2 md:gap-6">
        <article className="glass-card flex flex-col p-6 sm:p-7">
          <h3 className="text-lg font-semibold text-white">Free</h3>
          <ul className="mt-6 flex flex-1 flex-col gap-3 text-left text-sm text-zinc-300">
            {freeFeatures.map((line) => (
              <li key={line} className="flex gap-3">
                <Check
                  className="mt-0.5 size-4 shrink-0 text-emerald-400"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="glow-border rounded-2xl">
          <article className="relative z-10 flex h-full flex-col rounded-2xl glass-card p-6 sm:p-7">
            <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-violet-900/40">
              POPULAR
            </span>
            <h3 className="pr-20 text-lg font-semibold text-white">Pro — $15/mo</h3>
            <ul className="mt-6 flex flex-1 flex-col gap-3 text-left text-sm text-zinc-300">
              {proFeatures.map((line) => (
                <li key={line} className="flex gap-3">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-emerald-400"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-[700px] text-center text-xs text-zinc-500 sm:text-sm">
        Subscription is managed through the app after download.
      </p>
    </section>
  );
}
