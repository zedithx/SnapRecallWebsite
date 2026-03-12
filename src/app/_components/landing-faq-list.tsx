"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./landing-icons";

type FAQItem = {
  question: string;
  answer: string;
};

type LandingFAQListProps = {
  items: readonly FAQItem[];
};

export function LandingFAQList({ items }: LandingFAQListProps) {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <>
      {items.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <article key={faq.question} className="border-b border-white/[0.06] last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="pr-4 text-sm text-white transition duration-300">{faq.question}</span>
              <ChevronDownIcon
                className={`size-4 shrink-0 text-white/25 transition duration-300 ${
                  isOpen ? "rotate-180 text-[#a684ff]" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-emphasized)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-7 text-white/40">{faq.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}
