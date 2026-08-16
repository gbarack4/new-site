import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "About Us | DriveInstructor Pro",
  description:
    "Learn about DriveInstructor Pro and Instructor Hub — the connected platform helping driving schools, instructors and students stay organised.",
};

const schoolTools = [
  "Students and instructors",
  "Lesson bookings and availability",
  "Packages, credits and payments",
  "Locations and service areas",
  "Instructor schedules",
  "School websites and online bookings",
  "Staff access and permissions",
  "Business performance and reporting",
];

const goals = [
  "Simplifies the daily management of driving schools",
  "Helps prevent scheduling conflicts and double bookings",
  "Gives instructors greater flexibility and independence",
  "Makes it easier for students to find, book and manage lessons",
  "Helps schools provide a more professional customer experience",
  "Supports the changing way driving instructors work",
];

const hubFreedom = [
  "Join and work with multiple driving schools",
  "Accept or decline invitations from schools",
  "Request to join participating schools",
  "Choose which days and locations they work",
  "Manage all bookings through one calendar",
  "Prevent double bookings across different schools",
  "View lesson and student information",
  "Track earnings from each school",
  "Pause their availability with a particular school",
  "Leave a school when they no longer wish to work with it",
];

const Check = () => <span className="check">✓</span>;

export default function AboutPage() {
  return (
    <main className="aboutPage">
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

      <section className="aboutHero" id="top">
        <p className="aboutBrandLabel">About us</p>
        <h1>
          Building a better future for
          <em> driving education.</em>
        </h1>
        <p>
          DriveInstructor Pro is an all-in-one platform designed to help driving schools,
          independent instructors and students stay connected and organised.
        </p>
      </section>

      <section className="aboutStory">
        <p>
          We understand that running a driving school involves much more than teaching
          people how to drive. Schools must manage instructors, students, bookings,
          payments, schedules, service areas and day-to-day communication. When these tasks
          are handled across different systems, managing the business becomes unnecessarily
          complicated.
        </p>
        <p>
          DriveInstructor Pro brings these essential tools together in one place, helping
          driving schools reduce administrative work, improve the student experience and
          grow their business with confidence.
        </p>
      </section>

      <section className="aboutBlock" id="platform">
        <div className="aboutBlockCopy">
          <small>THE PLATFORM</small>
          <h2>What is DriveInstructor Pro?</h2>
          <p>
            DriveInstructor Pro is a driving school management platform that gives schools
            the tools they need to manage their operations from one central system.
          </p>
          <p>
            Our platform is designed to support both small independent driving schools and
            growing businesses with multiple instructors, staff members and locations.
          </p>
        </div>
        <ul className="aboutList">
          {schoolTools.map((item) => (
            <li key={item}>
              <Check />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="aboutGoal" id="goal">
        <small>OUR GOAL</small>
        <h2>Make driving education easier to manage, more flexible and more connected.</h2>
        <p>
          We want driving schools to spend less time dealing with repetitive administrative
          work and more time supporting their instructors, teaching students and growing
          their businesses.
        </p>
        <p>
          We believe technology should simplify the work behind driving education without
          taking away the personal connection between schools, instructors and students.
        </p>
        <ul className="aboutGoalGrid">
          {goals.map((item) => (
            <li key={item}>
              <Check />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="aboutHub" id="instructor-hub">
        <div className="aboutHubIntro">
          <p className="aboutBrandLabel">Instructor Hub</p>
          <h2>
            One instructor. Multiple schools.
            <em> One calendar.</em>
          </h2>
          <p>
            Instructor Hub is the dedicated platform for driving instructors who work
            independently or with multiple driving schools.
          </p>
          <p>
            Traditionally, an instructor may be tied to one school or required to manage
            separate calendars for every school they work with. Instructor Hub solves this
            by giving each instructor one global calendar connected across every school
            they have joined.
          </p>
          <p>
            When an instructor receives a booking from one school, that time becomes
            unavailable to the other schools they work with. This helps prevent scheduling
            conflicts while allowing instructors to maintain the freedom to work with
            multiple schools.
          </p>
          <a className="button" href="/instructor-hub">
            Explore Instructor Hub →
          </a>
        </div>
        <div className="aboutHubPanel">
          <h3>Greater flexibility for instructors</h3>
          <p>With Instructor Hub, instructors are not permanently tied to one driving school.</p>
          <ul>
            {hubFreedom.map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="aboutExample">
            <b>Example</b>
            <p>
              An instructor could work with one school in Brisbane on Monday and Tuesday,
              and another school in Moreton Bay on Wednesday and Thursday. Instructor Hub
              keeps these schedules connected so availability stays accurate everywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutBalance">
        <small>FOR SCHOOLS AND INSTRUCTORS</small>
        <h2>Supporting schools without limiting instructors.</h2>
        <p>
          Instructor Hub creates a flexible working relationship between driving schools
          and instructors. Schools can access an instructor’s available teaching times
          without seeing confidential information belonging to other schools.
        </p>
        <p>
          Each school manages its own students, bookings, payments and business records,
          while the instructor’s global calendar protects against booking conflicts. This
          gives schools access to a wider network of instructors while allowing instructors
          to build their careers across different schools, locations and communities.
        </p>
      </section>

      <section className="aboutVision" id="vision">
        <small>OUR VISION</small>
        <h2>
          A connected driving education network where schools can grow, instructors can
          work more freely and students can access reliable lessons more easily.
        </h2>
        <p>
          DriveInstructor Pro and Instructor Hub are being built to work together, giving
          every participant the tools they need while keeping each school’s information
          private and secure.
        </p>
        <p>
          We are not simply building booking software. We are building a more flexible,
          efficient and connected future for the driving education industry.
        </p>
        <div className="aboutVisionCtas">
          <a className="button" href="https://admin.driveinstructor.pro/sign-up">
            Start free trial →
          </a>
          <a className="aboutGhost" href="/contact">
            Contact us
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
