"use client";

import {useState} from "react";

type Period = "monthly" | "annual";

const plans = [
  {
    id: "solo",
    name: "Solo",
    blurb: "Designed for independent driving instructors.",
    monthly: 60,
    annual: 600,
    popular: false,
    includes: [
      "1 instructor",
      "Online booking system",
      "Student management",
      "Instructor calendar",
      "Lesson packages and credits",
      "Online payments",
      "Professional school website",
      "Email notifications",
      "Basic reports",
      "Australian support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    blurb: "Designed for growing driving schools.",
    monthly: 140,
    annual: 1400,
    popular: true,
    includes: [
      "Up to 5 instructors",
      "Everything in Solo",
      "Instructor Hub access",
      "Global instructor calendars",
      "Staff and administrator accounts",
      "Instructor earnings",
      "Instructor payout management",
      "Custom website domain",
      "Advanced reports",
      "Location and service-area management",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "Designed for established, multi-instructor driving schools.",
    monthly: 260,
    annual: 2600,
    popular: false,
    includes: [
      "Up to 12 instructors",
      "Everything in Growth",
      "Multiple locations",
      "Advanced permissions",
      "Detailed performance reporting",
      "Instructor performance insights",
      "Automated business workflows",
      "Priority onboarding assistance",
      "Premium support",
    ],
  },
] as const;

const comparison = [
  ["Included instructors", "1", "Up to 5", "Up to 12"],
  ["Online bookings", true, true, true],
  ["Student management", true, true, true],
  ["Instructor Hub", false, true, true],
  ["School website", true, true, true],
  ["Custom domain", false, true, true],
  ["Staff accounts", false, true, true],
  ["Instructor payouts", false, true, true],
  ["Multiple locations", false, false, true],
  ["Basic reporting", true, true, true],
  ["Advanced reporting", false, true, true],
  ["Performance insights", false, false, true],
  ["Support level", "Standard", "Priority", "Premium"],
] as const;

const faqs = [
  [
    "Can I change plans later?",
    "Yes. You can move between Solo, Growth and Pro as your school grows or changes.",
  ],
  [
    "What happens if I add another instructor?",
    "If you stay within your plan allowance, nothing extra is charged. Beyond your plan, additional instructors are A$15 per month or A$150 per year.",
  ],
  [
    "Is the first instructor included?",
    "Yes. Solo includes 1 instructor. Growth includes up to 5 and Pro includes up to 12.",
  ],
  [
    "Can I switch between monthly and annual billing?",
    "Yes. You can switch between monthly and annual billing as your needs change.",
  ],
  [
    "Is a credit card required for the trial?",
    "No. You can start a 14-day free trial without entering a credit card.",
  ],
  [
    "Can I cancel at any time?",
    "Yes. You can cancel anytime during or after the trial with no lock-in contracts.",
  ],
  [
    "Are SMS messages included?",
    "Email notifications are included on all plans. SMS notifications are an optional add-on at A$0.10 per message.",
  ],
  [
    "What happens if I have more than 12 instructors?",
    "You can add instructors beyond your plan allowance for A$15 per instructor per month or A$150 per year. For teams larger than 25 instructors, contact us.",
  ],
];

function Cell({value}: {value: string | boolean}) {
  if (value === true) return <span className="priceTick">✓</span>;
  if (value === false) return <span className="priceDash">—</span>;
  return <span>{value}</span>;
}

export default function PricingClient() {
  const [period, setPeriod] = useState<Period>("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="priceHero">
        <h1>Simple plans for every driving school</h1>
        <p>
          Start small and upgrade as your team grows. All plans include the essential tools needed
          to manage your driving school.
        </p>
        <div className="priceToggle" role="group" aria-label="Billing period">
          <button
            type="button"
            className={period === "monthly" ? "on" : ""}
            onClick={() => setPeriod("monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            className={period === "annual" ? "on" : ""}
            onClick={() => setPeriod("annual")}
          >
            Annual
            <em>Save 2 months</em>
          </button>
        </div>
      </section>

      <section className="priceTiers">
        {plans.map((plan) => {
          const price = period === "monthly" ? plan.monthly : plan.annual;
          const unit = period === "monthly" ? "month" : "year";
          return (
            <article
              key={plan.id}
              className={`priceTier${plan.popular ? " popular" : ""}`}
            >
              {plan.popular && <span className="pricePopular">Most Popular</span>}
              <h2>{plan.name}</h2>
              <p className="priceBlurb">{plan.blurb}</p>
              <div className="priceAmount" key={`${plan.id}-${period}`}>
                <strong>A${price.toLocaleString("en-AU")}</strong>
                <span>/ {unit}</span>
              </div>
              <p className="priceExtraNote">
                Plus A${period === "monthly" ? "15" : "150"} for each additional instructor
              </p>
              {period === "annual" && <p className="priceSaveNote">Save 2 months vs monthly</p>}
              <a className={`button priceCta${plan.popular ? "" : " ghost"}`} href="https://admin.driveinstructor.pro/sign-up">
                Start free trial
              </a>
              <ul>
                {plan.includes.map((item) => (
                  <li key={item}>
                    <span className="priceCheck">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      <section className="priceExtra">
        <div className="priceExtraCard">
          <h3>Need more instructors?</h3>
          <p>
            Add instructors beyond your plan allowance for A$15 per instructor per month or A$150
            per instructor per year.
          </p>
          <a href="/contact">Contact us</a>
          <span> for schools with more than 25 instructors.</span>
        </div>
      </section>

      <section className="priceAddonWrap">
        <article className="priceAddon">
          <div>
            <span className="priceAddonBadge">Optional add-on</span>
            <h3>SMS notifications</h3>
            <p>
              Send lesson confirmations, reminders and important updates directly to students.
            </p>
          </div>
          <div className="priceAddonPrice">
            <strong>A$0.10</strong>
            <span>per message</span>
          </div>
        </article>
      </section>

      <section className="priceCompare">
        <div className="heading">
          <small>COMPARE PLANS</small>
          <h2>See what is included in each plan.</h2>
        </div>
        <div className="priceTableWrap">
          <table className="priceTable">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Solo</th>
                <th>Growth</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([feature, solo, growth, pro]) => (
                <tr key={feature}>
                  <th scope="row">{feature}</th>
                  <td>
                    <Cell value={solo} />
                  </td>
                  <td>
                    <Cell value={growth} />
                  </td>
                  <td>
                    <Cell value={pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="priceFaq">
        <div className="heading">
          <small>FAQ</small>
          <h2>Pricing questions, answered.</h2>
        </div>
        <div className="priceFaqList">
          {faqs.map(([q, a], i) => {
            const open = openFaq === i;
            return (
              <div className={`priceFaqItem${open ? " open" : ""}`} key={q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                >
                  <span>{q}</span>
                  <em aria-hidden="true">{open ? "−" : "+"}</em>
                </button>
                <div className="priceFaqPanel">
                  <p>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="priceFinal">
        <h2>Find the right plan for your driving school</h2>
        <p className="priceFinalLead">
          Try DriveInstructor Pro free for 14 days. No credit card required.
        </p>
        <a className="button" href="https://admin.driveinstructor.pro/sign-up">
          Start your free trial
        </a>
      </section>
    </>
  );
}
