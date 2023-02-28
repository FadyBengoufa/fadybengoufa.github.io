import { motion } from "framer-motion";

export default function ExperienceCard() {
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
        src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">React Developer</h4>
        <p className="font-bold text-2xl mt-1">UpWork</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png"
            alt=""
          />
        </div>
        <p className="py-5 uppercase text-gray-500">October 2022 - Present</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Some stuff I did.</li>
          <li>Some stuff I did.</li>
          <li>Some stuff I did.</li>
          <li>Some stuff I did.</li>
          <li>Some stuff I did.</li>
        </ul>
      </div>
    </article>
  );
}
