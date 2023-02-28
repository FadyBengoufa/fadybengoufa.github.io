import Image from "next/image";

function ArticleCard() {
  return (
    <article className="shadow rounded-lg flex flex-col flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px] snap-center cursor-pointer transition-opacity duration-200 overflow-hidden">
      <Image
        width="1500"
        height="300"
        className="w-full h-[300px] object-cover object-center"
        src="https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2021/04/project-management-challenges.jpg"
        alt=""
      />
      <div className="flex flex-col p-4">
        <h4 className="text-xl font-bold tracking-widest truncate">
          Path-finding Algorithm Visualizer
        </h4>
        <p className="text-md font-light tracking-widest pt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever
          since the 1500s, when an unknown printer took...
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
