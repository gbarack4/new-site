"use client";

import {useMemo, useState} from "react";

const faqs = [
  {
    cat: "Getting started",
    q: "How do I start a free trial?",
    a: "Create an account at sign-up, then set up your school profile, instructors and availability. You get 14 days free with no credit card required.",
  },
  {
    cat: "Getting started",
    q: "How long does setup usually take?",
    a: "Most schools are ready in minutes. Add your school details, invite instructors, set working hours and locations, then share your booking link or website.",
  },
  {
    cat: "Bookings",
    q: "Can students book lessons online?",
    a: "Yes. Students can book and pay through your school website or booking page. Confirmations and reminders are sent automatically.",
  },
  {
    cat: "Bookings",
    q: "How do I avoid double bookings?",
    a: "DriveInstructor Pro uses shared calendars and availability rules. When a lesson is booked, that time becomes unavailable for other bookings.",
  },
  {
    cat: "Instructors",
    q: "What is Instructor Hub?",
    a: "Instructor Hub lets independent instructors join one or more schools, manage availability and locations, and keep every booking in one global calendar.",
  },
  {
    cat: "Instructors",
    q: "Can instructors work for multiple schools?",
    a: "Yes. Instructors can join multiple schools from one account. Bookings from every school appear in their global calendar to help prevent conflicts.",
  },
  {
    cat: "Payments",
    q: "How do payments and lesson credits work?",
    a: "You can take card payments, sell packages and track student credit balances automatically after each lesson. Instructor payouts can run through Stripe Connect.",
  },
  {
    cat: "Payments",
    q: "Do I need a credit card for the trial?",
    a: "No. You can start a 14-day free trial without entering a credit card.",
  },
  {
    cat: "Accounts",
    q: "Can students see their lesson balance?",
    a: "Yes. Student accounts show upcoming lessons, package credit, progress and booking history in one place.",
  },
  {
    cat: "Accounts",
    q: "How do I reset a password?",
    a: "Use Sign in, then choose the forgot password option on the admin login page. A reset link will be sent to the email on the account.",
  },
];

const cats = ["All", ...Array.from(new Set(faqs.map((f) => f.cat)))];

export default function HelpCentreClient() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const catOk = cat === "All" || f.cat === cat;
      if (!catOk) return false;
      if (!q) return true;
      return f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q) || f.cat.toLowerCase().includes(q);
    });
  }, [query, cat]);

  return (
    <div className="helpClient">
      <div className="helpSearch">
        <label htmlFor="help-q" className="srOnly">
          Search help articles
        </label>
        <input
          id="help-q"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(0);
          }}
          placeholder="Search bookings, payments, instructors…"
        />
      </div>

      <div className="helpCats" role="tablist" aria-label="Help categories">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={cat === c}
            className={cat === c ? "isActive" : undefined}
            onClick={() => {
              setCat(c);
              setOpen(0);
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="helpFaq">
        {filtered.length === 0 ? (
          <p className="helpEmpty">
            No results for “{query}”. Try another search or{" "}
            <a href="/contact">contact support</a>.
          </p>
        ) : (
          filtered.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`helpItem${isOpen ? " isOpen" : ""}`}>
                <button
                  type="button"
                  className="helpQ"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>
                    <small>{f.cat}</small>
                    {f.q}
                  </span>
                  <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                </button>
                <div className="helpA" role="region">
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
