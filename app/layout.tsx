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
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .siteLoaderBoot{position:fixed;left:0;right:0;bottom:28px;z-index:9999;display:flex;justify-content:center;pointer-events:none;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;opacity:1;transform:translateY(0);transition:opacity .3s ease,transform .3s ease}
              .siteLoaderBoot.isHiding{opacity:0;transform:translateY(6px)}
              .siteLoaderBoot>div{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:999px;background:#fff;border:1px solid #d9e2ef;box-shadow:0 10px 30px #10203a22;color:#10203a}
              .siteLoaderBoot .ring{width:18px;height:18px;border:2px solid #d9e2ef;border-top-color:#005EFF;border-radius:50%;animation:siteSpin .7s linear infinite;flex:none}
              @keyframes siteSpin{to{transform:rotate(360deg)}}
              html.siteLoaded .siteLoaderBoot{display:none!important}
            `,
          }}
        />
      </head>
      <body>
        <div className="siteLoaderBoot" id="site-loader-boot" aria-hidden="true">
          <div>
            <img src="/logo.png" alt="" width={28} height={28} style={{borderRadius: 7, display: "block"}} />
            <div className="ring" />
            <span style={{fontSize: 13, fontWeight: 650}}>Loading…</span>
          </div>
        </div>
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
