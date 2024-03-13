import React from "react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "../contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

function Page() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={mulish.className}>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We&apos;d love to hear <span> from you </span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56351.80257379088!2d79.08778567310408!3d28.024852956210417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397545b8ad7dec33%3A0x995aeefd69565aa5!2sBudaun%2C%20Uttar%20Pradesh%20243601!5e0!3m2!1sen!2sin!4v1710139907696!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Page;
