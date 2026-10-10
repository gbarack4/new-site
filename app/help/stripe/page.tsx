import type {Metadata} from "next";
import FooterSocial from "../../FooterSocial";

export const metadata: Metadata = {
  title: "Connect Stripe for payments and payouts | DriveInstructor Pro",
  description:
    "Step-by-step guide to connect Stripe for student card payments and Stripe Connect for instructor payouts in DriveInstructor Pro.",
};

const redirectUri =
  "https://api.driveinstructor.pro/stripe/instructor-connect/oauth/callback";

const steps = [
  {
    id: "open-settings",
    title: "Open Stripe settings in DriveInstructor Pro",
    body: (
      <>
        <p>
          Sign in to the admin dashboard, open your profile menu in the top right, then choose{" "}
          <b>Settings</b>.
        </p>
        <p>
          In the sidebar, expand <b>Payment gateway</b> and select <b>Stripe</b>. This is where you
          add API keys for student payments and a Connect Client ID for instructor payouts.
        </p>
      </>
    ),
    images: [
      {
        src: "/help/stripe/01-open-settings.png",
        alt: "DriveInstructor Pro dashboard with the profile menu open and Settings highlighted",
        caption: "Dashboard → profile menu → Settings",
      },
      {
        src: "/help/stripe/02-dip-stripe-settings.png",
        alt: "DriveInstructor Pro Stripe Account settings with API key and Connect Client ID fields",
        caption: "Settings → Payment gateway → Stripe",
      },
    ],
  },
  {
    id: "api-keys",
    title: "Add your Stripe API keys for student payments",
    body: (
      <>
        <p>
          In the Stripe Dashboard, open <b>Settings</b> → <b>Developers</b> → <b>API keys</b> (or
          choose <b>Manage API keys</b> from API policies).
        </p>
        <p>
          Copy the <b>Publishable key</b> and <b>Secret key</b> into the matching fields in
          DriveInstructor Pro, then click <b>Save</b>.
        </p>
        <p>
          Use keys from the same mode you intend to run in. Start with <b>Test mode</b> until you
          are ready for real charges. After you save, the secret key is never shown again — the form
          only shows that a key is saved (for example, the last few characters).
        </p>
      </>
    ),
    images: [
      {
        src: "/help/stripe/03-stripe-api-keys.png",
        alt: "Stripe Dashboard API keys page showing publishable and secret keys in test mode",
        caption: "Stripe → Developers → API keys",
      },
    ],
  },
  {
    id: "accounts-v1",
    title: "Enable Accounts v1 support",
    body: (
      <>
        <p>
          Still in Stripe under <b>Settings</b> → <b>Developers</b> → <b>API policies</b>, make sure{" "}
          <b>Accounts v1 support</b> is <b>Enabled</b>.
        </p>
        <p>
          When this policy is on, your platform can create connected accounts so instructors can
          receive payouts.
        </p>
      </>
    ),
    images: [
      {
        src: "/help/stripe/04-accounts-v1-policy.png",
        alt: "Stripe API policies page with Accounts v1 support enabled",
        caption: "Stripe → Developers → API policies",
      },
    ],
  },
  {
    id: "connect-oauth",
    title: "Set up Stripe Connect OAuth for instructor payouts",
    body: (
      <>
        <p>
          In the Stripe Dashboard, open <b>Settings</b> → <b>Connect</b>, then go to{" "}
          <b>Onboarding options</b> and open the <b>OAuth</b> tab.
        </p>
        <p>
          Turn on <b>OAuth for Stripe Dashboard accounts</b>. Under <b>Redirects</b>, click{" "}
          <b>+ Add URI</b> and paste this exact redirect URI from DriveInstructor Pro:
        </p>
        <p className="helpDocCode">
          <code>{redirectUri}</code>
        </p>
        <p>
          You can copy the same URI from the <b>Redirect URI</b> field on the Stripe settings screen
          in DriveInstructor Pro. Add it in Stripe before instructors try to connect.
        </p>
      </>
    ),
    images: [
      {
        src: "/help/stripe/05-stripe-connect-settings.png",
        alt: "Stripe settings page with the Connect product settings tile highlighted",
        caption: "Stripe → Settings → Connect",
      },
      {
        src: "/help/stripe/06-oauth-onboarding.png",
        alt: "Stripe Connect onboarding options OAuth tab with Enable OAuth turned on",
        caption: "Connect → Onboarding options → OAuth",
      },
      {
        src: "/help/stripe/07-add-redirect-uri.png",
        alt: "Stripe Add redirect URI dialog for Connect OAuth",
        caption: "Add the DriveInstructor Pro redirect URI",
      },
    ],
  },
  {
    id: "client-id",
    title: "Paste the Connect Client ID and save",
    body: (
      <>
        <p>
          On the same Stripe OAuth page, copy the <b>Client ID</b> (shown as Test client ID or Live
          client ID depending on mode).
        </p>
        <p>
          Paste it into <b>Connect Client ID</b> on the DriveInstructor Pro Stripe settings screen.
          Use the client ID from the same school Stripe account and the same mode as your API keys.
          Leave the field blank if you only want to accept student payments.
        </p>
        <p>
          Enter your secret key again if the form asks for it, then click <b>Save</b>. Instructors
          can then use Stripe sign-in to connect a Standard account to your school for payouts.
        </p>
      </>
    ),
    images: [
      {
        src: "/help/stripe/02-dip-stripe-settings.png",
        alt: "DriveInstructor Pro Stripe settings showing Connect Client ID and Redirect URI fields",
        caption: "Paste the Client ID, then Save",
      },
    ],
  },
];

