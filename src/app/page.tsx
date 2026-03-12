import { LandingDemo } from "./_components/landing-demo";
import { LandingFAQList } from "./_components/landing-faq-list";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CameraIcon,
  CheckIcon,
  GlobeIcon,
  GraduationCapIcon,
  MessageCircleIcon,
  PlaneIcon,
  ShieldIcon,
  SparklesIcon,
  ZapIcon,
} from "./_components/landing-icons";
import { LandingMobileNav } from "./_components/landing-mobile-nav";
import { LandingRevealObserver } from "./_components/landing-reveal-observer";
import { LandingWaitlistForm } from "./_components/landing-waitlist-form";

const features = [
  {
    icon: CameraIcon,
    title: "One-Shortcut Capture",
    description:
      "Press Cmd+Shift+S to capture anything on screen. No fiddling with apps, just capture and keep moving.",
    color: "text-[#c2a1ff]",
    bg: "bg-[#8e51ff]/12",
  },
  {
    icon: SparklesIcon,
    title: "AI Fact Extraction",
    description:
      "Our AI instantly reads your screenshot and pulls out dates, times, locations, names, and more.",
    color: "text-[#ffd089]",
    bg: "bg-[#fe9a00]/12",
  },
  {
    icon: MessageCircleIcon,
    title: "Telegram Q&A Recall",
    description:
      'Ask natural questions like "When is my flight?" and get quick, sourced answers in Telegram.',
    color: "text-[#8ad8ff]",
    bg: "bg-[#2aabee]/12",
  },
  {
    icon: ShieldIcon,
    title: "Private & Local-First",
    description:
      "Facts are extracted on-device first. Your data stays yours and is never sold or shared.",
    color: "text-[#82f2cb]",
    bg: "bg-[#00bc7d]/12",
  },
] as const;

const steps = [
  {
    id: "01",
    title: "Capture",
    description:
      "See something important? Hit the shortcut. SnapRecall grabs your screen instantly.",
  },
  {
    id: "02",
    title: "Extract",
    description:
      "AI scans the image and pulls out the key facts: dates, times, locations, codes, and names.",
  },
  {
    id: "03",
    title: "Recall",
    description:
      'Ask Telegram "What gate is my flight?" and get the answer in under 2 seconds.',
  },
] as const;

const personas = [
  {
    icon: GraduationCapIcon,
    label: "Students",
    example: '"When is my CS201 final exam?"',
    answer: "March 15, 2:00 PM - Room 304, Engineering Bldg",
    color: "text-[#9ec0ff]",
    bg: "bg-[#4f8fff]/12",
  },
  {
    icon: PlaneIcon,
    label: "Travelers",
    example: '"What gate is my Tokyo flight?"',
    answer: "JL 5072 - LAX Terminal B, Gate 42, 11:40 AM",
    color: "text-[#ffe39e]",
    bg: "bg-[#f6b93b]/12",
  },
  {
    icon: BriefcaseIcon,
    label: "Professionals",
    example: '"What is the standup meeting link?"',
    answer: "meet.google.com/abc-xyz - Daily at 9:00 AM",
    color: "text-[#d4c3ff]",
    bg: "bg-[#a684ff]/12",
  },
] as const;

const faqs = [
  {
    question: "Is SnapRecall free?",
    answer:
      "We will offer a generous free tier with up to 50 captures per month. Power users can upgrade for unlimited captures and faster AI processing.",
  },
  {
    question: "Do I need Telegram to use SnapRecall?",
    answer:
      "No. Telegram is optional. The desktop app works on its own for capturing, organizing, and browsing extracted facts.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Facts are extracted locally on your device first. Synced data is encrypted, and we never sell or share your information.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "We are launching on macOS first, with Windows support following shortly after. Linux is on the roadmap as well.",
  },
  {
    question: "What kind of content can it capture?",
    answer:
      "Anything on your screen: class schedules, flight confirmations, meeting links, addresses, receipts, appointments, and more.",
  },
] as const;

const socialProof = [
  { icon: GraduationCapIcon, label: "Students" },
  { icon: PlaneIcon, label: "Travelers" },
  { icon: BriefcaseIcon, label: "Professionals" },
  { icon: GlobeIcon, label: "Remote Teams" },
] as const;

const stats = [
  { value: "< 2s", label: "Avg recall time" },
  { value: "98%", label: "Extraction accuracy" },
  { value: "50+", label: "Fact types recognized" },
  { value: "0", label: "Manual tagging needed" },
] as const;

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
] as const;

