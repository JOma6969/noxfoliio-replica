import { IoArrowUp } from "react-icons/io5";

const Services = () => {
  const services = [
    {
      ttl: "brand identity design",
      details: "Dignissimos ducimus blanditiis praesen",
    },
    {
      ttl: "website design",
      details: "Dignissimos ducimus blanditiis praesen",
    },
    {
      ttl: "mobile app design",
      details: "Dignissimos ducimus blanditiis praesen",
    },
    {
      ttl: "motion graphic design",
      details: "Dignissimos ducimus blanditiis praesen",
    },
    {
      ttl: "website development",
      details: "Dignissimos ducimus blanditiis praesen",
    },
    {
      ttl: "SEO & digital marketing",
      details: "Dignissimos ducimus blanditiis praesen",
    },
  ];

  return (
    <section id="services" className="text-white px-4">
      <h3 className="text-[#b1b1b1] text-center font-medium">
        Popular Services
      </h3>
      <h1 className="text-center text-[28px] lg:text-[45px] font-medium leading-auto">
        My <span className="text-[#c6ff00]">Special Services</span> For your{" "}
        <br /> Business Development
      </h1>
      <div className="grid lg:grid-cols-2 w-full overflow-hidden gap-[30px] mt-13">
        {services.map((item, i) => (
          <div
            key={i}
            className="group border hover:border-[#c6ff00] border-[rgb(53,53,53)] lg:flex bg-[rgb(31,31,31)] px-[50px] py-[35px] rounded-[15px]"
          >
            <h3 className="text-2xl mr-[45px] text-[#b1b1b1]">0{i + 1}</h3>
            <div className="lg:flex my-7 lg:my-0 justify-between">
              <div>
                <h1 className="text-2xl capitalize mb-[10px]">{item.ttl}</h1>
                <p className="text-[#b1b1b1]">{item.details}</p>
              </div>
            </div>
            <div className="lg:ml-19 group-hover:bg-[#c6ff00] -rotate-320 group-hover:text-black text-[#c6ff00] cursor-pointer size-[50px] bg-[#131313] rounded-full flex items-center justify-center">
              <IoArrowUp size={21} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
