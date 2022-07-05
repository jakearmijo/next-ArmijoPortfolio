import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { ButtonDefault } from '../../UI'
import { getSortedPostsData } from '../../lib/utils'

export async function getStaticProps() {
  
  const allPostsData = getSortedPostsData()
  
  return {
    props: {
      allPostsData
    }
  }
}

export default function Post( { allPostsData } ) {
  const lastPostBtn = 'Last Post'
  const nextPostBtn = 'Next Post'
  const backtoHome = 'Back to Home Page'
  const tableOfContents = 'Table Of Contents'
  return (
    <Layout home>
      <Head>
        <title>The Mij Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={`${utilStyles.nextLastPostBlog}`}>
        </div> 
      <div className='blogIntroDiv'>
        <h3>Hello User, Welcome to the grid...</h3>
      </div>
      </section>
      <section>
      <h2>__________________________________________</h2>
      <h2>Table of Contents</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }, idx) => (
          <Link href={`/blog/${id}`} key={idx}>
          <li className={utilStyles.listItem} key={id}>
            <br />
            <strong>Post Title:</strong> {title}
            <br />
            <strong>Post Date:</strong> {date}
            <h6>_______________________</h6>
            <br />
          </li>
          </Link>
        ))}
      </ul>
      </section>
    </Layout>
)
}