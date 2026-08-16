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
  other: {"codex-preview": "development"},
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
