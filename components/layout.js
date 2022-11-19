import Head from "next/head";
import Image from 'next/image'
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { 
  JakeMijLogo,
 } from '../public/images'
import {myImageLoader} from '../lib/utils'

const name = "Jake Armijo";
export const siteTitle = "Armijo - Blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name={name} content={siteTitle} />
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-LLL7EVW69L"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-LLL7EVW69L');
        </script> */}
      </Head>
      <Navbar/>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              loader={myImageLoader}
              src={JakeMijLogo}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
              width="800"
              height="600"
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  loader={myImageLoader}
                  src={JakeMijLogo}
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                  width="800"
                  height="600"
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main className="blogIntroDiv">{children}</main>
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
