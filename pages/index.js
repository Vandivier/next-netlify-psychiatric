import Head from "next/head";

import { Footer } from "@components/Footer";
import { HeroHeader } from "@components/HeroHeader";
import { TopNav } from "@components/TopNav";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      <main>
        <HeroHeader />
        <p className="description">
          Get started by editing <code>pages/foobar.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
