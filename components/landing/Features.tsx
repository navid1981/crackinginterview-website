import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

const features = [
  {
    image: "/images/setting-ai-models.png",
    imageAlt: "Premium AI model selection in CrackingInterview",
    title: "Premium AI Models",
    description:
      "Choose from GPT-5, Claude Sonnet, Gemini 3 Flash, and Grok. Switch between Text Extraction and Screenshot Capture modes.",
  },
  {
    image: "/images/setting-prompts.png",
    imageAlt: "Custom prompts and document upload settings",
    title: "Custom Prompts & Document Upload",
    description:
      "6 built-in prompts for algorithms, system design, code review, and more. Edit prompts, create your own, or upload documents as reusable placeholders.",
  },
  {
    image: "/images/settings-hotkeys.png",
    imageAlt: "Global hotkey configuration",
    title: "Global Hotkeys",
    description:
      "Fully customizable keyboard shortcuts that work even when the app is in the background. Solve, navigate, and control without switching windows.",
  },
  {
    image: "/images/setting-app.png",
    imageAlt: "App appearance and stealth settings",
    title: "App Settings",
    description:
      "Adjustable window transparency, Light/Dark theme, and Stealth Mode — hidden from screen sharing, screenshots, Dock, and Taskbar.",
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      className="relative border-t border-white/[0.06] bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(139,92,246,0.1),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
              <SlidersHorizontal className="size-3.5" strokeWidth={2} aria-hidden />
              CrackingInterview
            </span>
          </div>
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Powerful Customization
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Fine-tune every aspect of your AI assistant.{" "}
            <Link
              href="/#download"
              className="font-medium text-violet-400 underline decoration-violet-500/40 underline-offset-4 transition hover:text-violet-300 hover:decoration-violet-400"
            >
              Download CrackingInterview
            </Link>
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <li key={feature.title}>
              <article className="glass-card flex h-full flex-col overflow-hidden p-0">
                <div className="relative w-full overflow-hidden border-b border-white/[0.06] bg-white/[0.02]">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={800}
                    height={480}
                    className="w-full h-auto object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
