import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { useDebugValue } from "react";

// getStaticPaths here is the NextJS specific API that tells Next at build, the path to generate for that specific post.
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    // paths here is being written w ES6 shorthand; {paths} is equivalent to {paths: paths} : is actually object key
    fallback: false,
  };
  // paths will now contain the array of known paths returned by getAllPostIds() which include the params defined by pages/posts/[id].js
}
// context = {
//     params: randomValue,
// }
// getStaticProps(context.params)
// Instead of passing in context.params as an argument, we are utilziing object destructuring to directly access params key within the passed in argument.

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
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
