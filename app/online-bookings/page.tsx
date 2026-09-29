import type {Metadata} from "next";
import WatchDemo from "../WatchDemo";
import FooterSocial from "../FooterSocial";

export const metadata:Metadata={
  title:"Online Bookings | DriveInstructor Pro",
  description:"Let students book and pay 24/7 from a professional school website, with instant confirmations and reminders built in.",
};

const Check=()=> <span className="check">✓</span>;

const points=[
  ["Bookings while you sleep","Students find an instructor, pick a time and pay online, even after hours."],
  ["Your school, your brand","A professional booking site built around your school, not a generic marketplace look."],
  ["Instant confirmations","Every booking sends the right details to the student and instructor automatically."],
  ["Fewer missed enquiries","Turn website visitors into paid lessons instead of unanswered calls and messages."],
];

const flow=[
  ["⌕","Visit","Opens your booking site"],
  ["◎","Search","Location & transmission"],
  ["▦","Choose","Instructor & time slot"],
  ["$","Pay","Secure online payment"],
  ["✓","Done","Lesson confirmed"],
];

export default function OnlineBookingsPage(){
  return <main className="featurePage">
    <header className="header"><a className="brand" href="/"><img src="/logo.png" alt="" width={35} height={35}/>DriveInstructor<span>Pro</span></a><nav><a href="/">Home</a><a href="/#features">Features</a><a href="/#how">How it works</a><a href="/pricing">Pricing</a><a href="/about">About</a></nav><div className="actions"><a className="button small" href="https://admin.driveinstructor.pro/sign-in">Sign in</a></div></header>

    <section className="featureHero">
      <div className="featureHeroCopy">
        <a className="featureBack" href="/#features">← All features</a>
        <div className="eyebrow">Online bookings</div>
        <h1>Turn your website into a<br/><em>24/7 booking desk.</em></h1>
        <p>DriveInstructor Pro lets students book and pay from a professional site built around your school, with instant confirmations and reminders that keep every lesson on track.</p>
        <div className="heroButtons">
          <a className="button" href="https://admin.driveinstructor.pro/sign-up">Start your free trial <span className="btnArrow">→</span></a>
          <WatchDemo src="https://userupload-813333281041-ap-southeast-2-an.s3.ap-southeast-2.amazonaws.com/Videos+/hub5.mov">
            <b>▶</b> See why schools switch
          </WatchDemo>
        </div>
        <div className="reassure"><div className="reassureRow"><span><Check/>14 days free</span><span><Check/>No credit card required</span><span><Check/>Cancel anytime</span></div></div>
      </div>
      <div className="featurePhone featureWeb">
        <img src="/online-bookings.png" alt="School booking website where students find instructors and book lessons" width={591} height={1024}/>
      </div>
    </section>

    <section className="featurePitch" id="pitch">
      <div className="heading">
        <small>WHY SCHOOLS SWITCH</small>
        <h2>Stop losing lessons to missed calls and after-hours enquiries.</h2>
        <p>Students expect to book online. Online bookings gives them a clear path from your website to a confirmed, paid lesson, without extra admin for your team.</p>
      </div>
      <div className="featurePitchGrid">
        {points.map(([title,copy])=>(
          <article key={title}><Check/><div><h3>{title}</h3><p>{copy}</p></div></article>
        ))}
      </div>
    </section>

    <section className="featureStory">
      <div>
        <small>BUILT TO CONVERT</small>
        <h2>Find an instructor in a few taps.</h2>
        <p>Students enter pick-up location, choose auto or manual, pick a date if they want, and search available instructors. It feels simple for them, and fills your calendar for you.</p>
        <ul>
          <li><Check/><span>Location, transmission and date matching</span></li>
          <li><Check/><span>Professional school branding on every step</span></li>
          <li><Check/><span>Clear search flow that leads to real bookings</span></li>
        </ul>
        <a className="button" href="/pricing">Try online bookings free →</a>
      </div>
      <div className="featureStoryVisual featureWeb">
        <img src="/online-bookings-search.png" alt="Find an instructor booking form with location, date and search" width={591} height={1024}/>
      </div>
    </section>

    <section className="bookingFlow" id="how-bookings-work">
      <div className="heading">
        <small>BOOKING FLOW</small>
        <h2>How online bookings work.</h2>
        <p>Watch a student go from website visit to a confirmed lesson, while your school stays in sync automatically.</p>
      </div>

      <div className="flowStage" aria-label="Animated diagram of how online bookings work">
        <div className="flowTrack">
          <div className="flowLine" aria-hidden="true">
            <span className="flowPulse"/>
          </div>
          {flow.map(([icon,title,copy],i)=>(
            <article className="flowStep" data-i={i} key={title}>
              <div className="flowBadge"><span>{icon}</span><em>{i+1}</em></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="flowSplit" aria-hidden="true">
          <span/><span/><span/>
        </div>

        <div className="flowOutputs">
          {[
            ["Student notified","Confirmation + reminder"],
            ["Instructor updated","Lesson on their calendar"],
            ["School synced","Live schedule + payment"],
          ].map(([title,copy],i)=>(
            <article className="flowOut" data-i={i} key={title}>
              <i/>
              <div><b>{title}</b><small>{copy}</small></div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="cta" id="pricing">
      <div>
        <small>START GROWING TODAY</small>
        <h2>Let students book<br/>while you teach.</h2>
        <p>Try online bookings free and see how many more lessons your website can bring in.</p>
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
        <div><b>Product</b><a href="/#features">Features</a><a href="/online-bookings">Online bookings</a><a href="/pricing">Pricing</a></div>
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
