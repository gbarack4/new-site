import type {Metadata} from "next";

export const metadata:Metadata={
  title:"Your Own Website | DriveInstructor Pro",
  description:"Launch a trusted, mobile-friendly driving school website on your own domain, with online booking built in.",
};

const included=[
  ["Your domain","Look established on a professional address students trust."],
  ["Mobile-ready","Parents and learners can browse and book from any phone."],
  ["Booking built in","No separate tools. Finding an instructor starts on your site."],
  ["Your branding","School name, colours and presence stay yours, not a marketplace."],
];

export default function YourOwnWebsitePage(){
  return <main className="sitePage">
    <header className="header"><a className="brand" href="/"><img src="/logo.png" alt="" width={35} height={35}/>DriveInstructor<span>Pro</span></a><nav><a href="/">Home</a><a href="/#features">Features</a><a href="/#how">How it works</a><a href="/pricing">Pricing</a><a href="/about">About</a></nav><div className="actions"><a className="button small" href="https://admin.driveinstructor.pro/sign-in">Sign in</a></div></header>

    <section className="siteHero">
      <a className="siteBack" href="/#features">← All features</a>
      <p className="siteKicker">Your own website</p>
      <h1>A school website that<br/><span>actually books lessons.</span></h1>
      <p className="siteLead">Launch a trusted, mobile-friendly site on your own domain, with online booking built in so students can find you and book in one place.</p>
      <div className="siteDomain">
        <span className="siteDot"/><span className="siteDot"/><span className="siteDot"/>
        <code>yourschool.com.au</code>
      </div>
      <a className="button" href="https://admin.driveinstructor.pro/sign-up">Start free trial →</a>
    </section>

    <section className="siteBrowser" id="preview">
      <div className="siteChromeBody">
        <img src="/school-website.png" alt="Example driving school website with booking, lessons and student-facing pages" width={1600} height={900}/>
      </div>
    </section>

    <section className="siteIncluded">
      <h2>Everything a modern driving school site needs.</h2>
      <div className="siteIncludedGrid">
        {included.map(([title,copy],i)=>(
          <article key={title} data-i={i}>
            <em>0{i+1}</em>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="siteWhy">
      <blockquote>
        <p>Stop sending students to Facebook messages or a phone number that rings out. Put a real booking website in front of them, on a domain that looks like a proper school.</p>
      </blockquote>
      <ul>
        <li>Look professional from the first Google search</li>
        <li>Convert visitors into paid bookings overnight</li>
        <li>Keep your brand separate from generic marketplaces</li>
        <li>Connect straight into your DriveInstructor Pro calendar</li>
      </ul>
    </section>

    <section className="siteEnd">
      <h2>Ready for a website that works as hard as you do?</h2>
      <p>Try it free and launch a booking-ready school site on your own domain.</p>
      <a className="button" href="https://admin.driveinstructor.pro/sign-up">Start your free trial →</a>
    </section>

    <footer>
      <div className="footgrid">
        <div>
          <a className="brand" href="/"><img src="/logo.png" alt="" width={35} height={35}/>DriveInstructor<span>Pro</span></a>
          <p>Simple, reliable software that helps driving schools run better and grow with confidence. Bookings, instructors, payments and your website, all in one place.</p>
        </div>
        <div><b>Product</b><a href="/#features">Features</a><a href="/your-own-website">Your own website</a><a href="/pricing">Pricing</a></div>
        <div><b>Company</b><a href="/about">About us</a><a href="/contact">Contact</a><a href="/help">Help centre</a></div>
      </div>
      <div className="copyright">
        <span>© 2026 DriveInstructor Pro. All rights reserved.</span>
        <nav className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/security">Security</a></nav>      </div>
    </footer>
  </main>;
}
