import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { PageShell } from "@/components/landing/PageShell";

export const metadata: Metadata = {
  title: "User Guide - CrackingInterview",
  description:
    "Step-by-step guide to using CrackingInterview — setup, Chrome integration, AI solving, system design diagrams, audio recording, hotkeys, and custom prompts.",
};

function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex items-center rounded-md border border-white/12 bg-white/[0.05] px-1.5 py-0.5 font-mono text-xs text-violet-200 sm:text-sm">
      {children}
    </kbd>
  );
}

function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="glass-card mb-3 flex gap-4 p-4 hover:translate-y-0 hover:shadow-none sm:p-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-600/25 font-mono text-sm font-bold text-violet-200">
        {n}
      </span>
      <div className="min-w-0 flex-1 pt-0.5 text-sm text-zinc-300 sm:text-base">{children}</div>
    </div>
  );
}

function InfoBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="glass-card mb-6 border-violet-500/25 p-5 hover:translate-y-0 hover:shadow-none sm:p-6">
      <h3 className="text-base font-semibold text-violet-200">{title}</h3>
      <div className="mt-2 text-sm text-zinc-300 sm:text-base">{children}</div>
    </div>
  );
}

function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="glass-card mb-6 border-cyan-500/20 bg-cyan-950/10 p-4 hover:translate-y-0 hover:shadow-none sm:p-5">
      <p className="text-sm text-cyan-100/90 sm:text-base">{children}</p>
    </div>
  );
}

function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="glass-card mb-6 border-amber-500/30 bg-amber-950/10 p-4 hover:translate-y-0 hover:shadow-none sm:p-5">
      <p className="text-sm text-amber-100/95 sm:text-base">{children}</p>
    </div>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-center text-xs text-zinc-500 sm:text-sm">{children}</p>;
}

