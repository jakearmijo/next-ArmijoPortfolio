import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'


import { getSortedPostsData } from '../../lib/utils'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  
    return (
          <Layout home>
            <Head>
              <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
              ))}
            </ul>
            </section>
            <h1>Introduction</h1>
              <p>Good Evening / Morning / Afternoon Ladies and Gentlemen,</p>
              <p>
              Hello from me to you. Welcome to my blog page and thank you for stopping in for a visit.Today's date is 4/20/21 and this beautiful creation has been made. I really am just looking for a playground to spend some time practicing things while continuing to hopefully increase my brand and most of all increase my confidence with coding. If you read the <Link href="/">About Me Section</Link> you know that I am a boot camp graduate and career switcher. I have been working at a startup for the past few months and want to continue to develop my skill set. 
              Again welcome to my page hope you find some value from something!
              </p>

              <p>Cheers,
              Jake Armijo</p>
            <h4>
            <Link href="/">
            <a>Back to home</a>
            </Link>
            </h4>
            
          </Layout>
    )
}
