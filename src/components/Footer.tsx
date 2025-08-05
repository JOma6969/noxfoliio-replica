import { MdOutlineMail, MdLocationPin } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  const links = ["services", "projects", "pricing", "faqs", "contact"];
  const socials = ["facebook", "twitter", "instagram", "linkedin"];
  const addressData = [
    {
      icn: <MdLocationPin size={20} color="#c6ff00" />,
      title: "55 Main Street, 2nd Block, New York City",
    },
    {
      icn: <MdOutlineMail size={20} color="#c6ff00" />,
      title: "support@gmail.com",
    },
    {
      icn: <IoCall size={20} color="#c6ff00" />,
      title: "+880 (123) 456 88",
    },
  ];

  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 px-4 mt-[70px] py-20 text-white justify-between bg-black">
        {/* logo */}
        <img
          src="/logo.webp"
          className="w-[175px] h-[35px] flex-0 cursor-pointer"
          alt=""
        />

        {/* links */}
        <div>
          <h2 className="text-lg font-semibold mb-5">Quick Link</h2>
          <ul className="flex lg:flex-row flex-col gap-5 lg:gap-10">
            {links.map((link, i) => (
              <li
                key={i}
                className="capitalize cursor-pointer hover:text-[#c6ff00]"
              >
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <div className="flex max-[414px]:flex-col max-[414px]:gap-2 justify-between gap-6 mt-12">
            <div className="flex items-center min-[414px]:w-[325px] max-[414px]:pb-2 gap-5 border-b-2 border-[rgba(255,255,255,.2)]">
              <MdOutlineMail color="#c6ff00" size={20} />
              <input
                type="text"
                placeholder="Email Address"
                className="outline-none w-full"
              />
            </div>
            <button className="bg-[#c6ff00] cursor-pointer max-[414px]:w-full rounded w-[120px] h-[48px] justify-center text-black font-semibold gap-1.5 flex items-center">
              <p>Sign Up</p>
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* address */}
        <div className="">
          <h2 className="font-semibold mb-4 text-lg">Address</h2>
          <div className="flex flex-col gap-3">
            {addressData.map((item, i) => (
              <div className="flex gap-4 lg:w-[294px] items-center" key={i}>
                {item.icn}
                <p className="text-[#b1b1b1]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 text-white my-5 lg:flex items-center justify-between">
        <h2>Copyright &copy;2025, NoxfolioRep All Rights Reserved</h2>
        <ul className="flex text-[#b1b1b1] gap-4 mt-7 lg:mt-0">
          {socials.map((item, i) => (
            <li className="capitalize hover:!text-[#c6ff00]" key={i}>
              <a href={`https://${item}.com`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
