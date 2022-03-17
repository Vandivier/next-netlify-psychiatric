import Head from "next/head";

import { ContactComponent } from "@components/ContactComponent";
import { Footer } from "@components/Footer";
import { HeroHeader } from "@components/HeroHeader";
import { TopNav } from "@components/TopNav";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Netlify Psychiatric</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      <main>
        <HeroHeader />
        <ContactComponent />
      </main>

      <Footer />
    </div>
  );
}
