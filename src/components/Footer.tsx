const Footer = () => {
  const links = ["services", "projects", "pricing", "faqs", "contact"];

  return (
    <div className="px-4 mt-[110px] pt-[120px] pb-[80px] bg-black text-white">
      <div>
        {/* logo */}
        <img src="/logo.webp" className="" alt="" />

        {/* links */}
        <div>
          <h2>Quick Link</h2>
          <ul className="flex gap-10">
            {links.map((link, i) => (
              <li
                key={i}
                className="capitalize cursor-pointer hover:text-[#c6ff00]"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* address */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
