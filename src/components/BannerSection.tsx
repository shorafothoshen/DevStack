import bannerImage from "../assets/banner-stack.png";

const BannerSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center md:px-20 mt-5 md:-mt-7">
      <div className="flex flex-col space-y-6">
        <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">
        Build Your Ideal <br />
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Development Stack
        </span>
      </h1>
      <p className="text-center px-2 md:text-left">
        Explore frontend, backend, database, and tooling options,<br className=" hidden md:block" /> compare them
        side by side, and put together the stack that fits your next project.
      </p>
      <div className="flex gap-4 justify-center md:justify-start">
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-3 rounded-lg text-white font-bold cursor-pointer">Explore Technologies</button>
        <button className="border border-gray-300 px-12 py-3 rounded-lg cursor-pointer hover:bg-gray-200">Learn More</button>
      </div>
      </div>
      <img className="" src={bannerImage} alt={bannerImage} />
    </div>
  );
};

export default BannerSection;
