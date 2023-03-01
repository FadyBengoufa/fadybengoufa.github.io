import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { fetchPageInfo } from "@/lib/fetchPageInfo";
import { fetchExperience } from "@/lib/fetchExperience";
import { fetchArticles } from "@/lib/fetchArticles";
import { fetchSocials } from "@/lib/fetchSocials";

export default function Home({ pageInfo, socials, experiences, articles }) {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-200">
        <Head>
          <title>Fady&apos;s Portfolio</title>
        </Head>

        <Header socials={socials} />

        {/* HERO */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="snap-center">
          <Experience experiences={experiences} />
        </section>

        {/* ARTICLES */}
        <section id="articles" className="snap-center">
          <Articles articles={articles} />
        </section>

        {/* CONTACT ME */}
        <section id="contact" className="snap-start">
          <Contact pageInfo={pageInfo} />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full">
            <div className="flex items-center justify-center">
              <ArrowUpCircleIcon className="w-10 h-10 opacity-20 hover:opacity-100 cursor-pointer transition-all ease-in-out duration-300" />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const experiences = await fetchExperience();
  const articles = await fetchArticles();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      pageInfo,
      socials,
      experiences,
      articles,
    },

    /**
     * getStaticProps will cache the data after the build time
     * and will be available to use. But when updating the
     * data using the headless CMS it will be outdated.
     *
     * and needs to be re-built and cached again.
     *
     * that's why we need the revalidate set to a certain
     * amount of time.
     *
     * Next Js will re-generate the page once every 10 seconds.
     *
     */

    revalidate: 10,
  };
}
