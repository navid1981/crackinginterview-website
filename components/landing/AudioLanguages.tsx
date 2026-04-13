import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const bullets = [
  "System audio capture — no microphone needed",
  "Auto-detect multilingual conversations",
  "Real-time transcription via Deepgram",
  "Up to 10 hours of recording per month (Pro)",
] as const;

export function AudioLanguages() {
  return (
    <section className="relative border-y border-white/[0.06] bg-black py-20 md:py-28">
      <div className="section-glow" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Multi-Language Audio
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
            Record system audio from Zoom, Teams, or any application. The AI transcribes and
            analyzes interviews in 20+ languages — including English, Spanish, French, German,
            Japanese, Korean, Chinese, Hindi, Arabic, and more.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            Select your interview language or let the app auto-detect it. Perfect for
            international candidates interviewing across borders.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex gap-3 text-left text-gray-300">
                <span
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"
                  aria-hidden
                >
                  <Check className="size-3.5 stroke-[2.5]" />
                </span>
                <span className="text-[15px] leading-snug md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10">
            <Link
              href="/#download"
              className="inline-flex text-sm font-semibold text-violet-400 underline-offset-4 transition hover:text-violet-300 hover:underline"
            >
              Download CrackingInterview
            </Link>
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-xl md:mx-0 md:max-w-none">
            <Image
              src="/images/audio-languages.png"
              alt="CrackingInterview multi-language audio and transcription settings"
              width={1200}
              height={800}
              className="app-screenshot h-auto w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
