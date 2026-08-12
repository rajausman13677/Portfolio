import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Usman Zaffar | LinkedIn & Upwork Growth Strategist",
  description:
    "Get in touch with Usman Zaffar. Book a free strategy call or send a message about your LinkedIn and Upwork growth goals.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
