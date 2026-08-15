import type {Metadata} from "next";

export const metadata:Metadata={
  title:"Smart Scheduling | DriveInstructor Pro",
  description:"Manage lessons, instructor availability and travel time from one clear calendar. Stop double bookings and run every day with confidence.",
};

const Check=()=> <span className="check">✓</span>;

const points=[
  ["One clear calendar","See every lesson, instructor and travel block in one place, so nothing slips through."],
  ["Live availability","Instructors stay in sync with shared calendars that update the moment a booking changes."],
  ["Travel time built in","Protect buffer between lessons so your team is never late and never double-booked."],
  ["Fewer admin calls","Students and instructors get the right details automatically, without chasing messages."],
];

const steps=[
  ["1","Book the lesson","A student books online or your office adds a lesson in seconds."],
  ["2","Calendar locks it in","The slot, instructor and travel time are reserved instantly across the school."],
  ["3","Everyone stays ready","Confirmations go out, the day stays organised, and clashes are stopped before they start."],
];

export default function SmartSchedulingPage(){
  return <main className="featurePage">
    <header className="header"><a className="brand" href="/"><img src="/logo.png" alt="" width={35} height={35}/>DriveInstructor<span>Pro</span></a><nav><a href="/#features">Features</a><a href="/#how">How it works</a><a href="/pricing">Pricing</a><a href="/#about">About</a></nav><div className="actions"><a className="button small" href="https://admin.driveinstructor.pro/sign-in">Sign in</a></div></header>

    <section className="featureHero">
      <div className="featureHeroCopy">
        <a className="featureBack" href="/#features">← All features</a>
        <div className="eyebrow">Smart scheduling</div>
        <h1>Stop juggling diaries.<br/><em>Run a calendar that works.</em></h1>
        <p>DriveInstructor Pro gives your school one live schedule for lessons, instructors and travel time, so every day runs smoothly without double bookings.</p>
        <div className="heroButtons">
          <a className="button" href="https://admin.driveinstructor.pro/sign-up">Start your free trial <span className="btnArrow">→</span></a>
          <a className="watch" href="#pitch"><b>▶</b> See why schools switch</a>
        </div>
        <div className="reassure"><div className="reassureRow"><span><Check/>14 days free</span><span><Check/>No credit card required</span><span><Check/>Cancel anytime</span></div></div>
      </div>
      <div className="featurePhone">
        <img src="/smart-scheduling.png" alt="DriveInstructor Pro bookings calendar on mobile showing upcoming lessons" width={571} height={1024}/>
      </div>
    </section>

    <section className="featurePitch" id="pitch">
      <div className="heading">
        <small>WHY SCHOOLS SWITCH</small>
        <h2>Your schedule should grow your school, not slow it down.</h2>
        <p>Paper diaries, group chats and disconnected calendars cost you lessons, trust and time. Smart scheduling puts the whole school on one source of truth.</p>
      </div>
      <div className="featurePitchGrid">
        {points.map(([title,copy])=>(
          <article key={title}><Check/><div><h3>{title}</h3><p>{copy}</p></div></article>
        ))}
      </div>
    </section>

    <section className="featureStory">
      <div>
        <small>BUILT FOR THE ROAD</small>
        <h2>Upcoming lessons, clear at a glance.</h2>
        <p>Instructors open Bookings and instantly see who&apos;s next, where to meet, how long the lesson is, and whether it&apos;s manual or auto. No digging. No guessing. No missed pickups.</p>
        <ul>
          <li><Check/><span>Upcoming, completed and cancelled lessons in one view</span></li>
          <li><Check/><span>Student details and addresses ready before you leave</span></li>
          <li><Check/><span>Calendar access when you need the bigger picture</span></li>
        </ul>
        <a className="button" href="/pricing">Try smart scheduling free →</a>
      </div>
      <div className="featureStoryVisual">
        <img src="/lesson-details.png" alt="Lesson details with map, student info, time and directions" width={571} height={1024}/>
      </div>
    </section>

    <section className="featureSteps">
      <div className="heading">
        <small>HOW IT WORKS</small>
        <h2>From booking to lesson, automatically.</h2>
        <p>When a lesson is booked, the calendar updates, the instructor is notified and the day stays clash-free.</p>
      </div>
      <div className="featureStepsGrid">
        {steps.map(([n,title,copy])=>(
          <article key={n}><i>{n}</i><h3>{title}</h3><p>{copy}</p></article>
        ))}
      </div>
    </section>

    <section className="cta" id="pricing">
      <div>
        <small>START GROWING TODAY</small>
        <h2>Give your school a calendar<br/>worth trusting.</h2>
        <p>Try every scheduling feature free and see how much cleaner your week becomes.</p>
      </div>
      <div>
        <a className="button white" href="https://admin.driveinstructor.pro/sign-up">Start your free trial <span className="btnArrow">→</span></a>
        <small>No credit card required · Cancel anytime</small>
      </div>
    </section>

    <footer>
      <div className="footgrid">
        <div>
          <a className="brand" href="/"><img src="/logo.png" alt="" width={35} height={35}/>DriveInstructor<span>Pro</span></a>
          <p>Simple, reliable software that helps driving schools run better and grow with confidence. Bookings, instructors, payments and your website, all in one place.</p>
        </div>
        <div><b>Product</b><a href="/#features">Features</a><a href="/smart-scheduling">Smart scheduling</a><a href="/pricing">Pricing</a></div>
        <div><b>Company</b><a href="/#about">About us</a><a href="#">Contact</a><a href="#">Help centre</a></div>
      </div>
      <div className="copyright">
        <span>© 2026 DriveInstructor Pro. All rights reserved.</span>
        <nav className="legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a></nav>
        <span>Made with care in Australia 🇦🇺</span>
      </div>
    </footer>
  </main>;
}
