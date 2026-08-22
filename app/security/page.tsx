import {LegalPage, legalMetadata} from "../LegalPage";

export const metadata = legalMetadata(
  "Security",
  "How DriveInstructor Pro protects school, instructor and student data.",
);

export default function SecurityPage() {
  return (
    <LegalPage title="Security" headline="Security" updated="22 August 2026">
      <p>
        DriveInstructor Pro is built to keep driving school data safe. This page explains the
        main ways we protect the platform.
      </p>

      <h2>1. Account protection</h2>
      <ul>
        <li>Access is controlled by secure sign-in</li>
        <li>Passwords are stored using modern hashing, not plain text</li>
        <li>Schools can manage staff access and roles</li>
      </ul>

      <h2>2. Data protection</h2>
      <ul>
        <li>Data is transmitted over encrypted HTTPS connections</li>
        <li>Customer data is hosted with trusted cloud providers</li>
        <li>Card payments are handled by payment providers such as Stripe. We do not store full card numbers</li>
      </ul>

      <h2>3. Platform safeguards</h2>
      <ul>
        <li>We monitor for abuse and unauthorised access</li>
        <li>We apply updates and security fixes as needed</li>
        <li>Schools cannot see another school&apos;s private bookings or student records</li>
      </ul>

      <h2>4. Your responsibilities</h2>
      <ul>
        <li>Use strong passwords and keep them private</li>
        <li>Only invite trusted staff and instructors</li>
        <li>Tell us quickly if you suspect unauthorised access</li>
      </ul>

      <h2>5. Questions</h2>
      <p>
        For security concerns, contact{" "}
        <a href="mailto:support@driveinstructor.pro">support@driveinstructor.pro</a> or use our{" "}
        <a href="/contact">contact page</a>. See also our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
