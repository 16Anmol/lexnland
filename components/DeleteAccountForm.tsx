"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { APP_NAME, DELETION_DAYS, PACKAGE_ID, SUPPORT_EMAIL } from "@/lib/legal";

const FIELD =
  "w-full px-4 py-3.5 rounded-xl border border-ink/[0.12] bg-bg text-sm focus:outline-none focus:border-wine focus:ring-4 focus:ring-wine/10 transition";
const LABEL = "block text-[12.5px] font-semibold mb-2 text-ink-soft";

const SUBJECT = `Account deletion request — ${APP_NAME}`;

export default function DeleteAccountForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const lines = [
      `Please permanently delete my ${APP_NAME} account (${PACKAGE_ID}) and the personal data linked to it.`,
      "",
      `Registered email: ${get("email")}`,
    ];
    if (get("name")) lines.push(`Name: ${get("name")}`);
    if (get("phone")) lines.push(`Mobile number: ${get("phone")}`);
    if (get("reason")) lines.push(`Reason (optional): ${get("reason")}`);
    lines.push(
      "",
      `I understand my account will be permanently deleted after ${DELETION_DAYS} days, and that signing in during that time lets me cancel the deletion.`
    );

    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      SUBJECT
    )}&body=${encodeURIComponent(lines.join("\r\n"))}`;
    setPrepared(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md p-7 md:p-9 shadow-[0_30px_70px_-40px_rgba(127,46,80,0.35)]"
    >
      <h2 className="font-serif font-bold text-[24px] mb-2">Request deletion</h2>
      <p className="text-[14px] leading-[1.7] text-ink-soft mb-6">
        This opens an email to {SUPPORT_EMAIL} with your request filled in. Send
        it from the email address you use for {APP_NAME} so we can confirm the
        account is yours.
      </p>

      <div className="mb-5">
        <label htmlFor="del-email" className={LABEL}>
          Registered email address
        </label>
        <input
          id="del-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={FIELD}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="del-name" className={LABEL}>
            Name on the account (optional)
          </label>
          <input id="del-name" name="name" type="text" autoComplete="name" className={FIELD} />
        </div>
        <div>
          <label htmlFor="del-phone" className={LABEL}>
            Mobile number (optional)
          </label>
          <input id="del-phone" name="phone" type="tel" autoComplete="tel" className={FIELD} />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="del-reason" className={LABEL}>
          Reason for leaving (optional)
        </label>
        <textarea
          id="del-reason"
          name="reason"
          rows={3}
          className={`${FIELD} resize-y min-h-[90px]`}
        />
      </div>

      <label className="flex items-start gap-3 mb-6 text-[13.5px] leading-[1.6] text-ink/80 cursor-pointer">
        <input
          type="checkbox"
          name="confirm"
          required
          className="mt-1 w-4 h-4 accent-[#A63B69] flex-shrink-0"
        />
        <span>
          I understand my account, listings and verification documents will be
          permanently deleted after {DELETION_DAYS} days.
        </span>
      </label>

      <button
        type="submit"
        className="w-full inline-flex justify-center items-center gap-2.5 px-7 py-4 rounded-full bg-wine text-white font-semibold text-[14.5px] shadow-wine transition-all duration-300 hover:bg-wine-dark"
      >
        <Mail size={16} /> Request account deletion
      </button>

      {prepared && (
        <div
          role="status"
          className="mt-5 rounded-sm border-l-[3px] border-wine bg-pink/60 px-5 py-4 text-[13.5px] leading-[1.7] text-ink/85"
        >
          Your email app should now be open with the request ready. Press Send
          to submit it — nothing is sent until you do. If nothing opened, email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-wine-dark hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          from your registered address with the subject “{SUBJECT}”.
        </div>
      )}
    </form>
  );
}
