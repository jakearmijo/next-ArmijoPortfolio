import Layout from "../../components/layout";
import Navbar from "../../components/Navbar";
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
        <title>Armijo Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={`${utilStyles.nextLastPostBlog}`}>
          <ButtonDefault title={lastPostBtn}/>
          <ButtonDefault title={tableOfContents}/>
          <ButtonDefault title={nextPostBtn}/>
        </div> 
      <div className='blogIntroDiv'>
        <h2>Hello User, Welcome to the grid... I mean my blog!</h2>
        <p>
        Welcome to my page and thank you for stopping in for a visit. Today's date is 4/20/21 and it will now also be this page's birthday. I really am just looking for a playground to spend some time practicing things while continuing to increase my confidence with coding. If you read the About Me Section you know that I am a boot camp graduate and career switcher. I have been working at a startup for the past few months and want to continue to develop my skill set. I came from the construction industry where I was a project manager/cost estimator. Growing up I played a ton of hockey. I now sub hockey with some competitive video games such as League of Legends and Fortnite. You can find me on Twitch, YouTube, Twitter, Instagram, and discord at FreakyMeasures. I have a beautiful wife and baby girl (Alex and Charlotte). I have 2 dogs. Bodhisattva is a beagle terrier mix and Winifred is a Yorkie Chihuahua mix. My developer career is still young and I am very excited to see what the future hold. I hope we can connect sometime feel free to reach out via the form on the main page, LinkedIn, or any other media you wish. Again welcome to my page and thank you for stopping by!
        </p>
        <p>Sincerly,{' '}Jake Armijo</p>
        <h4>
        </h4>
      </div>
      </section>
      <section>
      <ButtonDefault title={backtoHome}/>
      <h2>Blog - Table of Contents</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }, idx) => (
          <Link href={`/blog/${id}`} key={idx}>
          <li className={utilStyles.listItem} key={id}>
            #{idx + 1}
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