import { useLockScroll } from "@/lib/hooks/use-lock-scroll";
import Link from "next/link";
import React from "react";
import { createPortal } from "react-dom";

type MenuType = {
  title: string;
  description?: string;
  link: string;
};

export const Menu: MenuType[] = [
  {
    title: "Cocktails",
    description: "Shake it, stir it, sip it.",
    link: "/cocktails",
  },
  {
    title: "Ingredients",
    description: "From rum to rosemary.",
    link: "/ingredients",
  },
  {
    title: "Collections",
    description: "Like a playlist, but boozy.",
    link: "/collections",
  },
  {
    title: "About Me",
    link: "/about-me",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const TopNavMenuPage: React.FC<{ resetSidebars: () => void }> = ({
  resetSidebars,
}) => {
  useLockScroll();

  return createPortal(
    <div className="max-w-7xl mx-auto fixed top-20 left-0 right-0 bottom-0 overflow-hidden z-1000 w-[100vw] h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start">
      {Menu.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="px-4 py-7 w-full justify-start"
          onClick={resetSidebars}
        >
          <div className="flex-col gap-2 ">
            <h3 className="font-semibold text-xl">{item.title}</h3>
            {item.description && <p>{item.description}</p>}
          </div>
        </Link>
      ))}
    </div>,
    document.getElementById("portal-root")!
  );
};

export default TopNavMenuPage;
