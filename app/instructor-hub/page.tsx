import type {Metadata} from "next";
import WatchDemo from "../WatchDemo";
import FooterSocial from "../FooterSocial";

export const metadata: Metadata = {
  title: "Instructor Hub | DriveInstructor Pro",
  description:
    "One platform for independent instructors working with multiple driving schools. One global calendar, flexible locations, and complete control from a single account.",
};

const Check = () => <span className="check">✓</span>;

const control = [
  "Which driving schools they want to join",
  "Which invitations they want to accept or decline",
  "What days and hours they are available",
  "Which locations they want to cover",
  "When they want to pause receiving new bookings from a school",
  "When they want to leave a particular school",
];

const bookingView = [
  "The student’s name and lesson time",
  "Which driving school the booking belongs to",
  "The pickup location",
  "The lesson duration",
  "Upcoming and completed lessons",
  "Cancellations or schedule changes",
  "Their daily and weekly availability",
];

const locations = [
  ["Mon-Tue", "Brisbane City"],
  ["Wed", "North Lakes"],
  ["Thu-Fri", "Redcliffe"],
  ["Weekend", "Unavailable"],
];

export default function InstructorHubPage() {
  return (
    <main className="hubPage">
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

      <section className="hubHero" id="top">
        <div className="hubHeroCopy">
          <a className="hubBack" href="/#features">
            ← All features
          </a>
          <p className="hubBrand">Instructor Hub</p>
          <h1>
            One Platform. Multiple Driving Schools.
            <em> One Global Calendar.</em>
          </h1>
          <p>
            A central platform for independent instructors who work with one or more
            driving schools. Manage availability, locations and bookings across every
            school from a single account.
          </p>
          <div className="hubCtas">
            <a className="button" href="https://app.driveinstructor.pro/login">
              Sign up today →
            </a>
            <WatchDemo
              className="hubGhost"
              src="https://userupload-813333281041-ap-southeast-2-an.s3.ap-southeast-2.amazonaws.com/Videos+/hub5.mov"
              label="Instructor Hub demo video"
            >
              See how it works
            </WatchDemo>
          </div>
        </div>
        <div className="hubHeroVisual" aria-hidden="true">
          <img
            className="hubPhone hubPhoneMain"
            src="/instructor-hub/bookings.png"
            alt=""
            width={567}
            height={1024}
          />
          <img
            className="hubPhone hubPhoneSide"
            src="/instructor-hub/schools.png"
            alt=""
            width={568}
            height={1024}
          />
        </div>
      </section>

      <section className="hubIntro">
        <p>
          Instead of a separate calendar or account for every driving school, Instructor
          Hub brings everything together. No matter which school a booking comes from, it
          appears in the instructor’s global calendar, making it easier to stay organised
          and avoid scheduling conflicts.
        </p>
      </section>

      <section className="hubFeature hubFeatureFlip" id="schools">
        <div className="hubFeatureCopy">
          <small>MULTIPLE SCHOOLS</small>
          <h2>Work with multiple driving schools.</h2>
          <p>
            Instructors are not restricted to one school. They can join multiple driving
            schools and accept students from each while continuing to operate
            independently.
          </p>
          <p>
            Each school manages its own students and bookings, but instructors see their
            complete teaching schedule in one place. More opportunities to grow income,
            without losing control of their time.
          </p>
        </div>
        <figure className="hubShot">
          <img
            src="/instructor-hub/schools.png"
            alt="Instructor Hub school search with join and view details actions"
            width={568}
            height={1024}
          />
        </figure>
      </section>

      <section className="hubFeature" id="calendar">
        <div className="hubFeatureCopy">
          <small>GLOBAL CALENDAR</small>
          <h2>One calendar that prevents double-bookings.</h2>
          <p>
            Instructor Hub combines bookings from every school an instructor has joined.
            When they are booked through one school, that time becomes unavailable across
            all other connected schools.
          </p>
          <p>
            For example, if School A books a lesson at 10:00 am, School B cannot book the
            same instructor for that period. Availability updates automatically across the
            platform.
          </p>
        </div>
        <figure className="hubShot">
          <img
            src="/instructor-hub/bookings.png"
            alt="Instructor Hub global calendar with daily lesson schedule"
            width={567}
            height={1024}
          />
        </figure>
      </section>

      <section className="hubLocations" id="locations">
        <div className="hubLocationsCopy">
          <small>FLEXIBLE LOCATIONS</small>
          <h2>Work in different locations on different days.</h2>
          <p>
            Instructors choose where they want to work and set different locations for
            different days. Only students from selected areas can request suitable lesson
            times, which cuts unnecessary travel and builds a schedule that fits.
          </p>
          <ul className="hubLocList">
            {locations.map(([when, where]) => (
              <li key={when}>
                <b>{when}</b>
                <span>{where}</span>
              </li>
            ))}
          </ul>
          <p className="hubNote">
            Smart scheduling can also allow travel time between lessons in different
            locations, so back-to-back bookings stay practical and instructors arrive on
            time.
          </p>
        </div>
        <figure className="hubShot">
          <img
            src="/instructor-hub/availability.png"
            alt="Instructor availability editor with day slots and suburb locations"
            width={566}
            height={1024}
          />
        </figure>
      </section>

      <section className="hubManage" id="bookings">
        <div className="hubManageCopy">
          <small>ONE DASHBOARD</small>
          <h2>Manage every booking in one place.</h2>
          <p>
            Instructors view and manage bookings from all connected schools through one
            dashboard, with a clear picture of their complete workload.
          </p>
          <ul>
            {bookingView.map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="hubShot hubShotWide">
          <img
            src="/instructor-hub/earnings.png"
            alt="Instructor earnings dashboard with weekly totals and daily breakdown"
            width={569}
            height={1024}
          />
        </figure>
      </section>

      <section className="hubControl" id="control">
        <div className="hubControlInner">
          <div>
            <small>INDEPENDENCE</small>
            <h2>Stay independent and in control.</h2>
            <p>
              Joining a school does not permanently tie an instructor to that school.
              Instructors decide how they work, and can leave one school without affecting
              relationships with others. Existing bookings must be completed or cancelled
              first.
            </p>
          </div>
          <ul>
            {control.map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hubPrivacy">
        <small>PRIVACY</small>
        <h2>Separate schools. One instructor account.</h2>
        <p>
          Each driving school remains independent and only sees students, bookings and
          information connected to its own business. A school cannot see an instructor’s
          private booking details from another school. It only sees when the instructor is
          available or unavailable. The instructor, however, sees their full schedule
          across every connected school through one secure account.
        </p>
      </section>

      <section className="hubClose">
        <p className="hubBrand">Instructor Hub</p>
        <h2>
          More freedom. Fewer conflicts.
          <br />
          Better organisation.
        </h2>
        <p>
          Work with multiple schools, teach in different locations and manage every lesson
          from one platform, without the risk of being double-booked.
        </p>
        <a className="button" href="https://app.driveinstructor.pro/login">
          Sign up today →
        </a>
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
              confidence. Bookings, instructors, payments and your website, all in one
              place.
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
