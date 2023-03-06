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
      className="relative h-screen flex flex-col overflow-hidden max-w-full md:px-10 px-2 text-left items-center justify-evenly mx-auto"
    >
      <h3 className="absolute bottom-8 uppercase tracking-[20px] text-gray-500 md:text-2xl text-lg">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll md:p-8 p-4 snap-x snap-mandatory scrollbar-thumb-[#292929] scrollbar-track-gray-100 scrollbar-thin">
        {/* EXPERIENCE CARDS */}
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
