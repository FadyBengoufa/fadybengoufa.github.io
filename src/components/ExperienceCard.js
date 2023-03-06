import { motion } from "framer-motion";
import { urlFor } from "../../sanity";

export default function ExperienceCard({ experience }) {
  return (
    <article className="flex flex-col flex-shrink-0 rounded-lg items-center space-y-7 w-[320px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] md:p-10 p-4 text-white opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="md:w-32 w-20 md:h-32 h-20 xl:w-[100px] xl:h-[100px] rounded-full object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="md:text-4xl text-xl md:text-left text-center font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-lg md:text-left text-center mt-1">
          {experience?.companyName}
        </p>
        <p className="py-5 uppercase text-gray-500 sm:text-md text-sm md:text-left text-center">
          {new Date(experience?.dateStarted).toLocaleString("en-DZ", {
            year: "numeric",
            month: "long",
          })}{" "}
          -{" "}
          {experience.isCurrentlyWorking
            ? "Present"
            : new Date(experience?.dateEnded).toLocaleString("en-DZ", {
                year: "numeric",
                month: "long",
              })}
        </p>
        <div className="flex w-4/5 sm:w-full mx-auto space-x-2 mb-6">
          {experience?.skills?.map((skill, index) => (
            <div
              key={index}
              className="text-xs inline-flex items-center font-bold leading-sm md:px-3 px-2 py-1 truncate md:uppercase capitalize rounded-full bg-white text-gray-700 border"
            >
              <span className="truncate">{skill}</span>
            </div>
          ))}
        </div>
        <ul className="w-4/5 sm:w-full mx-auto list-disc space-y-4 md:text-md text-sm pr-10 md:max-h-48 max-h-32 overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-500">
          {experience?.points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
