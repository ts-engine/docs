import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const Logo = () => {
  return (
    <svg
      width="130"
      height="154"
      viewBox="0 0 130 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ts-engine logo</title>
      <rect width="130" height="130" rx="10" fill="white" />
      <circle
        cx="77.7631"
        cy="110.763"
        r="39.2631"
        fill="white"
        stroke="#007ACC"
        stroke-width="7"
      />
      <circle
        cx="77.7631"
        cy="110.763"
        r="17.8815"
        fill="#007ACC"
        stroke="#007ACC"
        stroke-width="7"
      />
      <circle
        cx="34.5"
        cy="37.5"
        r="18.5"
        fill="white"
        stroke="#007ACC"
        stroke-width="6"
      />
      <circle cx="35" cy="37" r="7.5" fill="#007ACC" stroke="#007ACC" />
      <path
        d="M17 43.5L40 123M49 26L103 80.5"
        stroke="#007ACC"
        stroke-width="6"
      />
    </svg>
  );
};

const features = [
  {
    title: <>Build</>,
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={styles.featureImage}
        >
          <title>build logo</title>
          <path d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z" />
        </svg>
      );
    },
    description: (
      <>Build Node.js applications and libraries using TypeScript.</>
    ),
  },
  {
    title: <>Lint</>,
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className={styles.featureImage}
        >
          <title>lint logo</title>
          <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
        </svg>
      );
    },
    description: (
      <>Maintain clean and consistent code during your packages lifetime.</>
    ),
  },
  {
    title: <>Test</>,
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 512"
          className={styles.featureImage}
        >
          <title>test logo</title>
          <path d="M477.7 186.1L309.5 18.3c-3.1-3.1-8.2-3.1-11.3 0l-34 33.9c-3.1 3.1-3.1 8.2 0 11.3l11.2 11.1L33 316.5c-38.8 38.7-45.1 102-9.4 143.5 20.6 24 49.5 36 78.4 35.9 26.4 0 52.8-10 72.9-30.1l246.3-245.7 11.2 11.1c3.1 3.1 8.2 3.1 11.3 0l34-33.9c3.1-3 3.1-8.1 0-11.2zM318 256H161l148-147.7 78.5 78.3L318 256z" />
        </svg>
      );
    },
    description: <>Ensure correctness with a test runner.</>,
  },
  {
    title: <>Typecheck</>,
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={styles.featureImage}
        >
          <title>typecheck logo</title>
          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
        </svg>
      );
    },
    description: <>Typecheck code and produce type declarations.</>,
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={classnames("col col--4 col--6", styles.feature)}>
      {<div className="text--center">{React.createElement(icon)}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Docs"
      description="Power TypeScript packages and reduce your config overhead"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Logo />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--lg",
                styles.heroLink
              )}
              to={useBaseUrl("docs/installation")}
            >
              Getting started
            </Link>
            <Link
              className={classnames(
                "button button--outline button--lg",
                styles.heroLink
              )}
              to={useBaseUrl("docs/command-quick-reference")}
            >
              Quick reference
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
