import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/landing/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service - CrackingInterview",
  description:
    "CrackingInterview terms of service — user responsibilities, subscription terms, and usage policies.",
};

function Toc() {
  const items = [
    { id: "s1", label: "Description of Services" },
    { id: "s2", label: "User Responsibilities and Compliance" },
    { id: "s3", label: "Audio Recording and Screen Capture" },
    { id: "s4", label: "User Registration and Accounts" },
    { id: "s5", label: "Subscriptions and Payment" },
    { id: "s6", label: "Free Tier and User-Provided API Keys" },
    { id: "s7", label: "Intellectual Property" },
    { id: "s8", label: "AI-Generated Content Disclaimer" },
    { id: "s9", label: "Third-Party Services" },
    { id: "s10", label: "Prohibited Activities" },
    { id: "s11", label: "Disclaimer of Warranties" },
    { id: "s12", label: "Limitation of Liability" },
    { id: "s13", label: "Indemnification" },
    { id: "s14", label: "Termination" },
    { id: "s15", label: "Governing Law and Dispute Resolution" },
    { id: "s16", label: "Privacy Policy" },
    { id: "s17", label: "Modifications and Interruptions" },
    { id: "s18", label: "Severability" },
    { id: "s19", label: "Entire Agreement" },
    { id: "s20", label: "Contact Us" },
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

export default function TermsPage() {
  return (
    <PageShell>
      <article className="relative px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(139,92,246,0.1),transparent)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">Terms of Service</h1>
          <p className="mt-2 text-sm text-zinc-500">Last Updated: February 20, 2026</p>

          <div className="mt-8 space-y-5 text-zinc-300">
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you
              (&quot;you,&quot; &quot;your&quot;) and CrackingInterview (&quot;we,&quot; &quot;us,&quot;
              &quot;our&quot;) concerning your access to and use of the CrackingInterview application and related
              services (collectively, the &quot;Services&quot;).
            </p>
            <p>
              By downloading, installing, accessing, or using the Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms.{" "}
              <strong className="text-white">
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, YOU ARE PROHIBITED FROM USING THE SERVICES AND MUST
                DISCONTINUE USE IMMEDIATELY.
              </strong>
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Changes take effect immediately upon posting. Your
              continued use of the Services after any modification constitutes acceptance of the revised Terms. It is your
              responsibility to review these Terms periodically.
            </p>
            <p>
              The Services are intended for users who are at least 18 years of age. Persons under 18 are not permitted to
              use or register for the Services.
            </p>
          </div>

          <div className="mt-10">
            <Toc />
          </div>

          <div className="space-y-12 text-zinc-300">
            <section id="s1" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">1. Description of Services</h2>
              <p className="mt-4">
                CrackingInterview is a desktop application that provides AI-powered assistance for coding problems and
                technical skill development. The Services include features such as text extraction, screenshot capture,
                audio recording, and AI-powered analysis and solution generation.
              </p>
              <p className="mt-4">
                The Services are provided as a tool. How you choose to use this tool is entirely your decision and your
                responsibility. We make no representations about the suitability of the Services for any particular purpose
                or context.
              </p>
            </section>

            <section id="s2" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">2. User Responsibilities and Compliance</h2>
              <div className="glass-card mt-6 border-amber-500/35 bg-amber-950/15 p-5 hover:translate-y-0 hover:shadow-none sm:p-6">
                <h3 className="text-base font-semibold text-amber-200">USER RESPONSIBILITY NOTICE</h3>
                <p className="mt-2 text-sm sm:text-base">
                  <strong className="text-white">
                    You are solely and exclusively responsible for how you use this application and for ensuring that your
                    use complies with all applicable laws, regulations, contractual obligations, and policies — including,
                    but not limited to, the terms and conditions of any employer, interviewing company, educational
                    institution, testing platform, or other organization.
                  </strong>
                </p>
              </div>
              <p className="mt-6">By using the Services, you acknowledge and agree that:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-zinc-200">Compliance is your responsibility.</strong> You are solely responsible
                  for determining whether your use of the Services is permitted under the rules, policies, or terms of any
                  interview, assessment, examination, employer, educational institution, or other context in which you use
                  the Services.
                </li>
                <li>
                  <strong className="text-zinc-200">Authorization is your responsibility.</strong> If you use the Services
                  in connection with any interview, assessment, or evaluation, you represent that you have obtained any
                  required authorization or consent from all relevant parties.
                </li>
                <li>
                  <strong className="text-zinc-200">Legal compliance is your responsibility.</strong> You are solely
                  responsible for complying with all applicable federal, state, local, and international laws and
                  regulations, including laws related to fraud, misrepresentation, recording consent, computer access, and
                  intellectual property.
                </li>
                <li>
                  <strong className="text-zinc-200">Consequences are your responsibility.</strong> We are not responsible
                  for any consequences arising from your use of the Services, including but not limited to disqualification
                  from hiring processes, termination of employment, academic penalties, reputational harm, civil liability,
                  or criminal prosecution.
                </li>
                <li>
                  <strong className="text-zinc-200">Ethical use is your responsibility.</strong> We neither encourage nor
                  condone the use of the Services in any manner that would constitute dishonesty, cheating, fraud, or
                  violation of any third party&apos;s rules or policies.
                </li>
              </ul>
            </section>

            <section id="s3" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">3. Audio Recording and Screen Capture</h2>
              <p className="mt-4">
                The Services include audio recording and screen capture functionality. By using these features, you
                acknowledge and agree that:
              </p>
              <div className="glass-card mt-6 border-red-500/35 bg-red-950/20 p-5 hover:translate-y-0 hover:shadow-none sm:p-6">
                <h3 className="text-base font-semibold text-red-200">RECORDING CONSENT LAWS</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Many jurisdictions have laws governing the recording of conversations, including &quot;two-party
                  consent&quot; and &quot;one-party consent&quot; laws.{" "}
                  <strong className="text-white">
                    You are solely responsible for understanding and complying with all applicable recording consent laws
                    in your jurisdiction and the jurisdiction of any other party being recorded.
                  </strong>
                </p>
              </div>
              <ul className="mt-6 list-disc space-y-2 pl-5">
                <li>
                  You will obtain all required consents before recording any audio, including system audio from calls,
                  meetings, or conversations.
                </li>
                <li>
                  You will not use audio recording or screen capture features to record individuals without their knowledge
                  or consent where such recording is prohibited by law.
                </li>
                <li>
                  You understand that recording video or voice calls may require the consent of all participants depending
                  on applicable law.
                </li>
                <li>
                  You will not use screen capture to capture or transmit proprietary, confidential, or copyrighted
                  content belonging to third parties without authorization.
                </li>
                <li>
                  We have no ability to determine whether you have obtained proper consent and bear no liability for
                  recordings made in violation of applicable law.
                </li>
              </ul>
            </section>

            <section id="s4" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">4. User Registration and Accounts</h2>
              <p className="mt-4">You may be required to create an account to use certain features of the Services. You agree to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Provide accurate, current, and complete registration information</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Accept responsibility for all activity under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="mt-4">We reserve the right to terminate any account at our sole discretion without notice.</p>
            </section>

            <section id="s5" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">5. Subscriptions and Payment</h2>
              <h3 className="mt-6 text-lg font-semibold text-white">5.1 Billing and Renewal</h3>
              <p className="mt-3">
                Paid subscriptions are billed on a recurring monthly basis through our third-party payment processor. By
                subscribing, you authorize us to charge your selected payment method on a recurring basis until you cancel.
                Prices may change at any time; continued use after a price change constitutes acceptance.
              </p>
              <h3 className="mt-6 text-lg font-semibold text-white">5.2 No Refunds</h3>
              <div className="glass-card mt-4 border-amber-500/30 p-5 hover:translate-y-0 hover:shadow-none sm:p-6">
                <p className="text-sm sm:text-base">
                  <strong className="text-amber-100">
                    ALL SALES ARE FINAL. WE DO NOT OFFER REFUNDS FOR ANY SUBSCRIPTION PAYMENTS, INCLUDING PARTIAL MONTHS,
                    UNUSED SERVICES, OR DISSATISFACTION WITH THE SERVICES.
                  </strong>{" "}
                  You may cancel your subscription at any time. Cancellation takes effect at the end of the current
                  billing period; you will retain access until that period expires.
                </p>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">5.3 Payment Processing</h3>
              <p className="mt-3">
                All payments are processed by a third-party payment provider. We do not store your credit card information.
                Currency conversion, if applicable, is handled by the payment provider.
              </p>
            </section>

            <section id="s6" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">6. Free Tier and User-Provided API Keys</h2>
              <p className="mt-4">
                We offer a limited free tier that includes a small number of AI calls. After exhausting free-tier calls,
                users may provide their own third-party API keys to continue using the Services without a paid subscription.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>You are solely responsible for the security and management of any API keys you provide.</li>
                <li>You are responsible for any charges incurred by third-party providers under your API keys.</li>
                <li>Your API keys are stored locally on your device only.</li>
                <li>We are not responsible for any costs, data exposure, or issues arising from the use of your own API keys.</li>
              </ul>
            </section>

            <section id="s7" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">7. Intellectual Property</h2>
              <p className="mt-4">
                The Services, including all source code, functionality, software, designs, text, and graphics are owned by
                or licensed to us and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable,
                revocable license to use the Services for your personal use. You may not:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Copy, modify, or distribute the software or any part thereof</li>
                <li>Reverse engineer, decompile, or disassemble the software</li>
                <li>Sublicense, sell, resell, or transfer the Services to any third party</li>
                <li>Use the Services to build a competing product or service</li>
                <li>Remove any copyright or proprietary notices from the software</li>
              </ul>
            </section>

            <section id="s8" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">8. AI-Generated Content Disclaimer</h2>
              <p className="mt-4">
                The Services utilize third-party artificial intelligence models to generate content. You acknowledge and
                agree that:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white">
                    AI output is not guaranteed to be accurate, complete, correct, or suitable for any purpose.
                  </strong>{" "}
                  AI models may produce errors, incorrect solutions, or suboptimal content.
                </li>
                <li>You are solely responsible for reviewing, testing, and validating any AI-generated content before use.</li>
                <li>We make no representations or warranties regarding the quality, reliability, or fitness of AI-generated output.</li>
                <li>
                  AI-generated content may inadvertently resemble copyrighted material. You are responsible for ensuring your
                  use does not infringe third-party rights.
                </li>
                <li>We are not liable for any damages, losses, or consequences resulting from reliance on AI-generated content.</li>
              </ul>
            </section>

            <section id="s9" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">9. Third-Party Services</h2>
              <p className="mt-4">
                The Services integrate with various third-party providers for AI processing, payment, authentication, and
                other functionality. Your use of these third-party services is subject to their respective terms of service
                and privacy policies. We have no control over and assume no responsibility for the content, privacy
                practices, availability, or conduct of any third-party services. You acknowledge and agree that we shall not
                be liable for any damage or loss caused by your use of or reliance on any third-party services.
              </p>
            </section>

            <section id="s10" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">10. Prohibited Activities</h2>
              <p className="mt-4">You agree not to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Use the Services in violation of any applicable law or regulation</li>
                <li>Attempt to gain unauthorized access to the Services, other accounts, or computer systems</li>
                <li>Interfere with or disrupt the integrity or performance of the Services</li>
                <li>Use automated means to access the Services beyond intended functionality</li>
                <li>Circumvent any rate limits, usage quotas, or access restrictions</li>
                <li>Share, redistribute, or sublicense your account or subscription</li>
                <li>Use the Services to harass, abuse, or harm another person</li>
                <li>Upload or transmit viruses, malware, or other harmful code</li>
                <li>Impersonate any person or entity</li>
                <li>Use the Services for any purpose that is fraudulent, deceptive, or misleading</li>
              </ul>
            </section>

            <section id="s11" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">11. Disclaimer of Warranties</h2>
              <div className="glass-card mt-4 border-white/10 p-5 hover:translate-y-0 hover:shadow-none sm:p-6">
                <p className="text-sm sm:text-base">
                  <strong className="text-white">
                    THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES
                    OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
                    DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                    A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND QUIET ENJOYMENT.
                  </strong>
                </p>
                <p className="mt-4 text-sm sm:text-base">
                  <strong className="text-white">
                    WE MAKE NO WARRANTY THAT: (A) THE SERVICES WILL MEET YOUR REQUIREMENTS; (B) THE SERVICES WILL BE
                    UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (C) THE RESULTS OBTAINED FROM USE OF THE SERVICES WILL BE
                    ACCURATE OR RELIABLE; (D) THE QUALITY OF ANY AI-GENERATED CONTENT WILL MEET YOUR EXPECTATIONS; OR (E) ANY
                    ERRORS IN THE SERVICES WILL BE CORRECTED.
                  </strong>
                </p>
              </div>
            </section>

            <section id="s12" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">12. Limitation of Liability</h2>
              <div className="glass-card mt-4 border-red-500/25 bg-red-950/10 p-5 hover:translate-y-0 hover:shadow-none sm:p-6">
                <p className="text-sm sm:text-base">
                  <strong className="text-white">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE, OUR OFFICERS, DIRECTORS,
                    MEMBERS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                    EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, USE,
                    GOODWILL, REPUTATION, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO:
                  </strong>
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm sm:text-base">
                  <li>
                    <strong className="text-white">YOUR USE OF OR INABILITY TO USE THE SERVICES;</strong>
                  </li>
                  <li>
                    <strong className="text-white">ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OR RELATED TO THE SERVICES;</strong>
                  </li>
                  <li>
                    <strong className="text-white">AI-GENERATED CONTENT, INCLUDING ERRORS, OMISSIONS, OR INACCURACIES;</strong>
                  </li>
                  <li>
                    <strong className="text-white">UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA OR TRANSMISSIONS;</strong>
                  </li>
                  <li>
                    <strong className="text-white">
                      ANY CONSEQUENCES ARISING FROM YOUR USE OF THE SERVICES IN ANY INTERVIEW, ASSESSMENT, OR EVALUATION
                      CONTEXT;
                    </strong>
                  </li>
                  <li>
                    <strong className="text-white">
                      ANY CONSEQUENCES ARISING FROM YOUR RECORDING OF AUDIO OR CAPTURE OF SCREEN CONTENT;
                    </strong>
                  </li>
                  <li>
                    <strong className="text-white">ANY OTHER MATTER RELATING TO THE SERVICES.</strong>
                  </li>
                </ul>
                <p className="mt-4 text-sm sm:text-base">
                  <strong className="text-white">
                    IN NO EVENT SHALL OUR AGGREGATE LIABILITY EXCEED THE AMOUNTS PAID BY YOU TO US IN THE SIX (6) MONTHS
                    PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR FIFTY DOLLARS ($50.00), WHICHEVER IS GREATER.
                  </strong>
                </p>
                <p className="mt-4 text-sm text-zinc-400 sm:text-base">
                  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO
                  YOU, SOME OR ALL OF THE ABOVE LIMITATIONS MAY NOT APPLY, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                </p>
              </div>
            </section>

            <section id="s13" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">13. Indemnification</h2>
              <p className="mt-4">
                <strong className="text-white">
                  You agree to defend, indemnify, and hold harmless CrackingInterview, its officers, directors, members,
                  employees, agents, and affiliates
                </strong>{" "}
                from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses
                (including reasonable attorneys&apos; fees) arising from:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Your use or misuse of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any law, regulation, or third-party right</li>
                <li>Your use of audio recording or screen capture features in violation of applicable law</li>
                <li>Your use of the Services in connection with any interview, assessment, examination, or evaluation</li>
                <li>Any claim that your use of the Services caused harm to a third party</li>
                <li>Any fraudulent, deceptive, or illegal activity conducted through your use of the Services</li>
              </ul>
              <p className="mt-4">This indemnification obligation shall survive the termination of your account and these Terms.</p>
            </section>

            <section id="s14" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">14. Termination</h2>
              <p className="mt-4">
                We may terminate or suspend your account and access to the Services immediately, without prior notice or
                liability, for any reason, including but not limited to a breach of these Terms.
              </p>
              <p className="mt-4">
                Upon termination: (a) your right to use the Services ceases immediately; (b) we may delete your account and
                associated data; (c) you remain liable for all amounts owed; (d) all provisions which by their nature should
                survive termination shall survive, including ownership provisions, warranty disclaimers, indemnification,
                and limitations of liability.
              </p>
            </section>

            <section id="s15" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">15. Governing Law and Dispute Resolution</h2>
              <h3 className="mt-6 text-lg font-semibold text-white">15.1 Governing Law</h3>
              <p className="mt-3">
                These Terms shall be governed by and construed in accordance with the laws of the{" "}
                <strong className="text-white">United States of America</strong> and the state in which the Company is
                organized, without regard to conflict of law provisions.
              </p>
              <h3 className="mt-6 text-lg font-semibold text-white">15.2 Informal Resolution</h3>
              <p className="mt-3">
                Before filing any legal claim, you agree to first attempt to resolve the dispute informally by contacting us
                at{" "}
                <a
                  href="mailto:support@crackinginterview.org"
                  className="text-violet-400 underline-offset-2 hover:underline"
                >
                  support@crackinginterview.org
                </a>
                . We will attempt to resolve the dispute informally within 30 days. If the dispute is not resolved within 30
                days, either party may proceed with formal legal action.
              </p>
              <h3 className="mt-6 text-lg font-semibold text-white">15.3 Waiver of Class Actions</h3>
              <div className="glass-card mt-4 border-amber-500/30 p-5 hover:translate-y-0 hover:shadow-none sm:p-6">
                <p className="text-sm sm:text-base">
                  <strong className="text-amber-100">
                    YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT
                    IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
                  </strong>{" "}
                  You waive any right to participate in a class action lawsuit or class-wide arbitration against us.
                </p>
              </div>
            </section>

            <section id="s16" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">16. Privacy Policy</h2>
              <p className="mt-4">
                Your use of the Services is also governed by our{" "}
                <Link href="/privacy" className="text-violet-400 underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
            </section>

            <section id="s17" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">17. Modifications and Interruptions</h2>
              <p className="mt-4">
                We reserve the right to change, modify, suspend, or discontinue the Services (in whole or in part) at any
                time and for any reason without notice or liability. We are not obligated to maintain, support, or provide
                updates, fixes, or patches for the Services.
              </p>
            </section>

            <section id="s18" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">18. Severability</h2>
              <p className="mt-4">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, such provision shall be
                modified to the minimum extent necessary to make it enforceable, or if modification is not possible,
                severed. The remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section id="s19" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">19. Entire Agreement</h2>
              <p className="mt-4">
                These Terms, together with the Privacy Policy, constitute the entire agreement between you and
                CrackingInterview regarding the use of the Services. Our failure to enforce any right or provision shall not
                constitute a waiver of such right or provision.
              </p>
            </section>

            <section id="s20" className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">20. Contact Us</h2>
              <p className="mt-4">For questions about these Terms of Service, please contact:</p>
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
