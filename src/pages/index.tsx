import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {
  AltLogoSvg,
  QuickSetupSvg,
  ReducedConfigSvg,
  FewerDependenciesSvg,
} from "../components/svgs";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Quicker to setup</>,
    icon: () => {
      return <QuickSetupSvg className={styles.featureImage} />;
    },
    description: (
      <>
        Install a single dependency and you're up and running so you have more
        time to focus on writing code that matters
      </>
    ),
  },
  {
    title: <>Reduced configuration</>,
    icon: () => {
      return <ReducedConfigSvg className={styles.featureImage} />;
    },
    description: (
      <>
        ts-engine provides sensible configuration out the box, you often won't
        even need to create configuration files for building, linting, testing
        and typechecking.
      </>
    ),
  },
  {
    title: <>Fewer dependencies</>,
    icon: () => {
      return <FewerDependenciesSvg className={styles.featureImage} />;
    },
    description: (
      <>
        ts-engine provides build, lint, test and typechecking functionality in a
        single dependency
      </>
    ),
  },
];

const showcases = [
  {
    title: <>Productive local development</>,
    description: (
      <>
        <p>
          Build and run Node.js applications with the{" "}
          <code>ts-engine start</code> command.
        </p>
        <ul>
          <li>
            Watch mode via <code>--watch</code> option
          </li>
          <li>User friendly error display</li>
          <li>
            Forward arguments to the application via <code>--args</code> option
          </li>
        </ul>
      </>
    ),
    imgSrc: "/img/gifs/start.gif",
    imgAlt: "Productive local development gif",
  },
  {
    title: <>Powerful compilation</>,
    description: (
      <>
        <p>
          Build Node.js applications and JavaScript libraries suitable for
          deployment and publishing with the <code>ts-engine build</code>{" "}
          command.
        </p>
        <ul>
          <li>Libraries compile to CommonJs and ES Modules by default</li>
          <li>
            Watch mode via <code>--watch</code> option
          </li>
          <li>
            Enforces library <code>package.json</code> is correctly configured
            during build
          </li>
          <li>
            Supports Babel configuration, check out the Babel docs here:{" "}
            <a href="https://babeljs.io/">https://babeljs.io/</a>
          </li>
        </ul>
      </>
    ),
    imgSrc: "/img/gifs/build.gif",
    imgAlt: "Deployable builds gif",
  },
  {
    title: <>Type safe with TypeScript</>,
    description: (
      <>
        <p>
          Eliminate and entire class of bugs with strong type checking coutesy
          of TypeScript with the <code>ts-engine typecheck</code> command.
        </p>
        <ul>
          <li>Fast type checking using the TypeScript compiler</li>
          <li>User friendly error display</li>
          <li>Recognises JSX syntax</li>
          <li>
            Check out the TypeScript docs here:{" "}
            <a href="https://www.typescriptlang.org/">
              https://www.typescriptlang.org/
            </a>
          </li>
        </ul>
      </>
    ),
    imgSrc: "/img/gifs/typecheck.gif",
    imgAlt: "Type safe with TypeScript gif",
  },
  {
    title: <>Ensure correctness by writing tests</>,
    description: (
      <>
        <p>
          Utilize a comprehensive test experience powered by Jest with the{" "}
          <code>ts-engine test</code> command.
        </p>
        <ul>
          <li>Forwards arguments onto Jest</li>
          <li>Fast, reliable test runner</li>
          <li>
            Check out the Jest docs here:{" "}
            <a href="https://jestjs.io/">https://jestjs.io/</a>
          </li>
        </ul>
      </>
    ),
    imgSrc: "/img/gifs/test.gif",
    imgAlt: "build gif",
  },
  {
    title: <>Consistent, safe and beautiful code</>,
    description: (
      <>
        <p>
          Powerful linting via ESLint and with a comprehensive lint config out
          the box with the <code>ts-engine lint</code> command.
        </p>
        <ul>
          <li>Supports ESLint configuration</li>
          <li>Prettier and React configuration included</li>
          <li>
            Linting isn't just for formatting, it can also catch security issues
            and rule out potential bugs
          </li>
          <li>
            Check out the ESLint docs here:{" "}
            <a href="https://eslint.org/">https://eslint.org/</a>
          </li>
        </ul>
      </>
    ),
    imgSrc: "/img/gifs/lint.gif",
    imgAlt: "build gif",
  },
];

function Section({ children }) {
  return (
    <section className={classnames("container", styles.section)}>
      {children}
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {<div className="text--center">{React.createElement(icon)}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Showcase({ title, description, imgSrc, imgAlt, position }) {
  return (
    <Section>
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: position === "left" ? "row-reverse" : "row",
        }}
      >
        <div className={"col col--6"}>
          <div>
            <h3 className={styles.showcaseTitle}>{title}</h3>
            <p className={styles.showcaseText}>{description}</p>
          </div>
        </div>
        <div className={"col col--6"}>
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </Section>
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
          <AltLogoSvg />
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
            <Link
              className={classnames(
                "button button--outline button--lg",
                styles.heroLink
              )}
              to="https://github.com/ts-engine/ts-engine/tree/master/packages/%40examples"
            >
              Examples
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Section>
          <h3 className={styles.sectionHeader}>What is ts-engine?</h3>
          <p>
            ts-engine is a tool that provides local development, build,
            typechecking, test and lint functionality for TypeScript packages
            via an easy to use command line interface. It supports building
            Node.js applications and JavaScript libraries.{" "}
            <strong>This tool is not designed for building websites.</strong>
          </p>
        </Section>
        {features && features.length && (
          <Section>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </Section>
        )}
        {showcases && showcases.length && (
          <>
            {showcases.map((props, idx) => (
              <Showcase
                key={idx}
                {...props}
                position={idx % 2 ? "left" : "right"}
              />
            ))}
          </>
        )}
      </main>
    </Layout>
  );
}

export default Home;
