import type {Metadata} from "next";
import "./globals.css";
import SiteLoader from "./SiteLoader";

export const metadata: Metadata = {
  title: "DriveInstructor Pro | Driving School Management Software",
  description:
    "Manage bookings, instructors, students, payments and your driving school website from one trusted platform.",
  icons: {
    icon: [{url: "/favicon.png", type: "image/png"}],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "DU18T4o1_tcptVGp7bdZeMZikZEKzan_pW86JBogW58",
  },
  other: {
    "codex-preview": "development",
    "facebook-domain-verification": "qery1vkcubobyusk489uu0003gykdp",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
