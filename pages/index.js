import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import NavBar from "../components/navBar";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    // rendering Layout passing in home truthy, rendering home page; if iti s not passed in, only the template is implemented
    <div>
      <NavBar />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Welcome to the blog accompanying our{" "}
            <a href="https://www.youtube.com/@katalystkat/streams">
              Flourish to Nourish podcast
            </a>
            , where we explore the fascinating and current research on nutrition
            and how it impacts our health and well-being!
          </p>
          <p>
            In today's world, we are constantly bombarded with conflicting
            information about what we should eat, how much we should exercise,
            and what supplements we should take. It can be overwhelming to sort
            through all the noise and determine what is truly best for our
            health and wellbeing. That's where evidence-based nutrition comes
            in.
          </p>
          <p>
            Evidence-based nutrition is a way of making informed decisions about
            our diet and lifestyle based on the best available scientific
            evidence. This means relying on studies and research that have been
            conducted using rigorous scientific methods, such as randomized
            controlled trials, to determine what foods and nutrients are
            beneficial for our health.
          </p>
          <p>
            At our podcast, we invite scientists from around the world to speak
            about their groundbreaking findings on nutrition and health. By
            tuning in, you'll learn about the latest evidence-based nutrition
            research and discover how to apply it to your daily life. From
            superfoods to supplements, we'll separate fact from fiction, and
            help you make informed decisions for your optimal health.
          </p>
          <p>
            Our guests include registered dietitians, nutritionists, and
            scientists who have conducted rigorous studies on nutrition and
            health. By listening to their insights and expertise, you'll gain a
            deeper understanding of the science behind what you eat and how it
            affects your body.
          </p>
          <p>
            We believe that evidence-based decision making is crucial for making
            informed decisions about our health and wellbeing, particularly when
            it comes to nutrition. By relying on rigorous scientific evidence,
            we can create a diet and lifestyle that is tailored to our
            individual needs and goals, and avoid falling prey to fad diets and
            unproven health claims.
          </p>
          <p>
            So join us on our evidence-based nutrition journey, and let's
            prioritize evidence-based nutrition to nourish our bodies and live
            our healthiest lives. Tune into our podcast and browse the accompanying blog to
            learn how to make sense of the confusing world of nutrition science. Together, we'll
            discover the latest research and expert findings on all things
            nutrition and learn how to make the best choices for our optimal
            health!
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}></h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </div>
  );
}