function Toc() {
  const items = [
    { id: "g1", label: "Getting Started" },
    { id: "g2", label: "Opening Chrome" },
    { id: "g3", label: "Selecting an Input Source" },
    { id: "g4", label: "Solving — Text Extraction" },
    { id: "g5", label: "Solving — Screenshot" },
    { id: "g6", label: "Solving — Audio Recording (Pro)" },
    { id: "g7", label: "Reading AI Responses" },
    { id: "g8", label: "System Design Mode" },
    { id: "g9", label: "Global Hotkeys" },
    { id: "g10", label: "Custom Prompts" },
    { id: "g11", label: "Settings" },
    { id: "g12", label: "Free vs Pro" },
    { id: "g13", label: "Using Your Own API Key (Free users)" },
    { id: "g14", label: "Troubleshooting" },
  ] as const;
  return (
    <nav
      aria-label="Table of contents"
      className="glass-card mb-12 p-6 hover:translate-y-0 hover:shadow-none sm:p-8"
    >
      <strong className="block text-sm font-semibold uppercase tracking-wide text-violet-300">Contents</strong>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-zinc-300 sm:text-base">
        {items.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-violet-300 underline-offset-2 hover:text-violet-200 hover:underline">
              {i + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function GuidePage() {
  return (
    <PageShell>
      <article className="relative px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(139,92,246,0.1),transparent)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">User Guide</h1>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg">
            Everything you need to get started with CrackingInterview.
          </p>

          <Toc />

          {/* 1 */}
          <section id="g1" className="scroll-mt-28">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">1. Getting Started</h2>
            <h3 className="mt-8 text-lg font-semibold text-white">Prerequisites</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                <strong className="text-zinc-200">Google Chrome</strong> must be installed on your computer. The app
                connects to Chrome to read tabs and extract content.
              </li>
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-white">macOS Permissions</h3>
            <p className="mt-3 text-zinc-300">
              On first launch, macOS will ask you to grant permissions. Go to{" "}
              <strong className="text-white">System Settings → Privacy &amp; Security</strong> and enable:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                <strong className="text-zinc-200">Accessibility</strong> — Required for global hotkeys to work
                system-wide.
              </li>
              <li>
                <strong className="text-zinc-200">Screen &amp; System Audio Recording</strong> — Required for screenshot
                capture, display capture, and audio recording.
              </li>
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-white">Windows Permissions</h3>
            <p className="mt-3 text-zinc-300">
              On Windows, allow the app through Windows Security / SmartScreen when prompted on first launch. No
              additional system permissions are required.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-white">First Steps</h3>
            <Step n={1}>
              <strong className="text-white">Create an account</strong> — Open the app and sign up with your email and
              password.
            </Step>
            <Step n={2}>
              <strong className="text-white">Sign in</strong> — Enter your credentials. Check &quot;Remember me&quot; to
              pre-fill your password next time.
            </Step>
            <Step n={3}>
              <strong className="text-white">Open Chrome</strong> — Click <strong className="text-white">&quot;Open Chrome&quot;</strong> in the header bar. This launches a Chrome window connected to the app.
            </Step>
            <Step n={4}>
              <strong className="text-white">Navigate to a problem</strong> — In the Chrome window, go to a coding problem
              page.
            </Step>
            <Step n={5}>
              <strong className="text-white">Select your input source</strong> — Use the Input Source dropdown to pick the
              Chrome tab.
            </Step>
            <Step n={6}>
              <strong className="text-white">Hit Solve!</strong> — Click the Solve button and wait for the AI response.
            </Step>
            <InfoBox title="Always on Top &amp; Stealth Mode">
              <p>
                The app window <strong className="text-white">always stays on top</strong> of other windows so your AI
                assistant is always visible. It also supports <strong className="text-white">stealth mode</strong> — hidden
                from screen-sharing apps (Zoom, Teams), screenshots, Dock (macOS), and Taskbar (Windows). Enable it in{" "}
                <strong className="text-white">Settings → App</strong>.
              </p>
            </InfoBox>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <figure>
                <Image
                  src="/images/sign-in.png"
                  alt="CrackingInterview sign in screen"
                  width={800}
                  height={520}
                  className="app-screenshot w-full h-auto"
                />
                <Caption>Sign In</Caption>
              </figure>
              <figure>
                <Image
                  src="/images/create-account.png"
                  alt="CrackingInterview create account screen"
                  width={800}
                  height={520}
                  className="app-screenshot w-full h-auto"
                />
                <Caption>Create Account</Caption>
              </figure>
            </div>
          </section>

          {/* 2 */}
          <section id="g2" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">2. Opening Chrome</h2>
            <p className="mt-4 text-zinc-300">
              CrackingInterview connects to Google Chrome through a special debugging protocol. Chrome must be installed —
              just click the <strong className="text-white">&quot;Open Chrome&quot;</strong> button in the header.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
              <li>The app opens a separate Chrome window (it won&apos;t interfere with your regular Chrome sessions).</li>
              <li>
                Once connected, the header shows <strong className="text-white">&quot;Chrome Ready&quot;</strong> with a
                green indicator.
              </li>
              <li>Navigate to any website in that Chrome window.</li>
            </ul>
            <figure className="mt-8">
              <Image
                src="/images/main-chrome.png"
                alt="CrackingInterview main screen with Chrome Ready status and LeetCode tab"
                width={1200}
                height={720}
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Main screen — Chrome Ready, LeetCode tab selected</Caption>
            </figure>
            <Tip>
              <strong className="text-cyan-200">Tip:</strong> After Chrome opens and loads a page, click the{" "}
              <strong className="text-white">refresh button</strong> next to the Input Source dropdown to update the list
              of available tabs.
            </Tip>
            <h3 className="mt-8 text-lg font-semibold text-white">Connect to Your Existing Chrome (Chrome 144+)</h3>
            <p className="mt-3 text-zinc-300">
              If you have <strong className="text-white">Chrome 144 or later</strong>, you can connect CrackingInterview
              to your existing Chrome window instead of opening a new one:
            </p>
            <Step n={1}>
              In Chrome, go to <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">chrome://inspect/#remote-debugging</code>
            </Step>
            <Step n={2}>
              Check <strong className="text-white">&quot;Allow remote debugging for this browser instance&quot;</strong>
            </Step>
            <Step n={3}>
              Click <strong className="text-white">&quot;Open Chrome&quot;</strong> in CrackingInterview — it will
              automatically detect and connect to your running Chrome.
            </Step>
            <p className="mt-4 text-zinc-300">
              This lets you use your existing tabs, bookmarks, and logged-in sessions directly with CrackingInterview.
            </p>
            <figure className="mt-8">
              <Image
                src="/images/chrome-remote-debugging.png"
                alt="Chrome remote debugging settings at chrome://inspect showing Allow remote debugging checkbox"
                width={1200}
                height={680}
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Chrome remote debugging — enable at chrome://inspect/#remote-debugging</Caption>
            </figure>
          </section>

          {/* 3 */}
          <section id="g3" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">3. Selecting an Input Source</h2>
            <p className="mt-4 text-zinc-300">The Input Source dropdown shows all available sources:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                <strong className="text-zinc-200">Chrome Tabs</strong> — Any open tab in the connected Chrome window (shows
                title + live thumbnail)
              </li>
              <li>
                <strong className="text-zinc-200">Displays</strong> — Your screen(s) for full-screen capture (Pro only)
              </li>
              <li>
                <strong className="text-zinc-200">Audio (System)</strong> — Record system audio and microphone (Pro only)
              </li>
            </ul>
            <p className="mt-4 text-zinc-300">
              Select the source you want to analyze, then click <strong className="text-white">Solve</strong>.
            </p>
            <figure className="mt-8">
              <Image
                src="/images/input-source.png"
                alt="Input source dropdown showing Chrome tabs and displays with thumbnails"
                width={1200}
                height={680}
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Input source dropdown — Chrome tabs with thumbnails, displays</Caption>
            </figure>
            <Tip>
              <strong className="text-cyan-200">Tip:</strong> If you opened new tabs or navigated to a new page, press the
              refresh button to update the list.
            </Tip>
          </section>

          {/* 4 */}
          <section id="g4" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">4. Solving — Text Extraction</h2>
            <p className="mt-4 text-zinc-300">
              This is the default mode. The app extracts the text content from the selected Chrome tab and sends it to AI.
            </p>
            <Step n={1}>
              Select a <strong className="text-white">Chrome tab</strong> from the Input Source dropdown.
            </Step>
            <Step n={2}>
              Make sure <strong className="text-white">&quot;Text Extraction&quot;</strong> is selected in Settings → AI
              Models → Input Mode.
            </Step>
            <Step n={3}>
              Click <strong className="text-white">Solve</strong> (or press <Kbd>Cmd+1</Kbd>).
            </Step>
            <p className="mt-4 text-zinc-300">
              The progress stepper shows: <strong className="text-white">Extract → Asking AI</strong>, along with the AI
              model and prompt being used. Once complete, the explanation and solution appear.
            </p>
            <figure className="mt-8">
              <Image
                src="/images/algorithm-stepper.png"
                alt="Progress stepper showing Extract → Asking AI with Gemini 3 Flash model"
                width={1200}
                height={680}
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Progress stepper — shows model (Gemini 3 Flash) and prompt (Algorithm - Optimal)</Caption>
            </figure>
          </section>

          {/* 5 */}
          <section id="g5" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">5. Solving — Screenshot</h2>
            <p className="mt-4 text-zinc-300">
              Screenshot mode captures a visual image of the tab or display and sends it to AI. Useful when the problem
              includes images, diagrams, or complex formatting.
            </p>
            <Step n={1}>Select your input source (Chrome tab or Display).</Step>
            <Step n={2}>
              Select <strong className="text-white">&quot;Screenshot Capture&quot;</strong> in Settings → AI Models → Input
              Mode — or press <Kbd>Cmd+2</Kbd>.
            </Step>
            <Step n={3}>
              Click <strong className="text-white">Solve</strong> (or press <Kbd>Cmd+2</Kbd>).
            </Step>
            <figure className="mt-8">
              <Image
                src="/images/setting-ai-models.png"
                alt="AI Models settings showing Input Mode — Text Extraction and Screenshot Capture toggle"
                width={1200}
                height={680}
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Settings → AI Models — Input Mode toggle</Caption>
            </figure>
            <Tip>
              <strong className="text-cyan-200">Tip:</strong> If your input source is a <strong className="text-white">Display</strong>, the app always uses screenshot mode automatically, even if Text Extraction is selected.
            </Tip>
          </section>

          {/* 6 */}
          <section id="g6" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">6. Solving — Audio Recording (Pro)</h2>
            <p className="mt-4 text-zinc-300">
              Audio mode records system audio (e.g., from a Zoom or Teams call) and sends the recording to AI for
              analysis. Designed for verbal interview practice. Supports <strong className="text-white">20+ languages</strong>{" "}
              with auto-detection.
            </p>
            <Step n={1}>
              Select <strong className="text-white">&quot;Audio (System)&quot;</strong> from the Input Source dropdown.
            </Step>
            <Step n={2}>
              The app automatically selects the <strong className="text-white">&quot;Verbal Interview&quot;</strong> prompt.
            </Step>
            <Step n={3}>Choose your interview language (or leave on Auto-detect).</Step>
            <Step n={4}>
              Click <strong className="text-white">Record</strong> (or press <Kbd>Cmd+3</Kbd>) to start recording.
            </Step>
            <Step n={5}>The timer shows recording duration. Speak or let the audio play.</Step>
            <Step n={6}>
              Click <strong className="text-white">Stop</strong> (or press <Kbd>Cmd+3</Kbd> again) to stop and send to AI.
            </Step>
            <figure className="mt-8">
              <Image
                src="/images/audio.gif"
                alt="Animated demo of audio recording — system audio capture, transcription, and AI response"
                width={900}
                height={520}
                unoptimized
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Audio recording flow — record, transcribe, and get AI response</Caption>
            </figure>
            <figure className="mt-8">
              <Image
                src="/images/audio-languages.png"
                alt="Audio language selection dropdown with 20+ languages including auto-detect"
                width={1200}
                height={680}
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Interview language selection — 20+ languages supported</Caption>
            </figure>
            <Warning>
              <strong className="text-amber-200">Note:</strong> Audio recording has a 3-minute maximum per session. The
              recording automatically stops and sends to AI after 3 minutes. Audio is a <strong className="text-white">Pro-only</strong> feature with up to 10 hours per month.
            </Warning>
          </section>

          {/* 7 */}
          <section id="g7" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">7. Reading AI Responses</h2>
            <p className="mt-4 text-zinc-300">After the AI processes your request, you&apos;ll see two sections:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                <strong className="text-zinc-200">Explanation</strong> — A concise walkthrough of the approach, algorithm,
                and complexity analysis. Click the header to collapse/expand.
              </li>
              <li>
                <strong className="text-zinc-200">Solution</strong> — The complete code solution with syntax highlighting.
                Click <strong className="text-white">&quot;Copy Code&quot;</strong> to copy it to your clipboard.
              </li>
            </ul>
            <p className="mt-4 text-zinc-300">
              Both sections can be closed with the ✕ button. They automatically reappear when you run a new Solve.
            </p>
            <figure className="mt-8">
              <Image
                src="/images/algorithm.png"
                alt="AI explanation with approach, complexity analysis, and syntax-highlighted code solution"
                width={1200}
                height={720}
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Explanation + Solution with syntax-highlighted code and Copy Code button</Caption>
            </figure>
          </section>

          {/* 8 */}
          <section id="g8" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">8. System Design Mode</h2>
            <p className="mt-4 text-zinc-300">
              The <strong className="text-white">System Design</strong> prompt generates comprehensive designs with rendered
              diagrams — not just text. Select <strong className="text-white">&quot;System Design&quot;</strong> in Settings
              → Prompts, then Solve using a screenshot of the design problem.
            </p>
            <p className="mt-4 text-zinc-300">The AI returns:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                <strong className="text-zinc-200">Explanation</strong> — Functional &amp; non-functional requirements, key
                trade-offs
              </li>
              <li>
                <strong className="text-zinc-200">Design</strong> — Rendered architecture diagrams, ER data models,
                sequence flows, and a scaling strategy
              </li>
            </ul>
            <figure className="mt-8">
              <Image
                src="/images/system-design.gif"
                alt="Animated demo of system design — architecture diagrams, ER models, and sequence flows rendered in real time"
                width={900}
                height={520}
                unoptimized
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>System design flow — architecture, ER model, sequence diagram, and scaling strategy</Caption>
            </figure>
          </section>

          {/* 9 */}
          <section id="g9" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">9. Global Hotkeys</h2>
            <p className="mt-4 text-zinc-300">
              Hotkeys work even when the app is in the background, so you can trigger actions without switching windows.
            </p>
            <div className="glass-card mt-6 overflow-x-auto hover:translate-y-0 hover:shadow-none">
              <table className="w-full min-w-[320px] border-collapse text-left text-sm text-zinc-300 sm:text-base">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                    <th className="px-4 py-3 font-semibold text-white">Default Shortcut</th>
                    <th className="px-4 py-3 font-semibold text-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/[0.06]">
                    <td className="px-4 py-3">
                      <Kbd>Cmd+1</Kbd>
                    </td>
                    <td className="px-4 py-3">Extract text → Solve</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="px-4 py-3">
                      <Kbd>Cmd+2</Kbd>
                    </td>
                    <td className="px-4 py-3">Screenshot → Solve</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="px-4 py-3">
                      <Kbd>Cmd+3</Kbd>
                    </td>
                    <td className="px-4 py-3">Start/Stop audio recording → Solve</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="px-4 py-3">
                      <Kbd>Cmd+Up / Down</Kbd>
                    </td>
                    <td className="px-4 py-3">Scroll explanation up/down</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="px-4 py-3">
                      <Kbd>Cmd+Shift+Arrow</Kbd>
                    </td>
                    <td className="px-4 py-3">Move the app window</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="px-4 py-3">
                      <Kbd>Cmd+Shift+H</Kbd>
                    </td>
                    <td className="px-4 py-3">Show/Hide the app window</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <Kbd>Cmd+Shift+Q</Kbd>
                    </td>
                    <td className="px-4 py-3">Quit the app</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-zinc-300">
              All hotkeys are customizable in <strong className="text-white">Settings → HotKeys</strong>. On Windows,{" "}
              <Kbd>Cmd</Kbd> is replaced with <Kbd>Alt</Kbd>.
            </p>
            <figure className="mt-8">
              <Image
                src="/images/settings-hotkeys.png"
                alt="HotKeys settings — Solve, Navigation, and App sections with customizable shortcuts"
                width={1200}
                height={720}
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Settings → HotKeys</Caption>
            </figure>
            <Tip>
              <strong className="text-cyan-200">Tip:</strong> Use <Kbd>Cmd+Shift+H</Kbd> to quickly hide/show the app while
              working in Chrome. Hotkeys work globally — no need to switch windows.
            </Tip>
          </section>

          {/* 10 */}
          <section id="g10" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">10. Custom Prompts</h2>
            <p className="mt-4 text-zinc-300">
              Prompts control how the AI analyzes your problem. The app comes with 6 built-in prompts:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                <strong className="text-zinc-200">Algorithm - Optimal</strong> — Finds the most efficient solution
              </li>
              <li>
                <strong className="text-zinc-200">Algorithm - Beginner</strong> — Explains in simpler terms
              </li>
              <li>
                <strong className="text-zinc-200">System Design</strong> — Generates architecture diagrams, data models,
                and scaling plans
              </li>
              <li>
                <strong className="text-zinc-200">Code Review</strong> — Reviews and improves existing code
              </li>
              <li>
                <strong className="text-zinc-200">Explain Concept</strong> — Explains algorithms and concepts
              </li>
              <li>
                <strong className="text-zinc-200">Verbal Interview</strong> — For audio-based interview practice
              </li>
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-white">Editing a Prompt</h3>
            <p className="mt-3 text-zinc-300">
              Go to <strong className="text-white">Settings → Prompts</strong> and click <strong className="text-white">&quot;Edit&quot;</strong> on any prompt. You can customize the system instructions and user template. Use{" "}
              <code className="rounded bg-white/10 px-1 font-mono text-sm">{"{CONTENT}"}</code> as a placeholder for the
              extracted text and <code className="rounded bg-white/10 px-1 font-mono text-sm">{"{LANGUAGE}"}</code> for the
              programming language.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-white">Creating a Custom Prompt</h3>
            <p className="mt-3 text-zinc-300">
              Click <strong className="text-white">&quot;New Prompt&quot;</strong> to create your own. You can have up to 3
              custom prompts.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-white">Document Placeholders</h3>
            <p className="mt-3 text-zinc-300">
              Upload your documents (resume, cover letter, etc.) and use them as context in any prompt. Click{" "}
              <strong className="text-white">&quot;Upload Docs&quot;</strong> in Settings → Prompts to open the Document
              Manager.
            </p>
            <Step n={1}>
              Click <strong className="text-white">&quot;Upload Docs&quot;</strong> in the Prompts settings tab.
            </Step>
            <Step n={2}>
              Upload up to <strong className="text-white">3 files</strong> (PDF, DOCX, DOC, or TXT) and assign a name to
              each.
            </Step>
            <Step n={3}>
              The app extracts the text and creates a{" "}
              <code className="rounded bg-white/10 px-1 font-mono text-sm">{"{PLACEHOLDER}"}</code> for each document.
            </Step>
            <Step n={4}>
              Use the placeholder (e.g. <code className="rounded bg-white/10 px-1 font-mono text-sm">{"{MY_RESUME}"}</code>
              ) in any prompt template — the extracted text is automatically injected when you Solve.
            </Step>
            <Warning>
              <strong className="text-amber-200">Note:</strong> Reserved names like{" "}
              <code className="rounded bg-white/10 px-1 font-mono text-sm">{"{CONTENT}"}</code>,{" "}
              <code className="rounded bg-white/10 px-1 font-mono text-sm">{"{LANGUAGE}"}</code>, and{" "}
              <code className="rounded bg-white/10 px-1 font-mono text-sm">{"{INTERVIEW_LANGUAGE}"}</code> cannot be used as
              document placeholder names.
            </Warning>
            <figure className="mt-8">
              <Image
                src="/images/setting-upload-docs.png"
                alt="Document Placeholders dialog — upload documents and assign placeholder names for use in prompts"
                width={1200}
                height={680}
                className="app-screenshot mx-auto w-full max-w-4xl h-auto"
              />
              <Caption>Upload Docs — upload documents and assign {"{PLACEHOLDER}"} names</Caption>
            </figure>
            <h3 className="mt-8 text-lg font-semibold text-white">Programming Language</h3>
            <p className="mt-3 text-zinc-300">
              Select your preferred language in <strong className="text-white">Settings → Prompts</strong>. Available:
              Java, Python, JavaScript, C++, Swift, Go, PHP, Ruby, SQL.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <figure>
                <Image
                  src="/images/setting-prompts.png"
                  alt="Prompts settings with programming language selection, 6 built-in prompts, New Prompt and Upload Docs buttons"
                  width={800}
                  height={560}
                  className="app-screenshot w-full h-auto"
                />
                <Caption>Settings → Prompts</Caption>
              </figure>
              <figure>
                <Image
                  src="/images/setting-edit-prompt.png"
                  alt="Prompt editor with system prompt and user prompt fields"
                  width={800}
                  height={560}
                  className="app-screenshot w-full h-auto"
                />
                <Caption>Editing a prompt — System &amp; User Prompt</Caption>
              </figure>
            </div>
          </section>

          {/* 11 */}
          <section id="g11" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">11. Settings</h2>
            <p className="mt-4 text-zinc-300">
              Click the <strong className="text-white">gear icon</strong> in the header to open Settings. Tabs include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                <strong className="text-zinc-200">Account</strong> — Subscription status, AI call and audio usage quotas,
                manage billing, sign out
              </li>
              <li>
                <strong className="text-zinc-200">AI Models</strong> — Choose which AI model to use (Gemini 3 Flash, GPT-5,
                Claude Sonnet, Grok). Switch between Text Extraction and Screenshot Capture input modes. Free users can
                enter their own API key
              </li>
              <li>
                <strong className="text-zinc-200">Prompts</strong> — Select, edit, create, and manage prompts. Choose your
                programming language
              </li>
              <li>
                <strong className="text-zinc-200">HotKeys</strong> — Customize all keyboard shortcuts
              </li>
              <li>
                <strong className="text-zinc-200">App</strong> — Adjust window transparency, switch between Light/Dark
                theme, and toggle Stealth Mode
              </li>
            </ul>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <figure>
                <Image
                  src="/images/setting-ai-models.png"
                  alt="AI Models settings showing premium model selection and input mode"
                  width={560}
                  height={400}
                  className="app-screenshot w-full h-auto"
                />
                <Caption>AI Models</Caption>
              </figure>
              <figure>
                <Image
                  src="/images/setting-account.png"
                  alt="Account settings showing Pro subscription status, usage quotas"
                  width={560}
                  height={400}
                  className="app-screenshot w-full h-auto"
                />
                <Caption>Account</Caption>
              </figure>
              <figure className="sm:col-span-1">
                <Image
                  src="/images/setting-app.png"
                  alt="App settings — transparency slider, theme toggle, stealth mode"
                  width={560}
                  height={400}
                  className="app-screenshot w-full h-auto"
                />
                <Caption>App Settings</Caption>
              </figure>
            </div>
          </section>

          {/* 12 */}
          <section id="g12" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">12. Free vs Pro</h2>
            <div className="glass-card mt-6 overflow-x-auto hover:translate-y-0 hover:shadow-none">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm text-zinc-300 sm:text-base">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                    <th className="px-4 py-3 font-semibold text-white">Feature</th>
                    <th className="px-4 py-3 font-semibold text-white">Free</th>
                    <th className="px-4 py-3 font-semibold text-white">Pro ($15/mo)</th>
                  </tr>
                </thead>
                <tbody>
                  {(
                    [
                      ["AI calls", "3 calls (or unlimited with your own API key)", "150 calls per month"],
                      ["AI models", "1 model (or your own via API key)", "All 4 premium models"],
                      ["Audio recording", "✗", "10 hours per month"],
                      ["Input sources", "Chrome tabs only", "Chrome tabs, Display, Audio"],
                      ["Websites", "Coding practice sites only", "Any website"],
                      ["Text Extraction", "✓", "✓"],
                      ["Screenshot Capture", "✓ (Chrome tabs)", "✓ (Chrome tabs + Display)"],
                      ["System Design Diagrams", "✓", "✓"],
                      ["Custom Prompts", "✓", "✓"],
                      ["Document Placeholders", "✓", "✓"],
                      ["Global Hotkeys", "✓", "✓"],
                      ["Always on Top", "✓", "✓"],
                      ["Stealth Mode", "✓", "✓"],
                      ["Light / Dark Theme", "✓", "✓"],
                      ["Window Transparency", "✓", "✓"],
                    ] as const
                  ).map(([f, free, pro]) => (
                    <tr key={f} className="border-b border-white/[0.06] last:border-0">
                      <td className="px-4 py-3 font-medium text-zinc-200">{f}</td>
                      <td className="px-4 py-3">{free}</td>
                      <td className="px-4 py-3">{pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-zinc-300">
              To upgrade, go to <strong className="text-white">Settings → Account</strong> and click{" "}
              <strong className="text-white">&quot;Manage Subscription&quot;</strong>. See{" "}
              <Link href="/compare" className="text-violet-400 underline-offset-2 hover:underline">
                how we compare
              </Link>{" "}
              to other AI interview tools.
            </p>
          </section>

          {/* 13 */}
          <section id="g13" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">13. Using Your Own API Key (Free Users)</h2>
            <p className="mt-4 text-zinc-300">Free users can bring their own API key to get unlimited AI calls:</p>
            <Step n={1}>
              Go to <strong className="text-white">Settings → AI Models</strong>.
            </Step>
            <Step n={2}>Enter your API key in the provided field.</Step>
            <Step n={3}>
              Click <strong className="text-white">Save</strong>. The app will use your key for all AI requests.
            </Step>
            <Warning>
              <strong className="text-amber-200">Note:</strong> Your API key is stored locally on your device only. We never
              send it to our servers. You are responsible for any charges from the API provider.
            </Warning>
          </section>

          {/* 14 */}
          <section id="g14" className="scroll-mt-28 mt-16">
            <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">14. Troubleshooting</h2>
            <h3 className="mt-6 text-lg font-semibold text-white">&quot;Open Chrome&quot; button doesn&apos;t connect</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                Make sure <strong className="text-white">Google Chrome is installed</strong> on your computer.
              </li>
              <li>Make sure no other application is using debugging port 9222.</li>
              <li>Try closing all Chrome windows and clicking &quot;Open Chrome&quot; again.</li>
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-white">Screenshot or audio capture not working (macOS)</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                Go to{" "}
                <strong className="text-white">
                  System Settings → Privacy &amp; Security → Screen &amp; System Audio Recording
                </strong>{" "}
                and enable CrackingInterview.
              </li>
              <li>You may need to restart the app after granting this permission.</li>
              <li>If it still doesn&apos;t work, try toggling the permission off and back on.</li>
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-white">Input Source dropdown is empty</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                Click the <strong className="text-white">refresh button</strong> next to the dropdown.
              </li>
              <li>
                Make sure Chrome is connected (header shows &quot;Chrome Ready&quot;).
              </li>
              <li>Open at least one tab in the Chrome window.</li>
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-white">AI response is slow or fails</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Check your internet connection.</li>
              <li>If using your own API key, verify it&apos;s valid and has available quota.</li>
              <li>Try selecting a different AI model in Settings → AI Models.</li>
              <li>
                Complex problems (especially System Design with screenshots) may take longer — the app has a 50-second
                timeout.
              </li>
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-white">&quot;Domain not allowed&quot; error (Free users)</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Free tier is limited to supported coding practice websites.</li>
              <li>Navigate to a supported site in the Chrome window.</li>
              <li>Upgrade to Pro for access to any website.</li>
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-white">Audio recording doesn&apos;t work</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Audio is a Pro-only feature. Make sure you have an active Pro subscription.</li>
              <li>
                On macOS, grant <strong className="text-white">Screen &amp; System Audio Recording</strong> permission in
                System Settings.
              </li>
              <li>Make sure system audio is playing (the app records what your computer outputs).</li>
              <li>
                If audio worked once but stopped, try toggling the Screen Recording permission off and back on in System
                Settings.
              </li>
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-white">Hotkeys don&apos;t work</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>
                On macOS, go to{" "}
                <strong className="text-white">System Settings → Privacy &amp; Security → Accessibility</strong> and enable
                CrackingInterview.
              </li>
              <li>You may need to restart the app after granting this permission.</li>
              <li>Check for conflicts with other apps using the same shortcuts.</li>
            </ul>
          </section>

          <hr className="my-14 border-white/[0.08]" />

          <p className="text-center text-sm text-zinc-500">
            Still need help? Contact us at{" "}
            <a
              href="mailto:support@crackinginterview.org"
              className="text-violet-400 underline-offset-2 hover:underline"
            >
              support@crackinginterview.org
            </a>
          </p>
        </div>
      </article>
    </PageShell>
  );
}
