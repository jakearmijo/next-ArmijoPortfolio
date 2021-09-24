import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Jake Armijo";
export const siteTitle = "Jake Armijo dot com";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jake Armijo dot com"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src={require('/images/JAKEMIJUPDATE.svg')}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src={require('/images/JAKEMIJUPDATE.svg')}
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Back to Blog</a>
          </Link>
        </div>
      )}
    </div>
  );
}
