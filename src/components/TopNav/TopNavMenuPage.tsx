import React from "react";

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
    title: "AboutMe",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const TopNavMenuPage = () => {
  return (
    <div className="fixed z-1000 w-[100vw] h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start">
      {Menu.map((item, index) => (
        <div key={index} className="px-4 py-7 w-full justify-start">
          <div className="flex-col gap-2 ">
            <h3 className="font-semibold text-xl">{item.title}</h3>
            {item.description && <p>{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopNavMenuPage;
