import type {Metadata} from "next";
import FooterSocial from "../FooterSocial";

export const metadata: Metadata = {
  title: "System Status | DriveInstructor Pro",
  description:
    "Live operational status for DriveInstructor Pro — school admin, Instructor Hub, bookings, payments and websites.",
};

const services = [
  {
    name: "School admin",
    detail: "Sign-in, students, schedules and school settings",
  },
  {
    name: "Instructor Hub",
    detail: "Instructor calendars, availability and multi-school access",
  },
  {
    name: "Online bookings & websites",
    detail: "Public school sites and student booking flows",
  },
  {
    name: "Payments & Stripe Connect",
    detail: "Student card payments and instructor payouts",
  },
  {
    name: "API & notifications",
    detail: "Confirmations, reminders and platform integrations",
  },
];

export default function StatusPage() {
  return (
    <main className="statusPage">
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

      <section className="statusHero" id="top">
        <p className="statusBrand">System status</p>
        <h1>
          All systems
          <em> operational.</em>
        </h1>
        <p>
          Current availability across DriveInstructor Pro. If something looks wrong on your
          side, contact support and we&apos;ll help straight away.
        </p>
        <p className="statusBanner" role="status">
          <i aria-hidden="true" />
          <span>No incidents reported</span>
        </p>
      </section>

      <section className="statusList" aria-label="Service status">
        <div className="statusListHead">
          <h2>Services</h2>
          <p>Updated continuously for the main platform surfaces.</p>
        </div>
        <ul>
          {services.map((s) => (
            <li key={s.name}>
              <div>
                <b>{s.name}</b>
                <span>{s.detail}</span>
              </div>
              <em>
                <i aria-hidden="true" />
                Operational
              </em>
            </li>
          ))}
        </ul>
      </section>

      <section className="statusHelp">
        <div>
          <h2>Seeing an issue?</h2>
          <p>
            Tell us what you were doing and which school or instructor account is affected.
            We&apos;ll investigate quickly.
          </p>
        </div>
        <div className="statusHelpActions">
          <a className="button" href="/contact">
            Contact support →
          </a>
          <a className="statusGhost" href="mailto:support@driveinstructor.pro">
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
            <a href="/status">System status</a>
          </div>
        </div>
        <div className="copyright">
          <span>© 2026 DriveInstructor Pro. All rights reserved.</span>
          <nav className="legal">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/security">Security</a>
          </nav>
          <FooterSocial />
        </div>
      </footer>
    </main>
  );
}
