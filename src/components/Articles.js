import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="relative h-screen flex flex-col overflow-hidden max-w-full md:px-10 px-2 text-left items-center justify-evenly mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Articles
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#292929]  scrollbar-track-gray-100">
        {/* ARTICLES CARDS */}
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </motion.div>
  );
}
