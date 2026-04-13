import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "User Guide", href: "/guide" },
  { label: "Compare", href: "/compare" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
          aria-label="Footer"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-500 transition hover:text-zinc-300"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:support@crackinginterview.org"
            className="text-zinc-500 transition hover:text-zinc-300"
          >
            Contact
          </a>
        </nav>
        <p className="text-xs text-zinc-600 sm:text-sm">
          © 2026 CrackingInterview. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
