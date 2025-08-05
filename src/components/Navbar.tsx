import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import HoverCard from "./HoverCard";
import { IoIosMenu } from "react-icons/io";

type linkType = {
  label: string;
  href: string;
  hasSubMenu: boolean;
  subMenu?: string[];
};

const Navbar: React.FC<{ shouldShowFixedNav: boolean }> = ({
  shouldShowFixedNav,
}) => {
  // state to track the clicked link
  const [activeLinkOnClick, setActiveLinkOnClick] = useState("home");
  // state to check if the hamburger menu is being hovered
  const [isHovering, setIsHovering] = useState(false);
  // state to dictate if the hover-card menu should show or not
  const [shouldShowHoverCard, setShouldShowHoverCard] = useState(false);
  // index to access the menu to be displayed
  const [menuToShow, setMenuToShow] = useState<null | number>(null);
  // const navRef = useRef<HTMLDivElement>(null);
  // const navRef2 = useRef<HTMLDivElement>(null);

  const links: linkType[] = [
    {
      label: "home",
      href: "#",
      hasSubMenu: true,
      subMenu: ["Multi Page", "One Page"],
    },
    {
      label: "about",
      href: "#about",
      hasSubMenu: false,
    },
    {
      label: "services",
      href: "#services",
      hasSubMenu: true,
      subMenu: ["service one", "service two", "service details"],
    },
    {
      label: "portfolio",
      href: "#portfolio",
      hasSubMenu: true,
      subMenu: [
        "portfolio one",
        "portfolio two",
        "portfolio three",
        "portfolio details",
      ],
    },
    {
      label: "blog",
      href: "#blog",
      hasSubMenu: true,
      subMenu: ["blog standard", "blog details"],
    },
    {
      label: "contact",
      href: "#contact",
      hasSubMenu: false,
    },
  ];

  // function to handle what menu should show
  const hoverCard = (i: number) => {
    if (!shouldShowHoverCard && links[i].subMenu) {
      setMenuToShow(i);
      setShouldShowHoverCard(true);
      // alert(shouldShowHoverCard);
    } else {
      setShouldShowHoverCard(false);
      setMenuToShow(null);
      // alert(shouldShowHoverCard);
    }
  };

  return (
    <div
      className={`text-white font-[600] px-4 pb-6 flex items-center justify-between ${
        shouldShowFixedNav
          ? "vertical-slide-in w-full pt-6 fixed z-100 bg-[#1f1f1f] top-0"
          : ""
      }`}
    >
      {/* logo */}
      <div className="w-[175px]">
        <a href="#">
          <img src="/logo.webp" className="w-full" alt="logo" />
        </a>
      </div>

      {/* nav links */}
      <nav className="hidden lg:block">
        <ul className="text-[15px] h-auto flex gap-10">
          {links.map((link, i) => (
            <li
              key={i}
              onClick={() => setActiveLinkOnClick(link.label)}
              className={`${
                activeLinkOnClick === link.label ? "text-[#c6ff00]" : ""
              } relative h-auto`}
              onMouseEnter={() => hoverCard(i)}
              onMouseLeave={() => hoverCard(i)}
            >
              <a
                href={link.href}
                className="capitalize flex items-center justify-center cursor-pointer gap-2 hover:text-[#c6ff00]"
              >
                <p>{link.label}</p>
                <div>{link.hasSubMenu && <FaAngleDown size={14} />}</div>
              </a>
              {i === menuToShow && (
                <div className={`absolute top-[100%] pt-3`}>
                  {menuToShow !== null && shouldShowHoverCard && (
                    <HoverCard data={links[menuToShow].subMenu || null} />
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* contact link */}
      <div className="hidden lg:block">
        <a href="#contact" className="flex gap-5 items-center">
          <h3 className="uppercase">let's talk</h3>
          <div
            className="bg-[#c6ff00] flex flex-col justify-center gap-1 size-12 px-[13px] rounded-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`border-[1.25px] ${
                  !isHovering ? "w-[80%]" : "w-full"
                } ${
                  !(i === 1) ? "ml-auto" : "ml-0"
                } border-black transition-all`}
              />
            ))}
          </div>
        </a>
      </div>

      <IoIosMenu className="block lg:hidden" size={40} />
    </div>
  );
};

export default Navbar;
