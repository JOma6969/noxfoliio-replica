import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HoverCard: React.FC<{ data: string[] | null }> = ({ data }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".menu",
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        // duration: 200,
        duration: 0.4,
        ease: "sine.inOut",
      }
    );
  }, []);

  return (
    <ul className="menu text-white z-50 w-[210px] bg-[#1e1e1e]">
      {data &&
        data.map((inst, i) => (
          <li
            className={`px-5 py-3 hover:text-[#c6ff00] cursor-pointer capitalize ${
              i === data.length - 1 ? "" : "border-b border-white/10"
            }`}
            key={i}
          >
            {inst}
          </li>
        ))}
    </ul>
  );
};

export default HoverCard;
