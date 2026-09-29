import type {Metadata} from "next";
import FooterSocial from "../FooterSocial";

export const metadata:Metadata={
  title:"Student Accounts | DriveInstructor Pro",
  description:"Give every student a login to book lessons, view packages, track progress and manage their balance from one simple account.",
};

const perks=[
  ["Book anytime","Students reserve lessons from their phone without calling the office."],
  ["See credit clearly","Hours, packages and balances stay visible so nobody is left guessing."],
  ["Track progress","Upcoming, completed and cancelled lessons stay organised in one place."],
  ["Self-serve changes","Reschedule requests and account details happen without endless admin messages."],
];

export default function StudentAccountsPage(){
  return <main className="saPage">
    <header className="header"><a className="brand" href="/"><img src="/logo.png" alt="" width={35} height={35}/>DriveInstructor<span>Pro</span></a><nav><a href="/">Home</a><a href="/#features">Features</a><a href="/#how">How it works</a><a href="/pricing">Pricing</a><a href="/about">About</a></nav><div className="actions"><a className="button small" href="https://admin.driveinstructor.pro/sign-in">Sign in</a></div></header>

    <section className="saBanner">
      <a className="saBack" href="/#features">← All features</a>
      <p className="saKicker">Student accounts</p>
      <h1>A login for every student.<br/>Less work for your school.</h1>
      <p className="saLead">Give learners their own account to book lessons, check credit, follow progress and manage their balance, while your team spends less time answering the same questions.</p>
      <div className="saCtas">
        <a className="button" href="https://admin.driveinstructor.pro/sign-up">Start free trial →</a>
        <a className="saGhost" href="#inside">See the student view</a>
      </div>
    </section>

    <section className="saShowcase" id="inside">
      <div className="saPhoneWrap">
        <img className="saPhone" src="/student-accounts.png" alt="Student account dashboard with lesson overview, credit balance and upcoming lessons" width={591} height={1024}/>
        <div className="saFloat saFloatA"><b>0 hrs credit</b><small>Balance always visible</small></div>
        <div className="saFloat saFloatB"><b>Upcoming · 6</b><small>Lessons on their phone</small></div>
      </div>
      <ol className="saPerkList">
        {perks.map(([title,copy],i)=>(
          <li key={title} data-i={i}>
            <em>0{i+1}</em>
            <div><h2>{title}</h2><p>{copy}</p></div>
          </li>
        ))}
      </ol>
    </section>

    <section className="saSplit">
      <div>
        <h2>What students get</h2>
        <ul>
          <li>Personal dashboard with lesson overview</li>
          <li>Credit balance and buy-more-hours path</li>
          <li>Upcoming, completed and cancelled tabs</li>
          <li>Instructor details and reschedule actions</li>
        </ul>
      </div>
      <div>
        <h2>What your school gets</h2>
        <ul>
          <li>Fewer repeated booking and balance questions</li>
          <li>Cleaner student records tied to real logins</li>
          <li>More bookings completed without office calls</li>
          <li>A more professional experience from day one</li>
        </ul>
      </div>
    </section>

    <section className="saStrip">
      <div>
        <h2>Ready to give every student their own login?</h2>
        <p>Try student accounts free and see how much quieter your inbox becomes.</p>
      </div>
      <a className="button white" href="https://admin.driveinstructor.pro/sign-up">Start your free trial <span className="btnArrow">→</span></a>
    </section>

    <footer>
      <div className="footgrid">
        <div>
          <a className="brand" href="/"><img src="/logo.png" alt="" width={35} height={35}/>DriveInstructor<span>Pro</span></a>
          <p>Simple, reliable software that helps driving schools run better and grow with confidence. Bookings, instructors, payments and your website, all in one place.</p>
        </div>
        <div><b>Product</b><a href="/#features">Features</a><a href="/student-accounts">Student accounts</a><a href="/pricing">Pricing</a></div>
        <div><b>Company</b><a href="/about">About us</a><a href="/contact">Contact</a><a href="/help">Help centre</a></div>
      </div>
      <div className="copyright">
        <span>© 2026 DriveInstructor Pro. All rights reserved.</span>
        <nav className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/security">Security</a></nav>
        <FooterSocial />
      </div>
    </footer>
  </main>;
}
