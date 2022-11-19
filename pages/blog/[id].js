import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/utils'
import Script from 'next/script'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} - Armijo - Blog</title>
        <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-LLL7EVW69L"></Script>
        <Script
          id='google-analytics'
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
      </Head>
      <div className='blogIntroDiv' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}