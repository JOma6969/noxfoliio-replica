import { BiHealth } from "react-icons/bi";
import { IoArrowUp } from "react-icons/io5";

const Resume = () => {
  const width = window.innerWidth;

  return (
    <div className="text-white lg:flex justify-between py-20 px-4">
      {/* left column */}
      <div className="lg:mt-[90px] mt-[30px] bg-[rgb(31,31,31)] lg:size-[270px] size-[180px] rounded-full flex items-center justify-center border-[rgb(53,53,53)]">
        <BiHealth size={width < 500 ? 93 : 120} color="#c6ff00" />
      </div>

      {/* right column */}
      <div className="mt-15 lg:mt-0">
        <h4 className="capitalize mb-[15px] text-[#b1b1b1]">my resume</h4>
        <h1 className="lg:w-[920px] capitalize leading-[51.2px] text-[28px] lg:text-[45px]">
          Real
          <span className="capitalize text-[#c6ff00]">
            &nbsp;Problem Solutions <br className="hidden lg:block" />
          </span>
          Experience
        </h1>
        <div className="px-10 py-[50px] lg:flex justify-between bg-[rgb(31,31,31)] mt-12 rounded-[15px]">
          {/* left column */}
          <div className="lg:border-r border-r-[#3c3838] lg:pr-30">
            <div className="flex gap-5 w-full group cursor-default">
              <div className="bg-[#070707] transition-all duration-500 text-[##ffffff59] group-hover:text-black group-hover:bg-[#c6ff00] size-10 rounded-full -rotate-320 flex items-center justify-center">
                <IoArrowUp size={21} />
              </div>
              <div>
                <h4 className="mb-5 text-[#b1b1b1]">2021 - PRESENT</h4>
                <h2 className="text-[20px] lg:text-2xl w-full">
                  Lead Product Designer
                </h2>
                <h4 className="mt-4 text-[#b1b1b1]">Google</h4>
              </div>
            </div>
            <div className="flex gap-5 group cursor-default mt-12">
              <div className="bg-[#070707] transition-all duration-500 text-[##ffffff59] group-hover:text-black group-hover:bg-[#c6ff00] size-10 rounded-full -rotate-320 flex items-center justify-center">
                <IoArrowUp size={21} />
              </div>
              <div>
                <h4 className="mb-5 text-[#b1b1b1]">2018 - 2021</h4>
                <h2 className="text-[20px] lg:text-2xl">
                  Senior Product Designer
                </h2>
                <h4 className="mt-4 text-[#b1b1b1]">Webflow</h4>
              </div>
            </div>
          </div>

          {/* right column */}
          <div>
            <div className="flex gap-5 mt-10 lg:mt-0 group cursor-default">
              <div className="bg-[#070707] transition-all duration-500 text-[##ffffff59] group-hover:text-black group-hover:bg-[#c6ff00] size-10 rounded-full -rotate-320 flex items-center justify-center">
                <IoArrowUp size={21} />
              </div>
              <div>
                <h4 className="mb-5 text-[#b1b1b1]">2016 - 2018</h4>
                <h2 className="text-[20px] lg:text-2xl">
                  Junior UI/UX Designer
                </h2>
                <h4 className="mt-4 text-[#b1b1b1]">LinkedIn</h4>
              </div>
            </div>
            <div className="flex gap-5 group cursor-default mt-12">
              <div className="bg-[#070707] transition-all duration-500 text-[##ffffff59] group-hover:text-black group-hover:bg-[#c6ff00] size-10 rounded-full -rotate-320 flex items-center justify-center">
                <IoArrowUp size={21} />
              </div>
              <div>
                <h4 className="mb-5 text-[#b1b1b1]">2014 - 2016</h4>
                <h2 className="text-[20px] lg:text-2xl">Graphics Designer</h2>
                <h4 className="mt-4 text-[#b1b1b1]">Webtend</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
