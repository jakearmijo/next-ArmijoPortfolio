import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/utils";
import Script from "next/script";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Post({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>The Armijo Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" />
        <meta name="description" content="Jake Armijo blog site" />
        <link
          rel="canonical"
          href="https://www.jakearmijo.com/blog"
        />
      </Head>
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LLL7EVW69L"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LLL7EVW69L', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={`${utilStyles.nextLastPostBlog}`}></div>
      </section>
      <div className="blogIntroDiv">
        <h3>Hello User, Welcome to the grid...</h3>
        <section className="blog_section">
          <h2>__________________________________________</h2>
          <h2>Table of Contents</h2>
          <ul className="list">
            {allPostsData.map(({ id, date, title, tags }, idx) => (
              <Link href={`/blog/${id}`} key={idx}>
                <li className="listItem" key={id}>
                  <br />
                  <strong>Post Title:</strong> {title}
                  <br />
                  <strong>Post Date:</strong> {date}
                  <br />
                  <strong>Post Tags:</strong> {tags}
                  <h2>____________________________________</h2>
                  <br />
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
