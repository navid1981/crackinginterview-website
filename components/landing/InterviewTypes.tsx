import Image from "next/image";

const cards = [
  {
    src: "/images/algorithm.gif",
    alt: "CrackingInterview solving a coding problem with step-by-step guidance",
    tag: "Algorithm",
    tagClass:
      "border border-emerald-500/35 bg-emerald-500/10 text-emerald-300",
    title: "Coding Problems",
    description:
      "Extract text or capture a screenshot from LeetCode, HackerRank, or any site. Get optimal solutions with step-by-step explanations and complexity analysis.",
  },
  {
    src: "/images/system-design.gif",
    alt: "System design diagrams and architecture in CrackingInterview",
    tag: "System Design",
    tagClass: "border border-violet-500/35 bg-violet-500/10 text-violet-200",
    title: "Architecture & Diagrams",
    description:
      "Get full system designs with rendered architecture diagrams, ER models, sequence flows, and scaling strategies — not just text.",
  },
  {
    src: "/images/audio.gif",
    alt: "Audio recording and transcription for verbal interviews",
    tag: "Verbal Interview",
    tagClass: "border border-amber-500/40 bg-amber-500/10 text-amber-200",
    title: "Audio Recording",
    description:
      "Record system audio from Zoom or Teams calls. AI transcribes and responds with a structured answer — supports 20+ languages.",
  },
] as const;

export function InterviewTypes() {
  return (
    <section className="relative bg-black px-4 py-24 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything You Need to Ace Technical Interviews
          </h2>
          <p className="mt-5 text-base text-zinc-400 sm:text-lg">
            From coding challenges to system design and live verbal Q&amp;A, CrackingInterview
            equips you with step-by-step AI support — giving you confidence in every scenario.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="glass-card group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-zinc-950/80">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 transition duration-500 group-hover:opacity-60" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${card.tagClass}`}
                >
                  {card.tag}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white transition duration-300 group-hover:text-violet-100 sm:text-2xl">
                  {card.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-400 transition duration-300 group-hover:text-zinc-300 sm:text-[15px]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
