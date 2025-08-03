import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  const achievements = [
    {
      no: "13+",
      no_role: "Years of experience",
    },
    {
      no: "8K+",
      no_role: "Projects Complete",
    },
    {
      no: "99%",
      no_role: "Client Satisfaction",
    },
  ];

  return (
    <section
      id="home"
      className="text-white lg:flex items-center justify-between px-4 mt-15"
    >
      {/* first column */}
      <div>
        <h2 className="!text-[#f5f5f5]/35 font-semibold text-[35px]">
          Hello, I'm
        </h2>
        <h1 className="text-[#c6ff00] font-bold text-[54px]">Roy C. Jones</h1>
        <h3 className="text-[54px] mb-4">Web Designer.</h3>
        <p className="w-[394px] text-[#b1b1b1]">
          We denounce with righteous indignation dislike demoralized by the
          charms of pleasure
        </p>
        <div className="flex items-center gap-8 mt-7">
          <button className="flex gap-2 justify-center w-[140.1px] h-[50px] bg-[#c6ff00] text-black font-semibold text-[15px] rounded-[15px] cursor-pointer items-center">
            <p>Hire Me</p>
            <FaAngleRight />
          </button>
          <button className="flex gap-2 justify-center text-white font-semibold text-[15px] rounded-[15px] cursor-pointer items-center">
            <p>Download resume</p>
            <FaAngleRight color="#c6ff00" />
          </button>
        </div>
      </div>

      {/* second column */}
      <div className="relative -z-1 h-[588.792px] mt-20 lg:mt-0 overflow-hidden rounded-full size-fit">
        <img
          className="h-[588.792px] object-cover z-0 rounded-full"
          src="/avatr.webp"
          alt="my picture"
        />
        <div className="bg-black absolute rounded-full -z-1 size-70 top-20 left-10" />
        <div className="bg-[#c6ff00] absolute h-70 w-[500px] -z-1 rotate-120 -bottom-10 -right-10" />
      </div>

      {/* last column */}
      <div className="bg-[rgb(7,7,7)] grid grid-rows-3 rounded-[16px] h-[413.5px] mt-20 lg:mt-0 lg:w-[241px] px-10 text-[#b1b1b1]">
        {achievements.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col justify-center ${
              i === 2 ? "" : "border-b-[1.5px] border-b-[#1f1f1f]"
            }`}
          >
            <h2 className="text-[#cdff00] font-bold text-[42px]">{item.no}</h2>
            <p>{item.no_role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