export default function StripeHelpPage() {
  return (
    <main className="helpPage helpDocPage">
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

      <article className="helpDoc">
        <a className="helpDocBack" href="/help">
          ← Help centre
        </a>
        <p className="helpBrand">Payments</p>
        <h1>Connect Stripe for payments and instructor payouts</h1>
        <p className="helpDocLead">
          Use Stripe to take student card payments, then enable Stripe Connect so instructors can
          link a Standard account and receive payouts from your school.
        </p>

        <aside className="helpDocNote">
          <b>Test mode vs Live mode</b>
          <p>
            Stripe screenshots in this guide may show Test mode (sandbox). Your DriveInstructor Pro
            settings show Live when you have saved live keys. Always copy API keys and the Connect
            Client ID from the same mode the admin is using. Stay in Test mode until you are ready
            for real charges.
          </p>
        </aside>

        <ol className="helpDocSteps">
          {steps.map((step, i) => (
            <li key={step.id} id={step.id} className="helpDocStep">
              <div className="helpDocStepCopy">
                <span className="helpDocStepNum">{i + 1}</span>
                <div>
                  <h2>{step.title}</h2>
                  {step.body}
                </div>
              </div>
              <div className="helpDocShots">
                {step.images.map((img) => (
                  <figure key={img.src + img.caption} className="helpDocShot">
                    <img src={img.src} alt={img.alt} width={1024} height={582} loading="lazy" />
                    <figcaption>{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <section className="helpDocAfter">
          <h2>What happens next</h2>
          <ul>
            <li>Students can pay for lessons and packages with card through your booking flows.</li>
            <li>
              Instructors connect their Stripe account from the school so completed lessons can be
              paid out.
            </li>
            <li>
              Keep currency, payout timing and gateway options aligned with how your school runs day
              to day.
            </li>
          </ul>
          <div className="helpDocLinks">
            <a className="button" href="https://admin.driveinstructor.pro/settings">
              Open settings →
            </a>
            <a className="helpGhost" href="/payments-credits">
              About payments &amp; credits
            </a>
          </div>
        </section>
      </article>

      <section className="helpCta">
        <div>
          <h2>Need more help?</h2>
          <p>Our team can help with Stripe setup, billing and product questions.</p>
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
          </nav>
          <FooterSocial />
        </div>
      </footer>
    </main>
  );
}
