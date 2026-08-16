import type {Metadata} from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | DriveInstructor Pro",
  description:
    "Contact DriveInstructor Pro for sales, onboarding and support. Australian-owned driving school software with real help when you need it.",
};

const channels = [
  {
    label: "Support",
    value: "support@driveinstructor.pro",
    href: "mailto:support@driveinstructor.pro",
    note: "Product help, billing and account questions",
  },
  {
    label: "Sales",
    value: "demo@driveinstructor.pro",
    href: "mailto:demo@driveinstructor.pro",
    note: "Demos, pricing and onboarding for new schools",
  },
];

export default function ContactPage() {
  return (
    <main className="contactPage">
      <header className="header">
        <a className="brand" href="/">
          <img src="/logo.png" alt="" width={35} height={35} />
          DriveInstructor<span>Pro</span>
        </a>
        <nav>
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

      <section className="contactHero" id="top">
        <p className="contactBrand">Contact</p>
        <h1>
          We’re here to help your
          <em> driving school grow.</em>
        </h1>
        <p>
          Questions about setup, pricing, Instructor Hub or migrating from spreadsheets?
          Reach the Australian team behind DriveInstructor Pro.
        </p>
      </section>

      <section className="contactBody">
        <div className="contactPanel">
          <h2>Send a message</h2>
          <p>Tell us a little about your school and we’ll get back to you.</p>
          <ContactForm />
        </div>
        <aside className="contactAside">
          <h2>Other ways to reach us</h2>
          <ul className="contactChannels">
            {channels.map((c) => (
              <li key={c.label}>
                <small>{c.label}</small>
                <a href={c.href}>{c.value}</a>
                <span>{c.note}</span>
              </li>
            ))}
          </ul>
          <div className="contactMeta">
            <b>Based in Australia</b>
            <p>Built and supported locally for Australian driving schools.</p>
          </div>
          <div className="contactMeta">
            <b>Prefer to try it first?</b>
            <p>
              Start a free trial anytime, no credit card required.{" "}
              <a href="https://admin.driveinstructor.pro/sign-up">Sign up today →</a>
            </p>
          </div>
        </aside>
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
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </nav>
          <span>Made with care in Australia 🇦🇺</span>
        </div>
      </footer>
    </main>
  );
}
