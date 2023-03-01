import Image from "next/image";
import { urlFor } from "../../sanity";

function ArticleCard({ article }) {
  return (
    <article className="shadow rounded-lg flex flex-col flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px] snap-center cursor-pointer transition-opacity duration-200 overflow-hidden">
      <Image
        width="2000"
        height="300"
        className="w-full h-[300px] object-cover object-center"
        src={urlFor(article?.image).url()}
        alt=""
      />
      <div className="flex flex-col p-4">
        <h4 className="text-xl font-bold tracking-widest truncate">
          {article?.title}
        </h4>
        <p className="text-md font-light tracking-widest pt-2">
          {article?.summary}
        </p>
        <button className="group relative h-12 w-40 overflow-hidden rounded-lg bg-white text-sm shadow mt-8 self-end tracking-widest uppercase">
          <div className="absolute inset-0 w-3 bg-[#292929] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Read More
          </span>
        </button>
      </div>
    </article>
  );
}

export default ArticleCard;
