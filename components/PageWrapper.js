import Head from "next/head";

import { Footer } from "@components/Footer";
import { TopNav } from "@components/TopNav";

export const PageWrapper = ({ headTitle, HeaderElement, MainContent }) => (
  <div className="pageContainer">
    <Head>
      <title>{headTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <TopNav />

    {/* TODO: maybe move header + hero, etc above main? */}
    <div className="mainWrapper">
      <main>
        {HeaderElement ? (
          <HeaderElement />
        ) : (
          <header>
            <h1>{headTitle}</h1>
          </header>
        )}

        {MainContent ? <MainContent /> : null}
      </main>
    </div>

    <Footer />
  </div>
);
