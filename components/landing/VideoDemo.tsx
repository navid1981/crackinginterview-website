import Link from "next/link";

export function VideoDemo() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[70px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          See It in Action
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-400 md:text-lg">
          Watch a quick walkthrough of CrackingInterview solving real interview problems.
        </p>

        <div className="mx-auto mt-10 max-w-[800px]">
          <div className="glass-card overflow-hidden rounded-2xl p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06),0_0_48px_rgba(139,92,246,0.18)]">
            <div className="relative aspect-video w-full overflow-hidden rounded-[12px] bg-black">
              <iframe
                title="CrackingInterview demo walkthrough on YouTube"
                src="https://www.youtube.com/embed/dVFZzC-V92g"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            <Link
              href="https://www.youtube.com/watch?v=dVFZzC-V92g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 underline-offset-4 transition hover:text-violet-300 hover:underline"
            >
              Open on YouTube
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
