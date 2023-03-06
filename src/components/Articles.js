import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

export default function Articles({articles}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="relative h-screen flex flex-col overflow-hidden max-w-full md:px-10 px-2 text-left items-center justify-evenly mx-auto"
    >
      <h3 className="absolute bottom-8 uppercase tracking-[20px] text-gray-500 md:text-2xl text-lg">
        Articles
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll md:p-8 p-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#292929] scrollbar-track-gray-100">
        {/* ARTICLES CARDS */}
        {articles?.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </motion.div>
  );
}
