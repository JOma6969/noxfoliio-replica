import { FaAngleRight } from "react-icons/fa6";

const Skills = () => {
  const langSet = [
    {
      name: "figma",
      img: "/figma.webp",
      percent: "95%",
    },
    {
      name: "framer",
      img: "/framer.webp",
      percent: "83%",
    },
    {
      name: "photoshop",
      img: "/photoshop.webp",
      percent: "93%",
    },
    {
      name: "wordpress",
      img: "/wordpress.webp",
      percent: "83%",
    },
    {
      name: "angular",
      img: "/angular.webp",
      percent: "65%",
    },
    {
      name: "webflow",
      img: "/webflow.webp",
      percent: "86%",
    },
    {
      name: "python",
      img: "/python.webp",
      percent: "62%",
    },
    {
      name: "sketch",
      img: "/sketch.webp",
      percent: "94%",
    },
  ];

  return (
    <div className="text-white relative lg:flex lg:justify-between px-4 py-25 bg-black mt-20">
      {/* first column */}
      <div>
        <h3 className="text-[#b1b1b1]">My Skills</h3>
        <h1 className=" mt-[10px] text-[28px] lg:text-[45px]">
          Let's Explore Popular <br />
          <span className="text-[#c6ff00]">Skills & Experience</span>
        </h1>
        <p className="mt-5 lg:w-[471px] text-[#b1b1b1]">
          Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium
          doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo
          inventore veritatis
        </p>
        <button className="bg-[#c6ff00] text-[#070707] w-[167px] h-[50px] flex justify-center mt-11 rounded-[16px] font-medium">
          <a href="https://google.com/" className="flex items-center gap-3">
            <p>Learn More</p>
            <FaAngleRight />
          </a>
        </button>
      </div>

      {/* last column */}
      <div className="grid lg:grid-cols-4 grid-cols-2 mt-10 lg:mt-0 gap-7">
        {langSet.map((item, i) => (
          // language and tools card
          <div
            key={i}
            className="bg-[rgb(31,31,31)] group hover:border-[#c6ff00] flex flex-col items-center border border-[rgb(53,53,53)] pt-[23px] pb-[10px] px-[10px] rounded-[14px]"
          >
            <img src={item.img} className="size-[55px]" alt="" />
            <h3 className="my-5 text-lg capitalize">{item.name}</h3>
            <button className="w-[140.1px] group-hover:bg-[#c6ff00] cursor-pointer shadow-xl group-hover:text-black font-bold text-lg text-[#b1b1b1]  bg-[rgb(19,19,19)] rounded-[14px] p-[10px]">
              {item.percent}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
