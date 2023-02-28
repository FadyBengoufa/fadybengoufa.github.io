import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto p-5 z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          target="_blank"
          url="https://www.facebook.com/FadyAyb"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://twitter.com/fady_py"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://github.com/FadyBengoufa"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/fady-ayoub-bengoufa"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://www.instagram.com/fikriyat_podcast"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://open.spotify.com/show/1syy2OZtaUBykV41wD8hnV"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase md:inline-flex hidden text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
