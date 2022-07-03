import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import Image from 'next/image'
import { myImageLoader, getAllPostIds, getPostData } from '../../lib/utils'


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

export default function Post({ postData, myImageLoader }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className='blogIntroDiv' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}