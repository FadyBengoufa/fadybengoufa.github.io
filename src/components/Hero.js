import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero({ pageInfo }) {
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
        <h2 className="md:text-sm text-xs text-gray-600 pb-4 uppercase tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="md:text-5xl text-3xl md:h-16 lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="red" cursorStyle="_" />
        </h1>
        <p className="md:text-lg text-xs md:px-32 px-12 py-10 tracking-[2px]">
          {pageInfo?.description}
        </p>
        <div className="pt-5">
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
