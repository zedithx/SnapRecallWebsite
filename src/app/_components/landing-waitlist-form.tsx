"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon, MailIcon } from "./landing-icons";

type LandingWaitlistFormProps = {
  compact?: boolean;
  centered?: boolean;
  successMessage: string;
};

export function LandingWaitlistForm({
  compact = false,
  centered = false,
  successMessage,
}: LandingWaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || submitting) {
      return;
    }

    setSubmitting(true);

    timeoutRef.current = window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

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
        compact
          ? "mx-auto max-w-[460px] flex-col gap-3 sm:flex-row"
          : "mx-auto max-w-[440px] flex-col gap-3 sm:flex-row sm:gap-2 lg:mx-0"
      }`}
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="group flex h-14 flex-1 items-center gap-2 rounded-[18px] border border-white/10 bg-white/[0.05] px-4 text-[15px] text-white/65 transition duration-300 focus-within:border-[#a684ff]/55 focus-within:bg-white/[0.08] focus-within:shadow-[0_0_0_4px_rgba(127,34,254,0.12)] sm:h-12 sm:rounded-[14px] sm:text-sm sm:shadow-none">
        <MailIcon className="size-4 shrink-0 text-white/28 transition duration-300 group-focus-within:text-[#a684ff]" />
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect="off"
          inputMode="email"
          enterKeyHint="send"
          spellCheck={false}
          placeholder="Enter your email"
          className="min-w-0 w-full bg-transparent text-base text-white placeholder:text-white/28 focus:outline-none sm:text-sm"
          aria-label="Email"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="flex h-14 w-full shrink-0 items-center justify-center gap-2 rounded-[18px] bg-[linear-gradient(135deg,#7f22fe_0%,#6f58ff_100%)] px-5 text-[15px] font-medium text-white shadow-[0_14px_30px_-16px_rgba(127,34,254,0.85)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-16px_rgba(127,34,254,0.95)] disabled:cursor-not-allowed disabled:opacity-65 sm:h-12 sm:w-auto sm:rounded-[14px] sm:text-sm"
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
