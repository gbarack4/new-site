import {LegalPage, legalMetadata} from "../LegalPage";

export const metadata = legalMetadata(
  "Privacy Policy",
  "Learn how DriveInstructor Pro collects, uses and protects personal information for driving schools, instructors and students in Australia.",
);

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy" headline="Privacy Policy" updated="22 August 2026">
      <p>
        DriveInstructor Pro (“we”, “us”, “our”) is an Australian driving school management
        platform. This Privacy Policy explains how we collect, use, store and share personal
        information when you use our website, apps and services.
      </p>
      <p>
        We handle personal information in line with the Australian Privacy Principles in the
        Privacy Act 1988 (Cth).
      </p>

      <h2>1. Who this policy covers</h2>
      <p>This policy applies to:</p>
      <ul>
        <li>School owners and staff who use DriveInstructor Pro</li>
        <li>Instructors who use Instructor Hub or a school account</li>
        <li>Students and parents who book lessons or create student accounts</li>
        <li>Visitors to our marketing website</li>
      </ul>

      <h2>2. Information we collect</h2>
      <p>Depending on how you use our services, we may collect:</p>
      <ul>
        <li>
          <b>Account details</b>: name, email address, phone number, password and school name
        </li>
        <li>
          <b>Business details</b>: school profile, locations, service areas, staff roles and
          instructor availability
        </li>
        <li>
          <b>Booking and lesson details</b>: lesson times, pickup locations, transmission type,
          packages, credits and lesson history
        </li>
        <li>
          <b>Payment information</b>: billing contact details and payment status. Card payments
          are processed by our payment provider (such as Stripe). We do not store full card
          numbers on our servers
        </li>
        <li>
          <b>Usage information</b>: how you use the platform, device and browser type, IP
          address, and basic diagnostics that help us keep the service secure and reliable
        </li>
        <li>
          <b>Support messages</b>: information you send when you contact us
        </li>
      </ul>

      <h2>3. How we collect information</h2>
      <p>We collect personal information when you:</p>
      <ul>
        <li>Create an account or sign in</li>
        <li>Set up a school, invite instructors or add students</li>
        <li>Make or manage bookings and payments</li>
        <li>Use our website, apps or Instructor Hub</li>
        <li>Email or message our support or sales team</li>
      </ul>
      <p>
        Schools may also enter student and instructor information into the platform as part of
        running their business. In those cases, the school is responsible for making sure they
        have a valid reason to collect and share that information with us.
      </p>

      <h2>4. How we use information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Provide, operate and improve DriveInstructor Pro and Instructor Hub</li>
        <li>Create accounts, manage bookings, calendars, credits and payments</li>
        <li>Send booking confirmations, reminders and service notices</li>
        <li>Provide customer support and respond to enquiries</li>
        <li>Process subscriptions, invoices and payouts</li>
        <li>Keep the platform secure and prevent misuse</li>
        <li>Meet legal and regulatory obligations</li>
      </ul>
      <p>
        We may also send product updates or useful service information. You can ask us to stop
        non-essential marketing emails at any time.
      </p>

      <h2>5. How we share information</h2>
      <p>We do not sell personal information.</p>
      <p>We may share information with:</p>
      <ul>
        <li>
          <b>The school you are connected to</b>: so they can manage bookings, lessons,
          payments and communication
        </li>
        <li>
          <b>Instructors linked to a booking</b>: so they can deliver the lesson
        </li>
        <li>
          <b>Service providers</b>: such as hosting, email, analytics and payment providers who
          help us run the platform
        </li>
        <li>
          <b>Professional advisers or authorities</b>: when required by law or to protect our
          rights, users or the public
        </li>
      </ul>
      <p>
        Schools remain separate businesses. One school cannot see another school’s private
        student, booking or payment records. Instructor Hub may share an instructor’s
        availability across connected schools, but not confidential booking details belonging to
        another school.
      </p>

      <h2>6. Storage and security</h2>
      <p>
        We use reasonable technical and organisational measures to protect personal information
        against loss, misuse and unauthorised access. No online service is completely secure,
        but we work to keep DriveInstructor Pro safe and reliable.
      </p>
      <p>
        Your information may be stored on secure systems in Australia or with trusted cloud
        providers that may process data in other countries. Where information is handled
        overseas, we take steps appropriate under Australian privacy law.
      </p>

      <h2>7. How long we keep information</h2>
      <p>
        We keep personal information only as long as needed for the purposes in this policy,
        including to provide the service, keep records, resolve disputes and meet legal
        requirements. When information is no longer needed, we take steps to delete or
        de-identify it where practical.
      </p>

      <h2>8. Your choices and rights</h2>
      <p>You can ask us to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Correct information that is inaccurate or out of date</li>
        <li>Delete information where we no longer need it and are not required to keep it</li>
        <li>Stop non-essential marketing messages</li>
      </ul>
      <p>
        If you are a student or instructor using a school’s account, some requests may need to
        go through that school first, because they control parts of the data in their account.
      </p>

      <h2>9. Cookies and website data</h2>
      <p>
        Our website and apps may use cookies or similar technologies to keep you signed in,
        remember preferences and understand how the site is used. You can control cookies
        through your browser settings. Some features may not work properly if cookies are
        disabled.
      </p>

      <h2>10. Children</h2>
      <p>
        DriveInstructor Pro is used by driving schools that may teach younger learner drivers.
        Student accounts and bookings should be managed with an appropriate parent, guardian or
        school contact where required. We do not knowingly collect personal information from
        children for marketing purposes.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will post the
        updated version on this page and change the “Last updated” date. Continued use of the
        service after an update means you accept the revised policy.
      </p>

      <h2>12. Contact us</h2>
      <p>
        If you have a privacy question or want to make a request, contact us at{" "}
        <a href="mailto:support@driveinstructor.pro">support@driveinstructor.pro</a> or through
        our <a href="/contact">contact page</a>.
      </p>
      <p>
        If you are not satisfied with how we handle a privacy concern, you may contact the
        Office of the Australian Information Commissioner (OAIC) at{" "}
        <a href="https://www.oaic.gov.au" target="_blank" rel="noreferrer">
          oaic.gov.au
        </a>
        .
      </p>
    </LegalPage>
  );
}
