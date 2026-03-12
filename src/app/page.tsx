"use client";

import { useEffect, useState, type FormEvent, type SVGProps } from "react";

function SvgIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M4.5 8.5h3l1.4-2h6.2l1.4 2h3A1.5 1.5 0 0 1 21 10v7.5A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5V10A1.5 1.5 0 0 1 4.5 8.5Z" />
      <circle cx="12" cy="13.5" r="3.2" />
    </SvgIcon>
  );
}

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z" />
      <path d="m19 13 .7 2 .3.7 2 .7-2 .7-.3.7-.7 2-.7-2-.7-.3-2-.7 2-.7.7-.7.7-2Z" />
      <path d="m5 14 .9 2.5L8.5 17l-2.6.5L5 20l-.9-2.5L1.5 17l2.6-.5L5 14Z" />
    </SvgIcon>
  );
}

function MessageCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M6 18.5 3.5 20l.7-3.4A8 8 0 1 1 20 12.5a8 8 0 0 1-8 8c-1.3 0-2.5-.3-3.6-.8L6 18.5Z" />
    </SvgIcon>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M12 3.5 5.5 6v5.4c0 4 2.7 7.6 6.5 9.1 3.8-1.5 6.5-5.1 6.5-9.1V6L12 3.5Z" />
      <path d="m9.5 12 1.6 1.6 3.6-3.6" />
    </SvgIcon>
  );
}

function GraduationCapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m3 10 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11.7V15c0 1.4 2.3 2.8 5 2.8s5-1.4 5-2.8v-3.3" />
      <path d="M21 10v5" />
    </SvgIcon>
  );
}

function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M21 3 10 14" />
      <path d="m21 3-6.5 18-3.3-7.7L3.5 10 21 3Z" />
    </SvgIcon>
  );
}

function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M4 12h16" />
    </SvgIcon>
  );
}

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4" />
      <path d="M12 3.5c2.4 2.4 3.8 5.3 3.8 8.5s-1.4 6.1-3.8 8.5c-2.4-2.4-3.8-5.3-3.8-8.5s1.4-6.1 3.8-8.5Z" />
    </SvgIcon>
  );
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </SvgIcon>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m5 12.5 4.2 4.2L19 7" />
    </SvgIcon>
  );
}

function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m6 9 6 6 6-6" />
    </SvgIcon>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </SvgIcon>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </SvgIcon>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </SvgIcon>
  );
}

function ZapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M13 2 5.5 13h5l-1 9L18.5 11h-5L13 2Z" />
    </SvgIcon>
  );
}

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
const demoFacts = [
  { label: "Date", value: "March 15, 2026", tint: "text-[#9ec0ff]" },
  { label: "Time", value: "2:00 PM", tint: "text-[#ffd089]" },
  { label: "Room", value: "304, Eng. Bldg", tint: "text-[#82f2cb]" },
  { label: "Course", value: "CS201 Final", tint: "text-[#d4c3ff]" },
] as const;

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

type WaitlistFormProps = {
  email: string;
  submitted: boolean;
  submitting: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  compact?: boolean;
  centered?: boolean;
  successMessage: string;
};

