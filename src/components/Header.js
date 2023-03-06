import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header({ socials }) {
  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto md:p-5 p-2 z-20">
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
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
        <SocialIcon
          url="#contact"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase md:inline-flex hidden text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
