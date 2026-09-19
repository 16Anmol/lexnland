import type { Metadata } from "next";
import { ArrowLeft, Smartphone, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteAccountForm from "@/components/DeleteAccountForm";
import {
  APP_NAME,
  DELETION_DAYS,
  DEVELOPER_NAME,
  PACKAGE_ID,
  SUPPORT_EMAIL,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Delete Your Account — Lex n Land",
  description:
    "Request permanent deletion of your Lex n Land account and the personal data linked to it.",
};

const DELETED = [
  "Your profile — name, email address, mobile number and profile photo",
  "Your property listings, with their photos and details",
  "Identity and verification documents you uploaded, including your Aadhaar card image and NOC",
  "Your saved properties, ratings and preferences",
];

const KEPT = [
  "Chat messages — messages you sent may stay visible to the other person in the conversation, shown as coming from “Invalid user”, without your name or profile details.",
  "Payment records — kept for the period required by Indian accounting and tax law.",
  "Records we must keep to prevent fraud, resolve disputes or meet a legal obligation — kept only as long as needed.",
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => {
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

export default function DeleteAccountPage() {
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
              <h1 className="font-serif font-bold leading-[1.15] tracking-tight text-[38px] sm:text-[52px] mb-5">
                Delete your {APP_NAME} account
              </h1>
              <p className="text-[17px] leading-[1.75] text-ink-soft max-w-[600px] mb-4">
                Ask us to permanently delete your account and the personal data
                linked to it.
              </p>
              <p className="text-[13.5px] text-ink-soft">
                App: {APP_NAME} ({PACKAGE_ID}) · Developer: {DEVELOPER_NAME}
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
              <div className="bg-white rounded-md p-7 md:p-9 shadow-[0_30px_70px_-40px_rgba(127,46,80,0.35)]">
                <h2 className="font-serif font-bold text-[24px] mb-6">
                  Two ways to request deletion
                </h2>

                <div className="flex gap-4 mb-7">
                  <div className="w-11 h-11 rounded-2xl bg-pink text-wine-dark flex items-center justify-center flex-shrink-0">
                    <Smartphone size={19} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] mb-1.5">In the app</h3>
                    <p className="text-[14.5px] leading-[1.75] text-ink/80">
                      Open the {APP_NAME} app, go to your profile and choose{" "}
                      <b className="font-semibold text-ink">Delete Account</b>.
                      Confirm when asked.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-pink text-wine-dark flex items-center justify-center flex-shrink-0">
                    <Globe size={19} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] mb-1.5">On the web</h3>
                    <p className="text-[14.5px] leading-[1.75] text-ink/80">
                      Use the form on this page, or email{" "}
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="font-medium text-wine-dark hover:underline"
                      >
                        {SUPPORT_EMAIL}
                      </a>{" "}
                      from the email address you registered with.
                    </p>
                  </div>
                </div>
              </div>

              <DeleteAccountForm />
            </div>

            <div className="mt-8 lg:mt-12 bg-white rounded-md p-7 md:p-10 shadow-[0_30px_70px_-40px_rgba(127,46,80,0.35)]">
              <h2 className="font-serif font-bold text-[24px] md:text-[28px] mb-4">
                What happens next
              </h2>
              <p className="text-[15px] leading-[1.85] text-ink/80 mb-8 max-w-[68ch]">
                After you ask, your account is deactivated and then permanently
                deleted after {DELETION_DAYS} days. If you sign in during that
                time, we will ask whether you want to keep your account.
                Choosing to continue cancels the deletion.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-semibold text-[16px] mb-4">What we delete</h3>
                  <Bullets items={DELETED} />
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] mb-4">
                    What we may keep
                  </h3>
                  <Bullets items={KEPT} />
                </div>
              </div>

              <p className="text-[14px] leading-[1.75] text-ink-soft mt-8 max-w-[68ch]">
                For more detail on how we handle your data, read our{" "}
                <a href="/privacy-policy" className="font-medium text-wine-dark hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
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
