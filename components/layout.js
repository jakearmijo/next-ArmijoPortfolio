import Head from "next/head";
import Image from 'next/image'
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { 
  JakeMijLogo,
 } from '../public/images'
 import { myImageLoader } from '../lib/utils'

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
            <Image loader={myImageLoader}
              src={JakeMijLogo}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image loader={myImageLoader}
                  src={JakeMijLogo}
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
