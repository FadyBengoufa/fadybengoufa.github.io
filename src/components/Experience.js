import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function Experience({ experiences }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="relative h-screen flex flex-col overflow-hidden max-w-full px-10 text-left items-center justify-evenly mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thumb-[#292929] scrollbar-track-gray-100 scrollbar-thin">
        {/* EXPERIENCE CARDS */}
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