function WaitlistForm({
  email,
  submitted,
  submitting,
  onEmailChange,
  onSubmit,
  compact = false,
  centered = false,
  successMessage,
}: WaitlistFormProps) {
  if (submitted) {
    return (
      <div
        className={`rounded-2xl border border-[#00bc7d]/20 bg-[#00bc7d]/10 px-5 py-4 ${
          centered ? "mx-auto max-w-[430px] text-center" : "max-w-[430px]"
        }`}
      >
        <div
          className={`flex items-center gap-2 text-sm text-[#82f2cb] ${
            centered ? "justify-center" : ""
          }`}
        >
          <CheckIcon className="size-4" />
          <span>{successMessage}</span>
        </div>
      </div>
    );
  }

  return (
    <form
      className={`flex w-full ${
        compact ? "mx-auto max-w-[460px] flex-col gap-3 sm:flex-row" : "max-w-[440px] flex-col gap-2 sm:flex-row"
      }`}
      action="#"
      method="post"
      onSubmit={onSubmit}
    >
      <label className="group flex h-12 flex-1 items-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.05] px-4 text-sm text-white/65 transition duration-300 focus-within:border-[#a684ff]/50 focus-within:bg-white/[0.08]">
        <MailIcon className="size-4 text-white/28 transition duration-300 group-focus-within:text-[#a684ff]" />
        <input
          type="email"
          required
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          placeholder="Enter your email"
          className="w-full bg-transparent text-sm text-white placeholder:text-white/28 focus:outline-none"
          aria-label="Email"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(135deg,#7f22fe_0%,#6f58ff_100%)] px-5 text-sm font-medium text-white shadow-[0_14px_30px_-16px_rgba(127,34,254,0.85)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-16px_rgba(127,34,254,0.95)] disabled:cursor-not-allowed disabled:opacity-65"
      >
        {submitting ? (
          <span className="size-4 animate-spin rounded-full border border-white/25 border-t-white" />
        ) : (
          <>
            Join Waitlist
            <ArrowRightIcon className="size-3.5" />
          </>
        )}
      </button>
    </form>
  );
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

function DemoExtraction() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [step, setStep] = useState(0);
  const visibleStep = prefersReducedMotion ? 3 : step;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let cancelled = false;
    let timers: number[] = [];

    const startCycle = () => {
      setStep(0);
      timers = [
        window.setTimeout(() => {
          if (!cancelled) {
            setStep(1);
          }
        }, 900),
        window.setTimeout(() => {
          if (!cancelled) {
            setStep(2);
          }
        }, 2200),
        window.setTimeout(() => {
          if (!cancelled) {
            setStep(3);
          }
        }, 3800),
        window.setTimeout(() => {
          if (!cancelled) {
            startCycle();
          }
        }, 6200),
      ];
    };

    startCycle();

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 rounded-[34px] bg-[#7f22fe]/12 blur-3xl" />
      <div className="surface-card demo-frame relative overflow-hidden rounded-[24px] bg-[#0f0f14] shadow-[0_26px_72px_-20px_rgba(0,0,0,0.86)]">
        <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[11px] tracking-wide text-white/25">SnapRecall</span>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <div
            className={`relative overflow-hidden rounded-[14px] border bg-[#1a1a24] p-4 transition duration-500 ${
              visibleStep >= 1 ? "border-[#8e51ff]/45" : "border-white/6"
            }`}
          >
            <div className="space-y-1.5">
              <p className="text-[10px] text-white/40">University Portal</p>
              <p className="text-sm text-white">CS201 - Data Structures Final Exam</p>
              <p className="text-xs text-white/50">Date: March 15, 2026 | Time: 2:00 PM</p>
              <p className="text-xs text-white/50">Location: Room 304, Engineering Building</p>
            </div>
            {visibleStep >= 1 ? <div aria-hidden className="demo-scan absolute inset-0" /> : null}
          </div>

          <div
            className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 ease-[var(--ease-emphasized)] ${
              visibleStep >= 2 ? "mt-1 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-2">
                {demoFacts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className={`flex items-center gap-3 rounded-[11px] bg-white/[0.035] px-3 py-2.5 text-sm transition duration-500 ease-[var(--ease-emphasized)] ${
                      visibleStep >= 2 ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <span className="w-11 text-[10px] uppercase tracking-[0.12em] text-white/28">
                      {fact.label}
                    </span>
                    <span className={fact.tint}>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-h-5 items-center justify-center gap-2 text-xs">
            {visibleStep === 0 ? <span className="text-white/22">Press Cmd+Shift+S to capture</span> : null}
            {visibleStep === 1 ? (
              <>
                <SparklesIcon className="size-3.5 animate-spin text-[#a684ff]" />
                <span className="text-[#a684ff]">Extracting facts...</span>
              </>
            ) : null}
            {visibleStep === 2 ? (
              <>
                <CheckIcon className="size-3.5 text-[#82f2cb]" />
                <span className="text-[#82f2cb]">4 facts extracted</span>
              </>
            ) : null}
            {visibleStep === 3 ? (
              <>
                <CheckIcon className="size-3.5 text-[#82f2cb]" />
                <span className="text-[#82f2cb]">Saved and synced</span>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="border-b border-white/[0.06] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="pr-4 text-sm text-white transition duration-300 group-hover:text-[#d4c3ff]">
          {question}
        </span>
        <ChevronDownIcon
          className={`size-4 shrink-0 text-white/25 transition duration-300 ${open ? "rotate-180 text-[#a684ff]" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-emphasized)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-7 text-white/40">{answer}</p>
        </div>
      </div>
    </article>
  );
}

function useRevealAnimations() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useRevealAnimations();

  const handleWaitlist = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || submitting) {
      return;
    }

    setSubmitting(true);

    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a12] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb absolute left-1/2 top-[-290px] h-[840px] w-[1080px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#3b1f79_0%,#141225_44%,#0a0a12_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(10,10,18,0.45)_35%,#0a0a12_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(127,34,254,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,34,254,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.04] bg-[rgba(10,10,18,0.8)] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-[1152px] items-center justify-between px-4 sm:px-6">
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
            <button type="button" className="px-3 py-1.5 text-sm text-white/45 transition duration-300 hover:text-white">
              Open App
            </button>
            <a
              href="#waitlist"
              className="rounded-[10px] bg-[#7f22fe] px-4 py-2 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#9249ff]"
            >
              Join Waitlist
            </a>
          </div>

          <button
            type="button"
            className="text-white/45 transition duration-300 hover:text-white md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </nav>

        <div
          className={`grid overflow-hidden border-t border-white/[0.06] bg-[#0a0a12] transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-emphasized)] md:hidden ${
            mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mx-auto flex w-full max-w-[1152px] flex-col gap-3 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm text-white/55 transition duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-3">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-left text-sm text-white/55 transition duration-300 hover:text-white"
                >
                  Open App
                </button>
                <a
                  href="#waitlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-[12px] bg-[#7f22fe] px-4 py-2.5 text-center text-sm text-white transition duration-300 hover:bg-[#9249ff]"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="relative px-4 pb-20 pt-32 sm:px-6 md:pb-32 md:pt-40">
          <div className="mx-auto grid w-full max-w-[1152px] items-center gap-12 md:gap-16 lg:grid-cols-2">
            <div data-reveal className="reveal delay-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7f22fe]/25 bg-[#7f22fe]/10 px-3 py-1">
                <SparklesIcon className="size-3.5 text-[#a684ff]" />
                <span className="text-xs text-[#c2a1ff]">AI-powered screen memory</span>
              </div>

              <h1 className="hero-heading max-w-[560px] text-white">
                Capture your screen.
                <br />
                <span className="bg-[linear-gradient(90deg,#c2a1ff_0%,#8ea4ff_100%)] bg-clip-text text-transparent">
                  Recall anything.
                </span>
              </h1>

              <p className="lead-text mt-5 max-w-[560px] text-base sm:mt-6 md:text-lg">
                One shortcut captures your screen. AI extracts the key facts. Ask later and get the answer instantly,
                from anywhere.
              </p>

              <div className="mt-7">
                <WaitlistForm
                  email={email}
                  submitted={submitted}
                  submitting={submitting}
                  onEmailChange={setEmail}
                  onSubmit={handleWaitlist}
                  successMessage="You are on the list. We will notify you when SnapRecall launches."
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/22 sm:gap-x-6">
                {heroBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-1.5">
                    <CheckIcon className="size-3 text-[#82f2cb]/80" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal className="reveal delay-2 relative mx-auto w-full max-w-[430px] lg:mx-0">
              <DemoExtraction />
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[820px] -translate-x-1/2 rounded-full bg-[#7f22fe]/[0.05] blur-[120px]" />
        </section>

        <section className="border-y border-white/[0.04] py-12">
          <div className="mx-auto w-full max-w-[1152px] px-4 text-center sm:px-6">
            <p className="kicker mb-6 text-white/18">Built for the way you work</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {socialProof.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    data-reveal
                    className={`reveal inline-flex items-center gap-2 text-white/18 ${delays[index % delays.length]}`}
                  >
                    <Icon className="size-4" />
                    <span className="text-xs">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="features" className="section-block mx-auto w-full max-w-[1152px] px-4 sm:px-6">
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

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  data-reveal
                  className={`surface-card motion-card reveal ${delays[index % delays.length]} rounded-[24px] p-6 hover:-translate-y-1.5 hover:bg-white/[0.04]`}
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

        <section id="how-it-works" className="section-block bg-white/[0.01]">
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

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.id}
                  data-reveal
                  className={`reveal ${delays[index % delays.length]} relative`}
                >
                  <div className="surface-card motion-card h-full rounded-[24px] p-6 hover:border-white/14">
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

        <section id="use-cases" className="section-block mx-auto w-full max-w-[1152px] px-4 sm:px-6">
          <div className="text-center">
            <p data-reveal className="kicker reveal delay-1 text-[#a684ff]">
              Use Cases
            </p>
            <h2 data-reveal className="section-heading reveal delay-2 mt-3 text-white">
              Built for your life, not just your work
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {personas.map((persona, index) => {
              const Icon = persona.icon;

              return (
                <article
                  key={persona.label}
                  data-reveal
                  className={`surface-card motion-card reveal ${delays[index % delays.length]} rounded-[24px] p-6 hover:-translate-y-1`}
                >
                  <div className={`mb-4 flex size-10 items-center justify-center rounded-[14px] ${persona.bg}`}>
                    <Icon className={`size-5 ${persona.color}`} />
                  </div>
                  <h3 className="mb-4 text-sm text-white">{persona.label}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-end">
                      <div className="max-w-[92%] rounded-2xl rounded-br-sm bg-[#7f22fe]/85 px-3 py-2">
                        <p className="text-[11px] text-white">{persona.example}</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-3 py-2">
                        <p className="text-[11px] text-white/82">{persona.answer}</p>
                        <p className="mt-1 text-[9px] text-white/20">via SnapRecall Bot</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/[0.04] bg-white/[0.01] py-16">
          <div className="mx-auto w-full max-w-[1024px] px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} data-reveal className={`reveal ${delays[index % delays.length]}`}>
                  <p className="text-2xl text-white md:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-xs text-white/25">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-block px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[720px]">
            <div className="text-center">
              <p data-reveal className="kicker reveal delay-1 text-[#a684ff]">
                FAQ
              </p>
              <h2 data-reveal className="section-heading reveal delay-2 mt-3 text-white">
                Frequently asked questions
              </h2>
            </div>

            <div data-reveal className="reveal delay-3 mt-10 border-t border-white/[0.06]">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="section-block relative px-4 sm:px-6">
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
              <div className="mt-8">
                <WaitlistForm
                  email={email}
                  submitted={submitted}
                  submitting={submitting}
                  onEmailChange={setEmail}
                  onSubmit={handleWaitlist}
                  compact
                  centered
                  successMessage="You are on the list. We will reach out soon."
                />
              </div>
              <p className="mt-4 text-xs text-white/18">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7f22fe]/[0.04] blur-[100px]" />
        </section>
      </main>

      <footer className="border-t border-white/[0.06] px-4 py-10 sm:px-6">
        <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center justify-between gap-4 md:flex-row">
          <Logo compact />
          <p className="text-xs text-white/16">&copy; 2026 SnapRecall. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/22">
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
