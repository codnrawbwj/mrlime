import MobileHamburgerMenu from "@/components/TopNav/MobileHamburgerMenu";
import React from "react";

const TopNav = () => {
  return (
    <nav className="h-14 sm:h-16 md:h-18 bg-mojito-cool-teal w-full shadow-md mojito-rum-white px-4 flex-center">
      <div className="m-auto max-w-7xl w-full flex items-center justify-between px-4">
        {/* TODO: Put logo here instead */}
        <p className="font-bold text-2xl sm:text-3xl">Mr.Lime</p>
        {/* Mobile Menu */}
        <MobileHamburgerMenu />
      </div>
    </nav>
  );
};

export default TopNav;
