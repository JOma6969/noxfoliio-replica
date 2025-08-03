import { IoArrowUp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";

const Projects = () => {
  const projsData = [
    {
      img: "/project1.webp",
      subTtl: "product design",
      ttl: "mobile application design",
    },
    {
      img: "/project2.webp",
      subTtl: "product design",
      ttl: "Website Makeup design",
    },
    {
      img: "/project3.webp",
      subTtl: "design & branding",
      ttl: "brand identity motion design",
    },
    {
      img: "/project4.webp",
      subTtl: "graphics design",
      ttl: "creative graphics design",
    },
  ];

  return (
    <div className="px-4 text-white mt-10 py-10">
      <h3 className="text-[#b1b1b1] text-center">Latest Works</h3>
      <h1 className="sm:text-[45px] text-[30px] font-medium capitalize text-center">
        explore my popular <span className="text-[#c6ff00]">projects</span>
      </h1>

      {/* cards */}
      <div className="mt-12">
        {projsData.map((item, i) => (
          <div
            key={i}
            className={`lg:flex items-center ${
              i == 1 || i == 3 ? "flex-row-reverse" : ""
            } space-y-10 gap-20`}
          >
            <img src={item.img} alt="" className="lg:w-1/2" />
            <div className={`${i == 1 || i == 3 ? "" : ""}  w-[502px]`}>
              <h3 className="capitalize font-medium text-[#c6ff00]">
                {item.subTtl}
              </h3>
              <h1 className="lg:text-[48px] text-[22px] w-[502px] lg:mt-5 mt-1 capitalize leading-[49px]">
                {item.ttl}
              </h1>
              <p className="text-[#b1b1b1] mt-5 w-[334px] lg:w-full">
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis...
              </p>
              <div className="size-[55px] flex items-center justify-center border border-[#1e1e1e] rounded-full lg:mt-10 mt-5 mb-10 cursor-pointer text-[black] hover:text-white -rotate-320 bg-[#c6ff00] hover:bg-[#1e1e1e] transition-bg duration-300">
                <IoArrowUp />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 mx-auto bg-[#c6ff00] text-black px-5 rounded font-medium cursor-pointer py-3">
        <p>View More Projects</p>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Projects;
