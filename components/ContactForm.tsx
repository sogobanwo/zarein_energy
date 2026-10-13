"use client";

import { useState, type FormEvent } from "react";
import { contactTopics } from "@/lib/content";

const inputCls =
  "min-h-[52px] rounded-[14px] border border-mist bg-paper px-4 text-base text-ink outline-none transition focus:border-ink focus:bg-white md:px-[18px] md:text-[15px]";

/**
 * Enquiry form. The topic decides which inbox receives it.
 * Submitting currently opens the visitor's email app with the message pre-filled;
 * swap `handleSubmit` for an API route or form service (Formspree, Resend, etc.) when ready.
 */
export default function ContactForm() {
  const [topic, setTopic] = useState(0);
  const route = contactTopics[topic].email;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `${contactTopics[topic].label} enquiry from ${data.get("name") || "website"}`;
    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `Organisation: ${data.get("organisation") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${route}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[22px] rounded-[22px] bg-white px-5 py-7 md:gap-7 md:rounded-3xl md:p-12">
      <div className="flex flex-col gap-2.5 md:gap-3.5">
        <span className="eyebrow text-muted">Send an enquiry</span>
        <h2 className="m-0 font-wide text-[28px] font-extrabold uppercase leading-none tracking-[-0.02em] md:text-[clamp(30px,3.4vw,48px)]">
          Speak with our team.
        </h2>
      </div>

      <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
        <legend className="mb-2.5 p-0 text-[13px] font-semibold text-body">What is this about?</legend>
        <div className="flex flex-wrap gap-2">
          {contactTopics.map((t, i) => (
            <button
              key={t.label}
              type="button"
              aria-pressed={i === topic}
              onClick={() => setTopic(i)}
              className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors md:px-5 ${
                i === topic ? "border-ink bg-ink text-white" : "border-mist text-ink hover:border-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 md:gap-5">
        <Field id="name" label="Full name" autoComplete="name" required />
        <Field id="organisation" label="Organisation" autoComplete="organization" />
        <Field id="email" label="Work email" type="email" autoComplete="email" required />
        <Field id="phone" label="Phone (optional)" type="tel" autoComplete="tel" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[13px] font-semibold text-body">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={`${inputCls} resize-y py-3.5`} />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <span className="text-[13px] text-muted">
          Routed to: <strong className="text-ink">{route}</strong>
        </span>
        <button
          type="submit"
          className="flex min-h-[54px] items-center justify-between gap-3 rounded-full bg-ink pl-6 pr-1.5 text-[15px] font-bold text-white transition-colors hover:bg-navy md:min-h-[52px]"
        >
          Send enquiry
          <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink">
            →
          </span>
        </button>
      </div>
    </form>
  );
}

function Field({ id, label, type = "text", autoComplete, required }: { id: string; label: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[13px] font-semibold text-body">
        {label}
      </label>
      <input id={id} name={id} type={type} autoComplete={autoComplete} required={required} className={inputCls} />
    </div>
  );
}
