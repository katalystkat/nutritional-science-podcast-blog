import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props : {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    // rendering Layout passing in home truthy, rendering home page; if iti s not passed in, only the template is implemented
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to the blog accompanying our Nutritional Science podcast, where we explore the fascinating and current research on nutrition and how it impacts your health and well-being!</p>
        <p>
          We'll be your guides and colleagues through the confusing world of labels, marketing claims, and scientific jargon, helping YOU make sense of it all in order to make informed decisions for your optimal health. From superfoods to supplements, we'll separate fact from fiction! 
        </p>
        <p>
          So grab a bowl of greens and let's get started! Together, we'll discover the latest research and expert findings on all things nutrition and learn how to make the best choices for our optimal health! 
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}></h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}