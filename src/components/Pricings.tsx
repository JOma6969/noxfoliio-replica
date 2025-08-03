import { FaCheck } from "react-icons/fa6";
import { IoChevronForward } from "react-icons/io5";

const Pricings = () => {
  const data = [
    {
      name: "basic",
      price: 19.95,
    },
    {
      name: "standard",
      price: 39.95,
    },
    {
      name: "premium",
      price: 99.95,
    },
  ];

  const perks = [
    "Website design",
    "mobile app design",
    "product design",
    "digital marketing",
    "custom support",
  ];

  return (
    <div className="text-white px-4 mt-27 py-10">
      <h4 className="text-[#b1b1b1] lg:text-center">Pricing</h4>
      <h1 className="text-[28px] lg:text-[45px] capitalize lg:text-center">
        amazing <span className="text-[#c6ff00]">pricing</span> for your
        projects
      </h1>
      <div className="lg:flex items-center mt-15 justify-between">
        {data.map((item, j) => (
          <div
            key={j}
            className="p-[10px] bg-[rgb(31,31,31)] min-h-[492px] lg:w-[375px] mb-[30px] rounded-2xl"
          >
            <div className="bg-[rgb(19,19,19)] border border-[rgb(53,53,53)] rounded-2xl py-11 px-10">
              <h2 className="text-[24px] capitalize leading-[22px]">
                {item.name} plan
              </h2>
              <h1 className="mt-[10px] text-[rgb(177,177,177)] capitalize">
                try out {item.name} plan save 20%
              </h1>
              <h3 className="text-[#b1b1b1] mt-2">
                <span className="text-[#c6ff00] text-[48px]">
                  ${item.price}
                </span>
                /per month
              </h3>
            </div>
            <div className="px-10 py-11">
              <p className="text-[#b1b1b1]">
                Our pricing widget offers branding with its user-friendly
                design.
              </p>
              <ul className="my-[35px] flex flex-col gap-[30px]">
                {perks.map((item, i) => (
                  <li
                    key={i}
                    className={`${
                      j === 0
                        ? "[&:nth-last-child(2)_p]:!text-[#ffffff59] [&:nth-last-child(1)]:!text-[#ffffff59] [&:nth-last-child(2)]:!text-[#ffffff59] [&:nth-last-child(1)_p]:!text-[#ffffff59]"
                        : ""
                    } capitalize flex text-[#c6ff00] items-center gap-3 `}
                  >
                    <FaCheck className="text-inherit" />
                    <p className="text-white">{item}</p>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-1 hover:bg-[#c6ff00] transition-colors duration-500 bg-[rgb(53,53,53)] text-[rgb(177,177,177)] hover:text-black font-medium cursor-pointer px-[35px] border-[rgb(177,177,177)] py-4 rounded-2xl">
                <p>Choose Plan</p>
                <IoChevronForward />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricings;
