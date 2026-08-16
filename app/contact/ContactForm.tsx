"use client";

import {FormEvent, useState} from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    // Front-end confirmation only until a backend endpoint is wired.
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 600);
  };

  if (sent) {
    return (
      <div className="contactSuccess" role="status">
        <b>Message sent</b>
        <p>Thanks for getting in touch. Our Australian support team will reply as soon as possible.</p>
        <button type="button" className="contactAgain" onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contactForm" onSubmit={onSubmit}>
      <label>
        <span>Full name</span>
        <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@school.com.au" />
      </label>
      <label>
        <span>School name</span>
        <input name="school" type="text" autoComplete="organization" placeholder="Your driving school" />
      </label>
      <label>
        <span>How can we help?</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your school, a question, or what you need help with"
        />
      </label>
      <button className="button" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send message →"}
      </button>
      <p className="contactFormNote">We usually reply within one business day.</p>
    </form>
  );
}
