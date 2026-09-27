import type {Metadata} from "next";

export const metadata:Metadata={
  title:"Payments & Credits | DriveInstructor Pro",
  description:"Accept card payments, sell lesson packages, track student credit and pay instructors through Stripe Connect, all in one place.",
};

const rails=[
  ["Collect","Take card payments for lessons and packages without chasing invoices by hand."],
  ["Track","Keep every student balance accurate with automatic credit updates after each booking."],
  ["Payout","Pay instructors through Stripe Connect when lessons are completed."],
];

export default function PaymentsCreditsPage(){
  return <main className="payPage">
    <header className="header"><a className="brand" href="/"><img src="/logo.png" alt="" width={35} height={35}/>DriveInstructor<span>Pro</span></a><nav><a href="/">Home</a><a href="/#features">Features</a><a href="/#how">How it works</a><a href="/pricing">Pricing</a><a href="/about">About</a></nav><div className="actions"><a className="button small" href="https://admin.driveinstructor.pro/sign-in">Sign in</a></div></header>

    <section className="payIntro">
      <a className="payBack" href="/#features">← All features</a>
      <div className="payIntroGrid">
        <div>
          <p className="payTag">Payments & credits</p>
          <h1>Money in. Credit tracked. Instructors paid.</h1>
          <p>DriveInstructor Pro connects lesson bookings to real payments, student credit and instructor payouts, so your school stays financially clear without spreadsheet chaos.</p>
          <a className="button" href="https://admin.driveinstructor.pro/sign-up">Start free trial →</a>
        </div>
        <div className="payRail">
          {rails.map(([title,copy],i)=>(
            <article key={title} data-i={i}>
              <b>{title}</b>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="payPanel" id="gateway">
      <div className="payPanelCopy">
        <p className="payTag">STRIPE CONNECT</p>
        <h2>One payment gateway for the whole school.</h2>
        <p>Connect Stripe to collect lesson payments and pay instructors through Stripe Connect. Set currency, payout method and transfer timing once, then let completed lessons move money the right way.</p>
        <ul>
          <li>Card payments for lessons and packages</li>
          <li>Automatic credit tracking on student balances</li>
          <li>Instructor payouts after lessons are completed</li>
          <li>AUD-ready setup for Australian schools</li>
        </ul>
        <a className="button" href="/pricing">Try payments free →</a>
      </div>
      <figure className="payShot">
        <img src="/payments-credits-clean.png" alt="Payment gateway settings with Stripe Connect, currency and instructor payout options" width={591} height={960}/>
      </figure>
    </section>

    <section className="payTicks">
      <div>
        <h3>For school owners</h3>
        <p>See what students owe, what they have in credit, and what instructors should be paid, without reconciling three different tools.</p>
      </div>
      <div>
        <h3>For students</h3>
        <p>Buy packages, pay for lessons and keep a clear hour balance they can trust every time they book.</p>
      </div>
      <div>
        <h3>For instructors</h3>
        <p>Completed lessons can trigger payouts through Stripe Connect Express, with timing you control.</p>
      </div>
    </section>

    <section className="payEnd">
      <h2>Stop chasing payments. Start running on credit that adds up.</h2>
      <p>Try payments and credits free, and keep every balance accurate from the first booking.</p>
      <a className="button white" href="https://admin.driveinstructor.pro/sign-up">Start your free trial <span className="btnArrow">→</span></a>
    </section>

    <footer>
      <div className="footgrid">
        <div>
          <a className="brand" href="/"><img src="/logo.png" alt="" width={35} height={35}/>DriveInstructor<span>Pro</span></a>
          <p>Simple, reliable software that helps driving schools run better and grow with confidence. Bookings, instructors, payments and your website, all in one place.</p>
        </div>
        <div><b>Product</b><a href="/#features">Features</a><a href="/payments-credits">Payments & credits</a><a href="/pricing">Pricing</a></div>
        <div><b>Company</b><a href="/about">About us</a><a href="/contact">Contact</a><a href="/help">Help centre</a></div>
      </div>
      <div className="copyright">
        <span>© 2026 DriveInstructor Pro. All rights reserved.</span>
        <nav className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/security">Security</a></nav>      </div>
    </footer>
  </main>;
}
