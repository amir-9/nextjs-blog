import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>AmirHussein Aghamohammdi, junior react/nextJs/frontend developer</p>
        <p>21 years old and looking to move forward</p>
      </section>
    </Layout>
  );
}
