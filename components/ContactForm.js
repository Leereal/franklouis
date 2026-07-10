"use client";

import { useState } from "react";
import { SITE } from "./siteData";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Website enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full border-0 bg-white/10 px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:bg-white/15 focus:ring-2 focus:ring-accent/60";

  return (
    <form onSubmit={submit} className="mt-9 space-y-6">
      <div>
        <label htmlFor="cf-name" className="mb-2 block text-sm font-semibold text-white">
          Name
        </label>
        <input id="cf-name" required value={form.name} onChange={set("name")} className={field} />
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-2 block text-sm font-semibold text-white">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          className={field}
        />
      </div>
      <div>
        <label htmlFor="cf-subject" className="mb-2 block text-sm font-semibold text-white">
          Subject
        </label>
        <input id="cf-subject" value={form.subject} onChange={set("subject")} className={field} />
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-2 block text-sm font-semibold text-white">
          Your Message
        </label>
        <textarea
          id="cf-message"
          rows={6}
          required
          value={form.message}
          onChange={set("message")}
          className={field}
        />
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <button type="submit" className="btn-solid">
          Submit
        </button>
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          or WhatsApp us directly
        </a>
      </div>
    </form>
  );
}
