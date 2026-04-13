import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Globe, Layers, Zap } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Connect Chrome",
    description:
      "Click Open Chrome in the header. The app launches a Chrome window connected via DevTools Protocol — your existing sessions stay untouched.",
    image: "/images/main-chrome.png",
    imageAlt: "CrackingInterview connected Chrome window",
    icon: Globe,
    textFirst: true,
  },
  {
    number: 2,
    title: "Select Your Input Source",
    description:
      "The dropdown shows all open Chrome tabs with live thumbnails, your display screens for full-screen capture, and Audio for verbal interviews.",
    image: "/images/input-source.png",
    imageAlt: "Input source selector with tabs, display, and audio",
    icon: Layers,
    textFirst: false,
  },
  {
    number: 3,
    title: "Hit Solve",
    description:
      "Press Solve or use a global hotkey. The app extracts the problem and sends it to a premium AI model. A live progress stepper shows the model and prompt being used.",
    image: "/images/algorithm-stepper.png",
    imageAlt: "Live algorithm solve progress stepper",
    icon: Zap,
    textFirst: true,
  },
  {
    number: 4,
    title: "Get Your Answer",
    description:
      "Within seconds you get a concise Explanation with the approach and complexity analysis, plus a complete Solution with syntax-highlighted, copy-ready code.",
    image: "/images/algorithm.png",
    imageAlt: "Explanation and solution with highlighted code",
    icon: CheckCircle2,
    textFirst: false,
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative border-t border-white/[0.06] bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="how-it-works-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-16 max-w-2xl text-center lg:mb-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-violet-400/90">
            CrackingInterview
          </p>
          <h2
            id="how-it-works-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            How It Works
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Four simple steps to go from problem to solution.{" "}
            <Link
              href="/#download"
              className="font-medium text-violet-400 underline decoration-violet-500/40 underline-offset-4 transition hover:text-violet-300 hover:decoration-violet-400"
            >
              Get the app
            </Link>
            .
          </p>
        </header>

        <ol className="flex flex-col gap-20 lg:gap-28">
          {steps.map((step) => {
            const Icon = step.icon;
            const textBlock = (
              <div
                className={
                  step.textFirst
                    ? "order-1 md:order-1"
                    : "order-1 md:order-2 md:pl-4 lg:pl-8"
                }
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-lg font-bold text-white shadow-lg shadow-violet-900/40 ring-2 ring-white/10"
                      aria-hidden
                    >
                      {step.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <Icon
                        className="size-5 text-violet-400/90"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="max-w-xl text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            );

            const imageBlock = (
              <div
                className={
                  step.textFirst
                    ? "order-2 md:order-2"
                    : "order-2 md:order-1 md:pr-4 lg:pr-8"
                }
              >
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  width={1200}
                  height={800}
                  className="app-screenshot w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={step.number <= 2}
                />
              </div>
            );

            return (
              <li
                key={step.number}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16"
              >
                {textBlock}
                {imageBlock}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
