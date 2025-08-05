import { IoArrowUp } from "react-icons/io5";

const Blog = () => {
  const data = [
    {
      img: "/blog-01.jpg",
      ttl: "A Beginner's Guide to Running Adventures",
    },
    {
      img: "/blog-02.jpg",
      ttl: "Mastering the Act of Sustainable Living",
    },
    {
      img: "/blog-03.jpg",
      ttl: "Embracing Minimalism: A Lifestyle Revolution",
    },
    {
      img: "/blog-04.jpg",
      ttl: "Savoring the Art of Homemade Sushi...",
    },
  ];

  return (
    <section id="blog" className="px-4 text-white mt-10 py-20 bg-black">
      <h2 className="text-[#b1b1b1] text-center">News & Blog</h2>
      <h1 className="capitalize text-center text-[28px] lg:text-[48px]">
        latest news & <span className="text-[#c6ff00]">blog</span>
      </h1>
      <div className="lg:grid lg:grid-cols-2 mt-[70px] gap-7">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[rgb(31,31,31)] mb-7 lg:mb-0 border border-[rgb(53,53,53)] hover:border-[#c6ff00] lg:flex p-[10px] group rounded-[15px]"
          >
            {/* first column that holds the img */}
            <div className="lg:w-[240px] h-[205px] overflow-hidden rounded-[10px] relative">
              <img
                src={item.img}
                alt=""
                className="absolute size-full object-cover group-hover:scale-120 duration-500"
              />
            </div>

            {/* second column that holds the txt content */}
            <div className="pl-[30px] pr-5 py-5">
              <div className="text-[#b1b1b1] text-lg uppercase cursor-pointer hover:text-[#c6ff00] duration-500 transition-colors">
                <h2>November 13, 2023</h2>
              </div>
              <h1 className="text-[22px] cursor-pointer hover:text-[#c6ff00] duration-500 transition-colors font-semibold mt-3 w-[295px]">
                {item.ttl}
              </h1>
              <button className="text-[#c6ff00] flex items-center cursor-pointer font-semibold mt-10 gap-1">
                <p>Read More</p>
                <IoArrowUp size={20} className="-rotate-320" />
              </button>
              {/* ending of the instance div */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
