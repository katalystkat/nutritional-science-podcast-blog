import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
    // paths will now contain the array of known paths returned by getAllPostIds() which include the params defined by pages/posts/[id].js
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
export default function Post({postData}) {
  return (
  <Layout>
    <Head>
        <title>{postData.title}</title>
    </Head>
    <article>
    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
    <div className={utilStyles.lightText}>
    <Date dateString={postData.date} />
    </div>
    <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
  );
}