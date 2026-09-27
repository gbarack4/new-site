import type {Metadata} from "next";
import HelpCentreClient from "./HelpCentreClient";

export const metadata: Metadata = {
  title: "Help Centre | DriveInstructor Pro",
  description:
    "Find answers about bookings, instructors, payments, student accounts and Instructor Hub for DriveInstructor Pro.",
};

const topics = [
  ["Getting started", "Trial setup, school profile and first bookings", "/#how"],
  ["Online bookings", "Student booking flow, confirmations and reminders", "/online-bookings"],
  ["Instructor Hub", "Multi-school calendars, availability and locations", "/instructor-hub"],
  ["Payments & credits", "Card payments, packages and instructor payouts", "/payments-credits"],
];

export default function HelpCentrePage() {
  return (
    <main className="helpPage">
      <header className="header">
        <a className="brand" href="/">
          <img src="/logo.png" alt="" width={35} height={35} />
          DriveInstructor<span>Pro</span>
        </a>
        <nav>
          <a href="/">Home</a>
          <a href="/#features">Features</a>
          <a href="/#how">How it works</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
        </nav>
        <div className="actions">
          <a className="button small" href="https://admin.driveinstructor.pro/sign-in">
            Sign in
          </a>
        </div>
      </header>

      <section className="helpHero" id="top">
        <p className="helpBrand">Help centre</p>
        <h1>
          Answers for running your
          <em> driving school.</em>
        </h1>
        <p>
          Browse common questions about setup, bookings, instructors, payments and student
          accounts. Still stuck? Contact our Australian support team.
        </p>
      </section>

      <section className="helpTopics">
        {topics.map(([title, copy, href]) => (
          <a key={title} className="helpTopic" href={href}>
            <b>{title}</b>
            <span>{copy}</span>
          </a>
        ))}
      </section>

      <section className="helpMain">
        <div className="helpMainHead">
          <h2>Frequently asked questions</h2>
          <p>Search or filter by topic to find what you need quickly.</p>
        </div>
        <HelpCentreClient />
      </section>

      <section className="helpCta">
        <div>
          <h2>Need more help?</h2>
          <p>Our team can help with onboarding, billing and product questions.</p>
        </div>
        <div className="helpCtaActions">
          <a className="button" href="/contact">
            Contact support →
          </a>
          <a className="helpGhost" href="mailto:support@driveinstructor.pro">
            support@driveinstructor.pro
          </a>
        </div>
      </section>

      <footer>
        <div className="footgrid">
          <div>
            <a className="brand" href="/">
              <img src="/logo.png" alt="" width={35} height={35} />
              DriveInstructor<span>Pro</span>
            </a>
            <p>
              Simple, reliable software that helps driving schools run better and grow with
              confidence.
            </p>
          </div>
          <div>
            <b>Product</b>
            <a href="/#features">Features</a>
            <a href="/instructor-hub">Instructor Hub</a>
            <a href="/pricing">Pricing</a>
          </div>
          <div>
            <b>Company</b>
            <a href="/about">About us</a>
            <a href="/contact">Contact</a>
            <a href="/help">Help centre</a>
          </div>
        </div>
        <div className="copyright">
          <span>© 2026 DriveInstructor Pro. All rights reserved.</span>
          <nav className="legal">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/security">Security</a>
          </nav>        </div>
      </footer>
    </main>
  );
}
