import Head from "next/head";

import { ContactComponent } from "@components/ContactComponent";
import { Footer } from "@components/Footer";
import { TopNav } from "@components/TopNav";

export default function ContactPage() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      <div className="mainWrapper">
        <main>
          <ContactComponent />
        </main>
      </div>

      <Footer />
    </div>
  );
}
