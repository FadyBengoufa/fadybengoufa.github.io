import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-200">
        <Head>
          <title>Fady`&apos;`s Portfolio</title>
        </Head>

        <Header />

        {/* HERO */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="snap-center">
          <Experience />
        </section>

        {/* ARTICLES */}
        <section id="articles" className="snap-center">
          <Articles />
        </section>

        {/* CONTACT ME */}
        <section id="contact" className="snap-start">
          <Contact />
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
