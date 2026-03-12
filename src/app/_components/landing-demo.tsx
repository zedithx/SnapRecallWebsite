"use client";

import { useEffect, useState } from "react";
import { CheckIcon, SparklesIcon } from "./landing-icons";

const demoFacts = [
  { label: "Date", value: "March 15, 2026", tint: "text-[#9ec0ff]" },
  { label: "Time", value: "2:00 PM", tint: "text-[#ffd089]" },
  { label: "Room", value: "304, Eng. Bldg", tint: "text-[#82f2cb]" },
  { label: "Course", value: "CS201 Final", tint: "text-[#d4c3ff]" },
] as const;

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

export function LandingDemo() {
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
