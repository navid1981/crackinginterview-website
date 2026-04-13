import Link from "next/link";
import {
  Camera,
  FileText,
  Layers,
  Lock,
  Mic,
  Settings,
  Upload,
  type LucideIcon,
} from "lucide-react";

type Highlight = {
  icon: LucideIcon;
  iconClass: string;
  borderHover: string;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    icon: Lock,
    iconClass: "text-blue-400",
    borderHover: "hover:border-t-blue-400",
    title: "Stealth Mode",
    description:
      "Invisible to screen-sharing apps like Zoom and Teams. Hidden from screenshots, Dock, and Taskbar.",
  },
  {
    icon: Layers,
    iconClass: "text-purple-400",
    borderHover: "hover:border-t-purple-400",
    title: "Always on Top",
    description:
      "The app window stays above all other windows so your AI assistant is always visible.",
  },
  {
    icon: FileText,
    iconClass: "text-cyan-400",
    borderHover: "hover:border-t-cyan-400",
    title: "Text Extraction",
    description:
      "Extract problem text directly from Chrome tabs — fast and accurate for text-based problems.",
  },
  {
    icon: Camera,
    iconClass: "text-green-400",
    borderHover: "hover:border-t-green-400",
    title: "Screenshot Capture",
    description:
      "Capture browser tabs or your entire screen. Perfect for problems with images, diagrams, or tables.",
  },
  {
    icon: Mic,
    iconClass: "text-amber-400",
    borderHover: "hover:border-t-amber-400",
    title: "Audio Recording",
    description:
      "Record system audio for verbal interviews. AI transcribes and responds in real time — 20+ languages.",
  },
  {
    icon: Upload,
    iconClass: "text-pink-400",
    borderHover: "hover:border-t-pink-400",
    title: "Document Upload",
    description:
      "Upload your resume, cover letter, or any document. Use placeholders in prompts to inject document content as AI context.",
  },
  {
    icon: Settings,
    iconClass: "text-indigo-400",
    borderHover: "hover:border-t-indigo-400",
    title: "Bring Your Own Key",
    description:
      "Free users can enter their own API key for unlimited AI calls — no subscription required.",
  },
];

export function Highlights() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, iconClass, borderHover, title, description }) => (
            <li key={title}>
              <article
                className={`glass-card flex h-full flex-col border-t-2 border-t-transparent p-6 ${borderHover} transition-[border-color,transform,box-shadow]`}
              >
                <div className="mb-4">
                  <Icon className={`size-9 ${iconClass}`} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400 md:text-[15px]">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-sm text-gray-500">
          <Link
            href="/#download"
            className="font-medium text-violet-400 underline-offset-4 transition hover:text-violet-300 hover:underline"
          >
            Get CrackingInterview
          </Link>
        </p>
      </div>
    </section>
  );
}
