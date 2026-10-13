"use client";

import { useState, type FormEvent } from "react";

/** Newsletter signup. Connect `onSubmit` to your email provider (Mailchimp, Brevo, etc.). */
export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2.5 md:flex-[1_1_440px]">
      <label htmlFor="news-email" className="text-[13px] text-white/70">
        Work email
      </label>
      <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:gap-2">
        <input
          id="news-email"
          type="email"
          required
          placeholder="you@company.com"
          className="min-h-[52px] rounded-full border border-white/30 bg-transparent px-5 text-base text-white placeholder:text-white/45 outline-none focus:border-white md:flex-[1_1_240px] md:text-[15px]"
        />
        <button type="submit" className="min-h-[52px] rounded-full bg-white px-7 text-[15px] font-bold text-ink">
          {done ? "Subscribed ✓" : "Subscribe"}
        </button>
      </div>
      <p aria-live="polite" className="m-0 min-h-5 text-[13px] text-white/70">
        {done ? "Thanks — you’re on the list." : ""}
      </p>
    </form>
  );
}
