"use client";

import {useEffect, useState} from "react";

const quotes = [
  {
    text: "DriveInstructor Pro gives school owners the clarity to focus on what matters: helping students become safe, confident drivers.",
    photo: "/avatars/avatar-gb.png",
    name: "George's School",
    role: "School owner, Australia",
  },
  {
    text: "Our instructors finally share one calendar. Bookings, payments and reminders just work, and I spend far less time chasing admin.",
    photo: "/avatars/avatar-sm.png",
    name: "Coastal Drive School",
    role: "Owner, NSW",
  },
  {
    text: "Students love booking online. Packages and credit balances stay accurate, so we look professional without extra paperwork.",
    photo: "/avatars/avatar-ak.png",
    name: "Apex Driving Academy",
    role: "Director, Victoria",
  },
  {
    text: "Setup was quick and the support feels local. It is the first system that actually matches how an Australian driving school runs.",
    photo: "/avatars/avatar-jl.png",
    name: "Lane & Learn",
    role: "School owner, QLD",
  },
];

export default function AboutQuotes() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 4800);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="aboutQuotes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="School owner testimonials"
    >
      <div
        className="aboutQuotesTrack"
        style={{transform: `translateX(-${index * 100}%)`}}
      >
        {quotes.map((q) => (
          <figure className="aboutQuote" key={q.name}>
            <blockquote>{q.text}</blockquote>
            <figcaption>
              <img className="aboutAvatar" src={q.photo} alt="" width={42} height={42}/>
              <span>
                <b>{q.name}</b>
                <small>{q.role}</small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="aboutQuoteDots" role="tablist" aria-label="Choose testimonial">
        {quotes.map((q, i) => (
          <button
            key={q.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial ${i + 1}`}
            className={i === index ? "isActive" : undefined}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
