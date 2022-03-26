import Head from "next/head";

import { Footer } from "@components/Footer";
import { TopNav } from "@components/TopNav";

import styles from "./PageWrapper.module.css";

export const PageWrapper = ({
  headTitle,
  HeaderElement,
  MainContent,
  withGutters = true,
}) => (
  <div className={styles.pageContainer}>
    <Head>
      <title>{headTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <TopNav />

    {/* TODO: maybe move header + hero, etc above main? */}
    <div className={styles.mainWrapper}>
      <main className={withGutters ? "" : styles.noGutters}>
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
