import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoChevronForward } from "react-icons/io5";

const Contact = () => {
  const data = [
    "5+ years of experience",
    "professional web designer",
    "mobile apps design",
    "custom design support",
  ];

  const inpFields = [
    {
      label: "Full Name",
      placeholder: "Richard D. Hammond",
      typeOfInp: "text",
    },
    {
      label: "Email Address",
      placeholder: "support@gmail.com",
      typeOfInp: "email",
    },
    {
      label: "Phone Number",
      placeholder: "+880 (123) 456 88",
      typeOfInp: "number",
    },
    {
      label: "subject",
      placeholder: "I would like to discuss...",
      typeOf: "text",
    },
  ];

  const [activeInpIndex, setActiveInpIndex] = useState<number | null>(null);

  return (
    <section id="contact" className="px-4 py-13 lg:flex lg:justify-between">
      {/* first column */}
      <div className="text-white lg:w-[434px]">
        <h3 className="mb-4 text-[rgb(177,177,177)]">Get in Touch</h3>
        <h1 className="lg:text-[45px] text-[28px] capitalize leading-[54px]">
          Let's talk about your{" "}
          <span className="text-[#c6ff00]">next project</span>
        </h1>
        <p className="text-[rgb(177,177,177)] w-[400px] mt-8">
          Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore
          veritatis
        </p>

        <ul className="mt-9">
          {data.map((item, i) => (
            <li key={i} className="my-[15px] flex items-center gap-2">
              <div className="size-[30px] bg-[#c6ff00] text-black rounded-full flex items-center justify-center">
                <FaCheck />
              </div>
              <p className="capitalize">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* second part - form */}
      <form className="lg:grid gap-4 lg:w-[755px] mt-10 lg:mt-0 lg:grid-cols-2">
        {inpFields.map((item, i) => (
          <div className="text-white my-7 h-fit flex flex-col" key={i}>
            <label htmlFor={item.label} className="capitalize">
              {item.label}
              <span className="text-[#c6ff00]">*</span>
            </label>
            <input
              type={item.typeOfInp}
              required
              className={`placeholder:text-[rgba(255,255,255)]/20 border border-[rgb(53,53,53)] ${
                activeInpIndex === i
                  ? "text-white !border-[#c6ff00] border"
                  : ""
              } bg-[rgb(31,31,31)] mt-5 text-[rgba(255,255,255)]/20 rounded-[14px] outline-none py-[18px] px-[30px]`}
              placeholder={item.placeholder}
              onFocus={() => setActiveInpIndex(i)}
              onBlur={() => setActiveInpIndex(null)}
            />
          </div>
        ))}
        <div className="col-span-2 flex flex-col">
          <label htmlFor="" className="text-white mb-5">
            Textarea<span className="text-[#c6ff00]">*</span>
          </label>
          <textarea
            placeholder="Write message"
            className={`placeholder:text-[rgba(255,255,255)]/20 border ${
              activeInpIndex === 4 ? "!border-[#c6ff00] text-white" : ""
            } border-[rgb(53,53,53)] outline-none resize-none w-full text-[rgba(255,255,255)]/20 rounded-[14px] bg-[rgb(31,31,31)] px-[30px] py-[18px] h-[125px]`}
            onFocus={() => setActiveInpIndex(4)}
            onBlur={() => setActiveInpIndex(null)}
          />
        </div>
        <button className="text-black flex items-center gap-1 py-4 w-fit mt-2 rounded-2xl cursor-pointer border-[rgb(31,31,31)] px-[35px] capitalize bg-[#c6ff00] ">
          <p>Send us message</p>
          <IoChevronForward />
        </button>
      </form>
    </section>
  );
};

export default Contact;
