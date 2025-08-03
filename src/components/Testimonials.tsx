import { IoArrowUp } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Kenneth J. Dutton",
      img: "/author2.webp",
      testimony:
        "Nam libero tempore cumsoluta nobise est eligendi optio cumque nihil impedit quominus idquod maxime placeat possimus",
      role: "web developer",
    },
    {
      name: "Rodolfo E. Shannon",
      img: "/author1.webp",
      testimony:
        "Nam libero tempore cumsoluta nobise est eligendi optio cumque nihil impedit quominus idquod maxime placeat possimus",
      role: "CEO & Founder",
    },
    {
      name: "Kenneth J. Dutton",
      img: "/author2.webp",
      testimony:
        "Nam libero tempore cumsoluta nobise est eligendi optio cumque nihil impedit quominus idquod maxime placeat possimus",
      role: "web developer",
    },
    {
      name: "Rodolfo E. Shannon",
      img: "/author1.webp",
      testimony:
        "Nam libero tempore cumsoluta nobise est eligendi optio cumque nihil impedit quominus idquod maxime placeat possimus",
      role: "CEO & Founder",
    },
    {
      name: "Kenneth J. Dutton",
      img: "/author2.webp",
      testimony:
        "Nam libero tempore cumsoluta nobise est eligendi optio cumque nihil impedit quominus idquod maxime placeat possimus",
      role: "web developer",
    },
    {
      name: "Rodolfo E. Shannon",
      img: "/author1.webp",
      testimony:
        "Nam libero tempore cumsoluta nobise est eligendi optio cumque nihil impedit quominus idquod maxime placeat possimus",
      role: "CEO & Founder",
    },
  ];

  return (
    <div className="text-white lg:flex justify-between px-4 mt-10 items-center py-20 bg-black">
      {/* left column */}
      <div>
        <h3 className="text-[#b1b1b1] font-semibold">Client's Testimonials</h3>
        <h1 className="lg:text-[45px] text-[28px] leading-[60px] mt-3 font-semibold">
          I've 1253+ Clients <br className="hidden lg:block" />
          <span className="text-[#c6ff00]">Feedback</span>
        </h1>
        <p className="my-7 text-[#b1b1b1] w-[411px]">
          Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore
          veritatis
        </p>
        <div className="flex gap-5">
          <button className="bg-transparent flex items-center justify-center rounded-full cursor-pointer hover:text-black transition-colors hover:bg-[#c6ff00] duration-300 size-[55px] rotate-320 border-[#b1b1b1] border">
            <IoArrowUp size={20} />
          </button>
          <button className="bg-transparent flex items-center justify-center rounded-full cursor-pointer hover:text-black transition-colors hover:bg-[#c6ff00] duration-300 mr-7 size-[55px] -rotate-320 border-[#b1b1b1] border">
            <IoArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* last column */}
      <div className="lg:w-[759px] mt-10">
        <Swiper
          spaceBetween={55}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{ 1024: { width: 1024, slidesPerView: 2 } }}
        >
          {testimonialData.map((item, i) => (
            <SwiperSlide
              key={i}
              className="bg-[#1f1f1f]/70 hover:bg-[#1f1f1f] border-[rgb(53,53,53)] border cursor-default group rounded-[16px] p-[50px]"
            >
              <div className="w-fit relative h-24 mx-auto">
                <div className="absolute group-hover:bg-[#c6ff00] group-hover:text-black top-5 -left-10 size-15 flex items-center justify-center rounded-full bg-black ">
                  <FaQuoteLeft size={24} />
                </div>
                <img src={item.img} alt="" />
              </div>
              <p className="text-center text-[#b1b1b1]">{item.testimony}</p>
              <h2 className="text-center mt-[30px] font-semibold text-[22px]">
                {item.name}
              </h2>
              <h5 className="text-center mt-2 text-sm text-[#c6ff00] capitalize">
                {item.role}
              </h5>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