const heroBenefits = ["Free tier available", "macOS & Windows", "No credit card"] as const;
const delays = ["delay-1", "delay-2", "delay-3", "delay-4"] as const;

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#7f22fe_0%,#615fff_100%)] text-white shadow-[0_8px_24px_-10px_rgba(127,34,254,0.95)] ${
          compact ? "size-6 rounded-md" : "size-8"
        }`}
      >
        <ZapIcon className={compact ? "size-3.5" : "size-4"} />
      </div>
      <span className={`${compact ? "text-sm text-white/55" : "text-base text-white"} tracking-[0.01em]`}>
        SnapRecall
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a12] text-white">
      <LandingRevealObserver />

      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb absolute left-1/2 top-[-220px] h-[560px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#2f6243_0%,#141225_42%,#0a0a12_74%)] opacity-80 sm:top-[-260px] sm:h-[720px] sm:w-[920px] lg:top-[-290px] lg:h-[840px] lg:w-[1080px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(10,10,18,0.45)_35%,#0a0a12_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(127,34,254,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,34,254,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-10 sm:opacity-20" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.04] bg-[rgba(10,10,18,0.8)] backdrop-blur-xl">
        <nav className="mx-auto flex h-[3.75rem] w-full max-w-[1152px] items-center justify-between px-4 sm:h-16 sm:px-6">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/45 transition duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#how-it-works"
              className="px-3 py-1.5 text-sm text-white/45 transition duration-300 hover:text-white"
            >
              See Demo
            </a>
            <a
              href="#waitlist"
              className="rounded-[10px] bg-[#7f22fe] px-4 py-2 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#9249ff]"
            >
              Join Waitlist
            </a>
          </div>

          <LandingMobileNav
            items={navItems}
            secondaryHref="#how-it-works"
            secondaryLabel="See Demo"
            primaryHref="#waitlist"
            primaryLabel="Join Waitlist"
          />
        </nav>
      </header>

      <main className="relative">
        <section className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
          <div className="mx-auto grid w-full max-w-[1152px] items-center gap-10 md:gap-14 lg:grid-cols-2">
            <div data-reveal className="reveal delay-1 text-center lg:text-left">
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#7f22fe]/20 bg-[#7f22fe]/8 px-3 py-1 lg:mx-0">
                <SparklesIcon className="size-3.5 text-[#a684ff]" />
                <span className="text-xs text-[#c2a1ff]">AI-powered personal recall</span>
              </div>

              <h1 className="hero-heading mx-auto max-w-[560px] text-white lg:mx-0">
                Capture your screen.
                <br />
                <span className="bg-[linear-gradient(90deg,#c2a1ff_0%,#8ea4ff_100%)] bg-clip-text text-transparent">
                  Recall anything.
                </span>
              </h1>

              <p className="lead-text mx-auto mt-5 max-w-[560px] text-[15px] sm:mt-6 sm:text-base md:text-lg lg:mx-0">
                One shortcut captures your screen. AI extracts key details instantly, then makes them easy to retrieve
                later without folders, tags, or manual cleanup.
              </p>

              <div className="mt-7">
                <LandingWaitlistForm successMessage="You are on the list. We will notify you when SnapRecall launches." />
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] text-white/26 sm:gap-x-6 sm:text-xs lg:justify-start">
                {heroBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-1.5">
                    <CheckIcon className="size-3 text-[#82f2cb]/80" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal className="reveal delay-2 relative mx-auto w-full max-w-[380px] sm:max-w-[430px] lg:mx-0">
              <LandingDemo />
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#7f22fe]/[0.04] blur-[90px] sm:h-[620px] sm:w-[820px] sm:blur-[120px]" />
        </section>

        <section className="border-y border-white/[0.04] py-10 sm:py-12">
          <div className="mx-auto w-full max-w-[1152px] px-4 text-center sm:px-6">
            <p className="kicker mb-6 text-white/18">Built for the way you work</p>
            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 md:gap-14">
              {socialProof.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    data-reveal
                    className={`reveal inline-flex items-center justify-center gap-2 text-white/18 ${delays[index % delays.length]}`}
                  >
                    <Icon className="size-4" />
                    <span className="text-xs">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="features" className="deferred-section section-block mx-auto w-full max-w-[1152px] px-4 sm:px-6">
          <div className="text-center">
            <p data-reveal className="kicker reveal delay-1 text-[#a684ff]">
              Features
            </p>
            <h2 data-reveal className="section-heading reveal delay-2 mt-3 text-white">
              Everything happens automatically
            </h2>
            <p data-reveal className="lead-text reveal delay-3 mx-auto mt-4 max-w-[580px]">
              No tagging, no organizing, no manual entry. Capture once and let AI handle the rest.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  data-reveal
                  className={`surface-card motion-card reveal ${delays[index % delays.length]} rounded-[20px] p-5 sm:rounded-[24px] sm:p-6 hover:-translate-y-1 hover:bg-white/[0.04]`}
                >
                  <div className={`mb-5 flex size-11 items-center justify-center rounded-[14px] ${feature.bg}`}>
                    <Icon className={`size-5 ${feature.color}`} />
                  </div>
                  <h3 className="text-base text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/34">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="how-it-works" className="deferred-section section-block bg-white/[0.01]">
          <div className="mx-auto w-full max-w-[1024px] px-4 sm:px-6">
            <div className="text-center">
              <p data-reveal className="kicker reveal delay-1 text-[#a684ff]">
                How It Works
              </p>
              <h2 data-reveal className="section-heading reveal delay-2 mt-3 text-white">
                Three steps. Zero effort.
              </h2>
              <p data-reveal className="lead-text reveal delay-3 mt-4">
                From screen to searchable knowledge in seconds.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.id}
                  data-reveal
                  className={`reveal ${delays[index % delays.length]} relative`}
                >
                  <div className="surface-card motion-card h-full rounded-[20px] p-5 sm:rounded-[24px] sm:p-6 hover:border-white/14">
                    <p className="text-3xl text-[#7f22fe]/35">{step.id}</p>
                    <h3 className="mt-4 text-lg text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/34">{step.description}</p>
                  </div>
                  {index < steps.length - 1 ? (
                    <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-white/12 md:block">
                      <ArrowRightIcon className="size-5" />
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="deferred-section section-block mx-auto w-full max-w-[1152px] px-4 sm:px-6">
          <div className="text-center">
            <p data-reveal className="kicker reveal delay-1 text-[#a684ff]">
              Use Cases
            </p>
            <h2 data-reveal className="section-heading reveal delay-2 mt-3 text-white">
              Built for your life, not just your work
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-3">
            {personas.map((persona, index) => {
              const Icon = persona.icon;

              return (
                <article
                  key={persona.label}
                  data-reveal
                  className={`surface-card motion-card reveal ${delays[index % delays.length]} rounded-[20px] p-5 sm:rounded-[24px] sm:p-6 hover:-translate-y-1`}
                >
                  <div className={`mb-4 flex size-10 items-center justify-center rounded-[14px] ${persona.bg}`}>
                    <Icon className={`size-5 ${persona.color}`} />
                  </div>
                  <h3 className="mb-4 text-sm text-white">{persona.label}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-end">
                      <div className="max-w-[92%] rounded-2xl rounded-br-sm bg-[#7f22fe]/85 px-3 py-2">
                        <p className="text-[11px] leading-5 text-white">{persona.example}</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-3 py-2">
                        <p className="text-[11px] leading-5 text-white/82">{persona.answer}</p>
                        <p className="mt-1 text-[9px] text-white/20">via SnapRecall Bot</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="deferred-section border-y border-white/[0.04] bg-white/[0.01] py-14 sm:py-16">
          <div className="mx-auto w-full max-w-[1024px] px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-6 text-center sm:gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} data-reveal className={`reveal ${delays[index % delays.length]}`}>
                  <p className="text-2xl text-white md:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-xs text-white/25">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="deferred-section section-block px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[720px]">
            <div className="text-center">
              <p data-reveal className="kicker reveal delay-1 text-[#a684ff]">
                FAQ
              </p>
              <h2 data-reveal className="section-heading reveal delay-2 mt-3 text-white">
                Frequently asked questions
              </h2>
            </div>

            <div data-reveal className="reveal delay-3 mt-8 border-t border-white/[0.06] sm:mt-10">
              <LandingFAQList items={faqs} />
            </div>
          </div>
        </section>

        <section id="waitlist" className="deferred-section section-block relative px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[680px] text-center">
            <div data-reveal className="reveal delay-2 relative">
              <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#7f22fe_0%,#615fff_100%)] text-white">
                <ZapIcon className="size-7" />
              </div>
              <h2 className="section-heading text-white">Ready to never forget again?</h2>
              <p className="lead-text mx-auto mt-4 max-w-[520px]">
                Join the waitlist and be first to try SnapRecall at launch. Early members get lifetime access to the
                Pro tier.
              </p>
              <div className="mt-7 sm:mt-8">
                <LandingWaitlistForm
                  compact
                  centered
                  successMessage="You are on the list. We will reach out soon."
                />
              </div>
              <p className="mt-4 text-xs text-white/18">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7f22fe]/[0.035] blur-[85px] sm:h-[420px] sm:w-[620px] sm:blur-[100px]" />
        </section>
      </main>

      <footer className="border-t border-white/[0.06] px-4 py-10 sm:px-6">
        <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <Logo compact />
          <p className="text-xs text-white/16">&copy; 2026 SnapRecall. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/22">
            <a className="transition duration-300 hover:text-white/45" href="#">
              Privacy
            </a>
            <a className="transition duration-300 hover:text-white/45" href="#">
              Terms
            </a>
            <a className="transition duration-300 hover:text-white/45" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
