import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  /**
   * @returns
   * text: [string] typed text
   * NEW helper: {} helper flags
   */
  const [text, helper] = useTypewriter({
    words: [
      "Hey, This is fady.py",
      "Guy-who-loves-Basketball",
      "<LoveToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 200,
  });
  return (
    <div className="h-screen flex flex-col items-center space-y-8 justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="z-20">
        <h2 className="text-sm text-gray-600 pb-2 uppercase tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="red" cursorStyle="_" />
        </h1>
        <p className="text-lg md:px-32 px-12 py-10 tracking-[2px]">
          Currently building versatile projects for as stronger portfolio in the
          web development field. On the side learning more about Machine
          Learning & Deep Learning, as well as harnessing my problem solving
          skills on LeetCode.
        </p>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">about</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">experience</button>
          </Link>
          <Link href="#articles">
            <button className="heroBtn">articles</button>
          </Link>
          <Link href="#contact">
            <button className="heroBtn">contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
