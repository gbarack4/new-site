import type {Metadata, ReactNode} from "next";

type Props = {
  title: string;
  headline?: string;
  updated?: string;
  children?: ReactNode;
};

export function LegalPage({
  title,
  headline = "Hello world",
  updated,
  children,
}: Props) {
  return (
    <main className="legalPage">
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

      <section className="legalHero">
        <p className="legalBrand">{title}</p>
        <h1>{headline}</h1>
        {updated ? <p className="legalUpdated">Last updated: {updated}</p> : null}
      </section>

      {children ? <article className="legalBody">{children}</article> : null}

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
          </nav>
          <span>Made with care in Australia 🇦🇺</span>
        </div>
      </footer>
    </main>
  );
}

export function legalMetadata(title: string, description?: string): Metadata {
  return {
    title: `${title} | DriveInstructor Pro`,
    description: description ?? `${title} for DriveInstructor Pro.`,
  };
}
