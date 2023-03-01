import { motion } from "framer-motion";
import { urlFor } from "../../sanity";

export default function ExperienceCard({ experience }) {
  return (
    <article className="flex flex-col flex-shrink-0 rounded-lg items-center space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 text-white opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[100px] xl:h-[100px] rounded-full object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.companyName}</p>
        <p className="py-5 uppercase text-gray-500">
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
        <div className="flex space-x-2 mb-6">
          {experience?.skills?.map((skill, index) => (
            <div
              key={index}
              className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
            >
              {skill}
            </div>
          ))}
        </div>
        <ul className="list-disc space-y-4 text-md pr-10 max-h-48 overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-500">
          {experience?.points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
