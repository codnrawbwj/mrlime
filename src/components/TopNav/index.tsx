import { HamburgerMenuIcon, SearchIcon } from "@/assets";
import TopNavSearchPage from "@/components/TopNav/TopNavSearchPage";
import React from "react";

const TopNav = () => {
  return (
    <>
      <nav className="h-20 bg-mojito-cool-teal w-full shadow-md mojito-rum-white px-4 flex-center">
        <div className="m-auto max-w-7xl w-full flex items-center justify-between px-4">
          <HamburgerMenuIcon style={{ height: 24, width: 24 }} fill="#f4f4f4" />
          <h2 className="font-bold text-2xl">Mr.Lime</h2>
          <SearchIcon
            style={{ height: 24, width: 24 }}
            fill="var(--mojito-rum-white)"
          />
        </div>
      </nav>
      <TopNavSearchPage />
    </>
  );
};

export default TopNav;
