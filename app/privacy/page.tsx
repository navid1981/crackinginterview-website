import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/landing/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy - CrackingInterview",
  description:
    "CrackingInterview privacy policy — how we handle your data, screen captures, audio recordings, and payment information.",
};

function Toc() {
  const items = [
    { id: "p1", label: "Information We Collect" },
    { id: "p2", label: "How We Use Your Information" },
    { id: "p3", label: "Data Storage and Security" },
    { id: "p4", label: "Audio Recording and Screen Capture" },
    { id: "p5", label: "Third-Party Services" },
    { id: "p6", label: "Local Storage" },
    { id: "p7", label: "Data Retention" },
    { id: "p8", label: "Your Rights" },
    { id: "p9", label: "California Privacy Rights (CCPA)" },
    { id: "p10", label: "Children's Privacy" },
    { id: "p11", label: "International Data Transfers" },
    { id: "p12", label: "Changes to This Privacy Policy" },
    { id: "p13", label: "Contact Us" },
  ] as const;
  return (
    <nav
      aria-label="Table of contents"
      className="glass-card mb-12 p-6 hover:translate-y-0 hover:shadow-none sm:p-8"
    >
      <strong className="block text-sm font-semibold uppercase tracking-wide text-violet-300">Table of Contents</strong>
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

export default function PrivacyPage() {
  return (
    <PageShell>
      <article className="relative px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(139,92,246,0.1),transparent)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-zinc-500">Last Updated: February 20, 2026</p>

          <div className="mt-8 space-y-5 text-zinc-300">
            <p>
              This Privacy Policy describes how CrackingInterview (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
              collects, uses, stores, and protects your information when you use the CrackingInterview application and
              related services (collectively, the &quot;Services&quot;).
            </p>
            <p>
              By using the Services, you agree to the collection and use of information in accordance with this Privacy
              Policy. If you do not agree, please discontinue use of the Services.
            </p>
          </div>

          <div className="mt-10">
            <Toc />
          </div>

          <div className="space-y-12 text-zinc-300">
            <section id="p1" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">1. Information We Collect</h2>
              <h3 className="mt-6 text-lg font-semibold text-white">1.1 Information You Provide</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-zinc-200">Account Information:</strong> Email address and password when you
                  create an account
                </li>
                <li>
                  <strong className="text-zinc-200">Payment Information:</strong> Processed by our third-party payment
                  provider; we do not store credit card numbers
                </li>
                <li>
                  <strong className="text-zinc-200">API Keys:</strong> If you provide your own third-party API keys, they
                  are stored locally on your device only
                </li>
              </ul>
              <h3 className="mt-6 text-lg font-semibold text-white">1.2 Information Collected Through Use</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-zinc-200">Content You Select:</strong> Web page text, URLs, and titles of
                  content you choose to analyze
                </li>
                <li>
                  <strong className="text-zinc-200">Screenshots:</strong> Screen captures you take are sent to AI
                  providers for analysis
                </li>
                <li>
                  <strong className="text-zinc-200">Audio Recordings:</strong> System audio and/or microphone input you
                  choose to record
                </li>
                <li>
                  <strong className="text-zinc-200">Usage Data:</strong> Number of AI calls made per billing period for
                  quota tracking
                </li>
              </ul>
              <h3 className="mt-6 text-lg font-semibold text-white">1.3 Information We Do NOT Collect</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  We do <strong className="text-white">not</strong> track your browsing history — only content you
                  explicitly select
                </li>
                <li>
                  We do <strong className="text-white">not</strong> collect analytics, telemetry, or behavioral tracking
                  data
                </li>
                <li>
                  We do <strong className="text-white">not</strong> sell, rent, or trade your personal information to
                  third parties
                </li>
                <li>
                  We do <strong className="text-white">not</strong> access your camera or microphone without your
                  explicit action
                </li>
                <li>
                  We do <strong className="text-white">not</strong> store your screenshots, audio recordings, or extracted
                  text on our servers beyond the duration needed for processing
                </li>
              </ul>
            </section>

            <section id="p2" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">2. How We Use Your Information</h2>
              <p className="mt-4">We use the information we collect to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-zinc-200">Provide the Services</strong> — Authenticate your account, process
                  AI requests, and deliver responses
                </li>
                <li>
                  <strong className="text-zinc-200">Manage subscriptions</strong> — Track usage quotas and process
                  payments
                </li>
                <li>
                  <strong className="text-zinc-200">Maintain and improve the Services</strong> — Ensure security and
                  improve functionality
                </li>
                <li>
                  <strong className="text-zinc-200">Communicate with you</strong> — Send important notices about your
                  account or the Services
                </li>
                <li>
                  <strong className="text-zinc-200">Enforce our Terms</strong> — Detect and prevent misuse or violations
                  of our Terms of Service
                </li>
              </ul>
            </section>

            <section id="p3" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">3. Data Storage and Security</h2>
              <div className="glass-card mt-6 border-violet-500/25 p-5 hover:translate-y-0 hover:shadow-none sm:p-6">
                <h3 className="text-base font-semibold text-violet-200">Privacy-First Design</h3>
                <p className="mt-2 text-sm text-zinc-300 sm:text-base">
                  CrackingInterview is designed so that most user data stays on your device.
                </p>
              </div>
              <ul className="mt-6 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-zinc-200">Local Storage:</strong> App preferences, settings, and API keys are
                  stored locally on your device.
                </li>
                <li>
                  <strong className="text-zinc-200">Cloud Data:</strong> Only your email, subscription status, and
                  aggregate usage count are stored on our backend to manage your account.
                </li>
                <li>
                  <strong className="text-zinc-200">Screenshots and Audio:</strong> Captured content is processed in
                  memory and transmitted to AI providers via encrypted connections. We do not retain copies.
                </li>
                <li>
                  <strong className="text-zinc-200">Payment Security:</strong> All payment data is handled by our
                  third-party payment provider. We never see or store your full credit card number.
                </li>
                <li>
                  <strong className="text-zinc-200">Encryption:</strong> All data transmissions use encrypted connections
                  (HTTPS/TLS).
                </li>
              </ul>
            </section>

            <section id="p4" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">4. Audio Recording and Screen Capture</h2>
              <div className="glass-card mt-6 border-red-500/30 bg-red-950/20 p-5 hover:translate-y-0 hover:shadow-none sm:p-6">
                <h3 className="text-base font-semibold text-red-200">Important: Recording Privacy</h3>
                <p className="mt-2 text-sm text-zinc-300 sm:text-base">
                  The audio recording and screen capture features may capture sensitive information.{" "}
                  <strong className="text-white">
                    You are solely responsible for ensuring you have proper consent and authorization before using these
                    features.
                  </strong>
                </p>
              </div>
              <ul className="mt-6 list-disc space-y-2 pl-5">
                <li>Audio recording captures system audio and/or microphone input only when you initiate it</li>
                <li>Audio data is processed and transmitted to AI providers for analysis; it is not stored on our servers</li>
                <li>Screenshots are taken only when you explicitly initiate capture</li>
                <li>Captured images are sent to AI providers for analysis and are not retained on our servers</li>
                <li>
                  You must comply with all applicable recording consent laws (see our{" "}
                  <Link href="/terms" className="text-violet-400 underline-offset-2 hover:underline">
                    Terms of Service
                  </Link>
                  )
                </li>
              </ul>
            </section>

            <section id="p5" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">5. Third-Party Services</h2>
              <p className="mt-4">
                The Services integrate with third-party providers for AI processing, payment, and authentication. When you
                use the Services, certain data may be transmitted to these providers to fulfill your requests.
              </p>
              <p className="mt-4">
                Each provider operates under its own privacy policy. We encourage you to review the privacy policies of any
                third-party services you interact with through the app.
              </p>
              <p className="mt-4">
                <strong className="text-white">We do not sell your personal information.</strong> We share data with
                third parties only as necessary to provide the Services as described above.
              </p>
            </section>

            <section id="p6" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">6. Local Storage</h2>
              <p className="mt-4">
                The application stores your preferences and settings locally on your device. This includes your selected
                options, custom configurations, and any saved credentials you choose to remember. This data never leaves
                your device and is not transmitted to us or any third party. You can clear this data at any time by
                resetting the app or uninstalling it.
              </p>
            </section>

            <section id="p7" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">7. Data Retention</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-zinc-200">Account information</strong> — Retained until you request account
                  deletion
                </li>
                <li>
                  <strong className="text-zinc-200">Usage data</strong> — Reset each billing period; aggregates retained
                  with your account
                </li>
                <li>
                  <strong className="text-zinc-200">Payment records</strong> — Retained by our payment provider per their
                  retention policy
                </li>
                <li>
                  <strong className="text-zinc-200">Screenshots and audio</strong> — Not retained; processed in memory and
                  discarded
                </li>
                <li>
                  <strong className="text-zinc-200">Local preferences</strong> — Retained on your device until you clear
                  them or uninstall the app
                </li>
                <li>
                  <strong className="text-zinc-200">API keys</strong> — Stored locally on your device until you remove
                  them
                </li>
              </ul>
            </section>

            <section id="p8" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">8. Your Rights</h2>
              <p className="mt-4">Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-zinc-200">Access:</strong> Request a copy of the personal data we hold about you
                </li>
                <li>
                  <strong className="text-zinc-200">Correction:</strong> Request correction of inaccurate personal data
                </li>
                <li>
                  <strong className="text-zinc-200">Deletion:</strong> Request deletion of your account and associated
                  data
                </li>
                <li>
                  <strong className="text-zinc-200">Portability:</strong> Request your data in a portable format
                </li>
                <li>
                  <strong className="text-zinc-200">Objection:</strong> Object to certain processing of your data
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:support@crackinginterview.org"
                  className="text-violet-400 underline-offset-2 hover:underline"
                >
                  support@crackinginterview.org
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section id="p9" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">9. California Privacy Rights (CCPA)</h2>
              <p className="mt-4">If you are a California resident, you have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Know what personal information we collect, use, and disclose</li>
                <li>Request deletion of your personal information</li>
                <li>
                  Opt out of the sale of your personal information —{" "}
                  <strong className="text-white">we do not sell your personal information</strong>
                </li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="mt-4">
                To submit a CCPA request, contact us at{" "}
                <a
                  href="mailto:support@crackinginterview.org"
                  className="text-violet-400 underline-offset-2 hover:underline"
                >
                  support@crackinginterview.org
                </a>
                .
              </p>
            </section>

            <section id="p10" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">10. Children&apos;s Privacy</h2>
              <p className="mt-4">
                The Services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children under 18. If we become aware that we have collected personal information from a
                child under 18, we will take steps to delete such information promptly.
              </p>
            </section>

            <section id="p11" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">11. International Data Transfers</h2>
              <p className="mt-4">
                Our Services are operated in the United States. If you access the Services from outside the United States,
                your information may be transferred to, stored, and processed in the United States, where data protection
                laws may differ from those in your jurisdiction. By using the Services, you consent to the transfer of
                your information to the United States.
              </p>
            </section>

            <section id="p12" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">12. Changes to This Privacy Policy</h2>
              <p className="mt-4">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
                &quot;Last Updated&quot; date. Your continued use of the Services after any changes constitutes acceptance
                of the updated Privacy Policy.
              </p>
            </section>

            <section id="p13" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">13. Contact Us</h2>
              <p className="mt-4">For questions about this Privacy Policy or to exercise your privacy rights, please contact:</p>
              <p className="mt-4">
                Email:{" "}
                <a
                  href="mailto:support@crackinginterview.org"
                  className="text-violet-400 underline-offset-2 hover:underline"
                >
                  support@crackinginterview.org
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://crackinginterview.org"
                  className="text-violet-400 underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  crackinginterview.org
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
