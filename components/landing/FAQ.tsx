"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "How does CrackingInterview work?",
    answer:
      "CrackingInterview is a desktop app that connects to Google Chrome to extract problems from any coding practice site. Select your input source (Chrome tab, screen capture, or audio recording), hit Solve, and get an AI-generated explanation and solution in seconds.",
  },
  {
    question: "What AI models are available?",
    answer:
      "Pro users get access to GPT-5, Claude Sonnet, Gemini 3 Flash, and Grok. Free users can bring their own API key for unlimited calls with any supported model.",
  },
  {
    question: "Is CrackingInterview invisible to screen sharing?",
    answer:
      "Yes. Stealth Mode makes the app invisible to screen-sharing applications like Zoom, Teams, and Google Meet. It also hides from screenshots, the Dock (macOS), and the Taskbar (Windows).",
  },
  {
    question: "What platforms do you support?",
    answer:
      "CrackingInterview runs on macOS (Intel and Apple Silicon) and Windows (x64). It supports all major coding platforms including LeetCode, HackerRank, CoderPad, CodeSignal, and more.",
  },
  {
    question: "Can I use my own API key?",
    answer:
      "Yes! Free users can enter their own OpenAI, Anthropic, Google, or xAI API key in Settings → AI Models. Your key is stored locally on your device only — we never see it.",
  },
  {
    question: "What's included in the free tier?",
    answer:
      "The free tier includes 3 AI calls, access to Chrome tab input on supported coding sites, text extraction, screenshot capture, custom prompts, global hotkeys, and document upload. You can also bring your own API key for unlimited use.",
  },
  {
    question: "What about verbal interviews?",
    answer:
      "Pro users can record system audio from Zoom, Teams, or any app. The AI transcribes the audio and generates structured answers in 20+ languages.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Google Chrome must be installed. On macOS, grant Accessibility and Screen & System Audio Recording permissions. On Windows, allow the app through Windows Security when prompted.",
  },
] as const;

export function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative scroll-mt-28 bg-black px-4 py-20 sm:px-6 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="section-glow" aria-hidden />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2
          id="faq-heading"
          className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-3xl flex-col gap-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-trigger-${index}`;

          return (
            <div key={item.question} className="glass-card overflow-hidden text-left">
              <h3 className="text-base font-medium leading-snug text-white">
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-500 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-zinc-400 transition-transform duration-300 ease-out",
                      isOpen && "rotate-180 text-violet-400",
                    )}
                    strokeWidth={2}
                    aria-hidden
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="border-t border-white/[0.06] px-5 pb-5 pt-4 text-sm leading-relaxed text-zinc-400 sm:px-6 sm:pb-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
