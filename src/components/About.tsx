import { FaCheck } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const About = () => {
  const aboutMenus = [
    "branding & design",
    "digital marketing",
    "web development",
    "product design",
  ];

  const contactInfo = [
    {
      ttl: "Email Us",
      icn: <MdOutlineEmail size={20} />,
      typeLink: "mailto:support@gmail.com",
      type: "support@gmail.com",
    },
    {
      ttl: "Make A Call",
      icn: <IoCallSharp size={20} />,
      typeLink: "tel:+880 (123) 456 88",
      type: "+880 (123) 456 88",
    },
  ];

  return (
    <section
      id="about"
      className="text-white lg:flex items-center justify-between mt-20 px-4 py-[130px] bg-black"
    >
      {/* first column */}
      <div>
        <h2 className="text-[#b1b1b1]">About me</h2>
        <h1 className="capitalize text-[28px] sm:text-[45px] lg:w-[696px] font-medium leading-auto lg:leading-[57px] mt-4">
          professional <span className="text-[#c6ff00]">problem solution</span>{" "}
          for digital products
        </h1>
        <p className="lg:w-[696px] text-[#b1b1b1] mt-10">
          At vero eos et accusamus etodio dignissimos ducimus praesentium
          voluptatum corrupti quos dolores quas molestias excepturi sint
          occaecati cupiditate provident qui officia deserunt mollitia animi, id
          est laborum et dolorum
        </p>

        {/* link showing specialities */}
        <ul className="grid lg:w-[80%] gap-4 min-[430px]:grid-cols-2 mt-7">
          {aboutMenus.map((item, i) => (
            <li key={i} className="flex items-center gap-4">
              <FaCheck color="#c6ff00" />
              <p className="capitalize text-lg">{item}</p>
            </li>
          ))}
        </ul>

        {/* contact Info */}
        <div className="lg:w-[614px] mb-10 border-[#353535] grid lg:grid-cols-2 rounded-[20px] bg-[rgb(31,31,31)] mt-12 px-10 py-5">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              className="flex w-full lg:justify-center mb-5 items-center gap-5"
            >
              <div className="bg-[#c6ff00] cursor-pointer rounded-full text-black size-[40px] flex items-center justify-center">
                {info.icn}
              </div>
              <div>
                <h4 className="text-[#b1b1b1] text-sm font-semibold">
                  {info.ttl}
                </h4>
                <h1 className="text-lg font-semibold">
                  <a href={info.typeLink}>{info.type}</a>
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* second column */}
      <div className="relative sm:w-[440px] w-[359px] h-[432px] ml-auto sm:ml-0 sm:h-[530px]">
        <img src="/about.webp" className="absolute size-full" alt="" />
        <img
          src="/expDesigner.webp"
          className="absolute bottom-35 sm:bottom-45 sm:-left-21 -left-12"
          alt=""
        />
        <img
          src="/jCollins.webp"
          className="absolute bottom-20 sm:-left-30 -left-12"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
