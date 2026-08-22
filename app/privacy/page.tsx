import {LegalPage, legalMetadata} from "../LegalPage";

export const metadata = legalMetadata("Privacy");

export default function PrivacyPage() {
  return <LegalPage title="Privacy" />;
}
