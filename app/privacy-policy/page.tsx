import type { Metadata } from "next";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  APP_NAME,
  DELETION_DAYS,
  DEVELOPER_NAME,
  LAST_UPDATED,
  PACKAGE_ID,
  SUPPORT_EMAIL,
  WEBSITE_URL,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Lex n Land",
  description:
    "How Lex n Land collects, uses, shares, stores and deletes your personal information, including identity and property verification documents.",
};

type ContactLine = { label: string; value: string; href?: string };

type Block =
  | { p: string }
  | { h: string }
  | { ul: string[] }
  | { note: string }
  | { cta: { label: string; href: string } }
  | { contact: ContactLine[] };

type Section = { id: string; title: string; body: Block[] };

const SECTIONS: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: [
      {
        p: `This Privacy Policy explains how ${DEVELOPER_NAME} (“LexnLand”, “we”, “us”, “our”) collects, uses, stores, shares and protects your information when you use the ${APP_NAME} mobile app (${PACKAGE_ID}) and the website at ${WEBSITE_URL} (together, the “Services”).`,
      },
      {
        p: "By using the Services, you agree to this policy. If you do not agree, please do not use the Services.",
      },
      {
        p: "We handle personal data in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 and its rules.",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: [
      {
        p: "We collect only what we need to run the Services. Depending on how you use them, this can include the following.",
      },
      { h: "Account and profile" },
      {
        ul: [
          "Sign-in details — your name, email address and profile photo when you sign in with Google, and your mobile number if you add or verify one.",
          "Profile details — the role you choose (buyer or property owner) and anything else you add to your profile.",
        ],
      },
      { h: "Property listings" },
      {
        ul: [
          "Listing content — the details, price, description and photos of a property you list.",
          "Property location — the address, city and map location of a property you list. This is shown on the listing.",
          "Verification documents — identity and property documents that owners provide to list a property for sale, including an Aadhaar card image and a No Objection Certificate (NOC). See “Government ID and property verification documents” below.",
        ],
      },
      { h: "Activity in the app" },
      {
        ul: [
          "Messages — chats you send to owners, buyers or our team, including any images or voice messages you choose to send.",
          "Legal help requests — the questions, case details and messages you send when you use our legal help features.",
          "Saved items, ratings and feedback — properties you save, ratings you give and messages you send to support.",
          "Payments — when you pay for a service, our payment partner Razorpay processes the payment. We receive the payment status and a transaction reference, not your full card, UPI or bank details.",
        ],
      },
      { h: "Collected automatically" },
      {
        ul: [
          "Device location — with your permission, your device’s location, to show nearby properties on the map. You can turn this off at any time in your device settings.",
          "Device and log data — device model, operating system, app version, IP address, and crash or error information.",
        ],
      },
      { h: "On our website" },
      {
        ul: [
          "Forms — your name, email address and message when you contact us, and your email address when you subscribe for updates.",
        ],
      },
    ],
  },
  {
    id: "verification-documents",
    title: "Government ID and property verification documents",
    body: [
      {
        p: "When a property owner lists a property for sale, or for another transaction that needs verification, we collect identity and property documents. These include an image of the owner’s Aadhaar card and a No Objection Certificate (NOC).",
      },
      {
        ul: [
          "Purpose — we collect these documents only to verify the owner’s identity and to support verification of the property listing.",
          "No public display — we never publicly display Aadhaar numbers or any other government ID information. Buyers and other app users cannot see these documents.",
          "Restricted access — only authorised LexnLand personnel and service providers who need the documents for verification, security or legal compliance can access them.",
          "No sale or advertising — we do not sell government ID information or use it for advertising.",
          "Retention — we keep these documents only as long as reasonably necessary for verification and applicable legal requirements. We delete them when your account deletion is completed, unless the law requires us to keep a record.",
        ],
      },
      {
        note: "Upload only the documents we ask for. They are required only if you want to list a property for sale; browsing and buying do not need them.",
      },
    ],
  },
  {
    id: "permissions",
    title: "Device permissions",
    body: [
      {
        p: "The app may ask for the permissions below. Each one is used only for the purpose given, and you can change them at any time in your device settings.",
      },
      {
        ul: [
          "Location — to show nearby properties and to set a property’s position on the map.",
          "Camera and photos — to take or choose the photos and documents you upload.",
          "Microphone — to record voice messages in chats.",
          "Notifications — to tell you about messages, listing updates and important service information.",
        ],
      },
    ],
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: [
      { p: "We use your information to:" },
      {
        ul: [
          "Create and manage your account, and authenticate you when you sign in.",
          "Provide the app’s features, such as property search, maps, chat and legal help.",
          "Verify property owners and their listings.",
          "Process payments and send receipts.",
          "Save your preferences, such as your role and saved properties.",
          "Reply to your enquiries and provide customer support.",
          "Keep the Services secure and prevent fraud and abuse.",
          "Send important service notifications and, if you subscribed, launch updates.",
          "Improve performance, fix bugs and build new features.",
          "Meet our legal obligations.",
        ],
      },
    ],
  },
  {
    id: "sharing",
    title: "How we share information",
    body: [
      {
        p: "We do not sell your personal information, and we do not use it for third-party advertising. We share it only as follows:",
      },
      {
        ul: [
          "Other users — details you choose to make visible, such as your listing, your name and your messages, are shown to the person you are dealing with. Your verification documents are never shown to other users.",
          "Lawyers — if you submit a legal help request, its contents are shared with the lawyer handling it.",
          "Service providers — companies that process data for us and may use it only to provide their service. These include Google (sign-in and Firebase), Razorpay (payments), OpenStreetMap (map tiles), and the cloud hosting, database and file-storage providers that run our servers.",
          "Legal and safety — when required by law, a court order or a government authority, or to protect the rights, safety and property of our users or LexnLand.",
          "Business changes — if we merge with or are acquired by another company, your information may be transferred to it. We will tell you where the law requires us to.",
        ],
      },
      {
        p: "Some of our service providers may store data on servers outside India. Where that happens, we take steps to keep your information protected in line with applicable law.",
      },
    ],
  },
  {
    id: "security",
    title: "Data storage and security",
    body: [
      {
        p: "We use reasonable technical and organisational measures to protect your information against unauthorised access, alteration, disclosure or destruction. These include encrypted connections (HTTPS), access controls, and restricted access to verification documents.",
      },
      {
        p: "No system is completely secure, so we cannot guarantee absolute security. Please keep your account details private, and tell us straight away if you suspect anyone has accessed your account without permission.",
      },
    ],
  },
  {
    id: "retention",
    title: "Data retention",
    body: [
      {
        p: "We keep personal information for as long as needed to provide the Services, comply with legal obligations, resolve disputes and enforce our agreements. Verification documents are kept as described above. Payment records are kept for the period required by Indian accounting and tax law.",
      },
      {
        p: "Contact-form and newsletter details are kept until you ask us to delete them.",
      },
    ],
  },
  {
    id: "account-deletion",
    title: "Account and data deletion",
    body: [
      { p: "You can ask us to delete your account and personal data at any time:" },
      {
        ul: [
          "In the app — open your profile and choose Delete Account.",
          `On the web — use the account deletion page at ${WEBSITE_URL}/delete-account, or email ${SUPPORT_EMAIL} from your registered email address.`,
        ],
      },
      {
        p: `After you ask, your account is deactivated and then permanently deleted after ${DELETION_DAYS} days. If you sign in during that time, we will ask whether you want to keep your account. Choosing to continue cancels the deletion.`,
      },
      {
        p: "When deletion is completed, we delete your profile, property listings, verification documents and saved data. Messages you sent may remain visible to the other person in a conversation, shown as coming from “Invalid user” without your name or profile details. We keep payment records and any other information the law requires us to keep, and only for as long as the law requires.",
      },
      {
        cta: { label: "Go to the account deletion page", href: "/delete-account" },
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
    body: [
      {
        p: "We process your personal data with your consent, which you give when you sign up or submit a form, and for other lawful purposes allowed by Indian law, such as meeting a legal obligation. You can withdraw your consent at any time. Withdrawing does not affect processing that already took place, and it may mean some features are no longer available.",
      },
      { p: "Subject to applicable law, you can also:" },
      {
        ul: [
          "Ask for a summary of the personal data we hold about you.",
          "Ask us to correct or update inaccurate or incomplete data.",
          "Ask us to erase your personal data (see “Account and data deletion” above).",
          "Opt out of marketing messages.",
          "Nominate another person to exercise your rights if you die or become unable to act.",
          "Raise a grievance about how we handle your data.",
        ],
      },
      {
        p: `To use any of these rights, email us at ${SUPPORT_EMAIL}. We may need to verify your identity first, and we will respond within a reasonable time.`,
      },
    ],
  },
  {
    id: "children",
    title: "Children’s privacy",
    body: [
      {
        p: "The Services are meant for people aged 18 and over and are not directed at children. We do not knowingly collect personal data from children. If you believe a child has given us personal data, contact us and we will delete it.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and website technologies",
    body: [
      {
        p: "Our website may use cookies and similar technologies to keep the site working, remember your preferences and understand how the site is used. You can block or delete cookies in your browser settings, though parts of the site may not work as expected. The mobile app does not use browser cookies.",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    body: [
      {
        p: "The Services may link to third-party websites, including social media pages. Those sites have their own privacy practices, and we are not responsible for them. Please read their policies before sharing information with them.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      {
        p: "We may update this policy from time to time. Changes are posted on this page with an updated “Last updated” date, and where appropriate we will also tell you in the app or by email. If you keep using the Services after an update, you accept the revised policy.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    body: [
      {
        p: "For questions, requests or complaints about this policy or how we handle your personal data, contact our Grievance Officer. We will respond as quickly as we can, and within the time limits set by law.",
      },
      {
        contact: [
          { label: "Developer", value: DEVELOPER_NAME },
          { label: "App", value: `${APP_NAME} (${PACKAGE_ID})` },
          { label: "Email", value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
          { label: "Website", value: WEBSITE_URL, href: WEBSITE_URL },
          { label: "Address", value: "Bengaluru, Karnataka, India" },
        ],
      },
    ],
  },
];

function renderBlock(block: Block, key: number) {
  if ("p" in block) {
    return (
      <p key={key} className="text-[15px] leading-[1.85] text-ink/80 mb-4 max-w-[68ch]">
        {block.p}
      </p>
    );
  }

  if ("h" in block) {
    return (
      <h3 key={key} className="font-semibold text-[15px] mt-7 mb-3 first:mt-0">
        {block.h}
      </h3>
    );
  }

  if ("ul" in block) {
    return (
      <ul key={key} className="mb-4 space-y-3 max-w-[68ch]">
        {block.ul.map((item) => {
          const at = item.indexOf(" — ");
          const lead = at > -1 ? item.slice(0, at) : null;
          const rest = at > -1 ? item.slice(at + 3) : item;
          return (
            <li key={item} className="flex gap-3.5 text-[15px] leading-[1.75] text-ink/80">
              <span
                aria-hidden
                className="mt-[10px] w-1.5 h-1.5 rounded-full bg-wine flex-shrink-0"
              />
              <span>
                {lead && (
                  <>
                    <b className="font-semibold text-ink">{lead}</b> —{" "}
                  </>
                )}
                {rest}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  if ("note" in block) {
    return (
      <div
        key={key}
        className="my-5 max-w-[68ch] rounded-sm border-l-[3px] border-wine bg-pink/60 px-5 py-4 text-[14.5px] leading-[1.75] text-ink/85"
      >
        {block.note}
      </div>
    );
  }

  if ("cta" in block) {
    return (
      <a
        key={key}
        href={block.cta.href}
        className="mt-1 inline-flex items-center px-6 py-3 rounded-full border border-wine/30 text-wine-dark font-semibold text-[14px] transition-colors hover:bg-wine hover:border-wine hover:text-white"
      >
        {block.cta.label}
      </a>
    );
  }

  return (
    <address
      key={key}
      className="not-italic mt-2 mb-4 max-w-[520px] rounded-sm bg-pink/60 border border-wine/10 p-6 space-y-3.5 text-[14.5px]"
    >
      {block.contact.map((c) => (
        <div key={c.label}>
          <span className="block text-[12.5px] font-semibold text-ink-soft mb-0.5">
            {c.label}
          </span>
          {c.href ? (
            <a href={c.href} className="font-medium text-wine-dark hover:underline break-all">
              {c.value}
            </a>
          ) : (
            <span>{c.value}</span>
          )}
        </div>
      ))}
    </address>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="relative overflow-hidden bg-bg pt-[140px] pb-24 md:pt-[170px] md:pb-32">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(1100px 600px at 82% -6%, rgba(212,175,55,0.14), transparent 60%), radial-gradient(900px 700px at -6% 30%, rgba(166,59,105,0.10), transparent 60%)",
            }}
          />

          <div className="relative z-[2] max-w-[1280px] mx-auto px-6 md:px-10">
            <header className="max-w-[720px] mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/60 border border-wine/20 backdrop-blur-md text-[12.5px] font-semibold text-wine-dark mb-7">
                <ShieldCheck size={14} /> Last updated {LAST_UPDATED}
              </div>
              <h1 className="font-serif font-bold leading-[1.15] tracking-tight text-[40px] sm:text-[52px] mb-5">
                Privacy Policy
              </h1>
              <p className="text-[17px] leading-[1.75] text-ink-soft max-w-[560px]">
                What {APP_NAME} collects, why we collect it, who can see it, and
                how you can have it deleted.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
              <nav aria-label="Contents" className="hidden lg:block lg:sticky lg:top-28">
                <p className="text-[13px] font-semibold text-ink-soft mb-4">
                  Contents
                </p>
                <ol className="space-y-2.5 text-[13.5px]">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex gap-3 text-ink-soft transition-colors hover:text-wine focus-visible:text-wine"
                      >
                        <span className="w-5 flex-shrink-0 tabular-nums text-wine/70">
                          {i + 1}.
                        </span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <article className="bg-white rounded-md px-6 py-10 sm:px-10 md:px-14 md:py-14 shadow-[0_30px_70px_-40px_rgba(127,46,80,0.35)]">
                {SECTIONS.map((s, i) => (
                  <section
                    key={s.id}
                    id={s.id}
                    className={`scroll-mt-28 ${
                      i > 0 ? "mt-12 pt-12 border-t border-ink/[0.08]" : ""
                    }`}
                  >
                    <h2 className="font-serif font-bold text-[24px] md:text-[28px] leading-[1.25] mb-5">
                      <span className="text-wine mr-2.5">{i + 1}.</span>
                      {s.title}
                    </h2>
                    {s.body.map((b, j) => renderBlock(b, j))}
                  </section>
                ))}
              </article>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start lg:pl-[314px]">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-ink/15 text-ink font-semibold text-[14.5px] transition-all duration-300 hover:-translate-y-1 hover:border-wine hover:text-wine-dark"
              >
                <ArrowLeft size={16} /> Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
