"use client";
import { CloseIcon, HamburgerMenuIcon, SearchIcon } from "@/assets";
import TopNavMenuPage from "@/components/TopNav/TopNavMenuPage";
import TopNavSearchPage from "@/components/TopNav/TopNavSearchPage";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

const TopNav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleSearchOpen = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const resetSidebars = () => {
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="h-20 bg-mojito-cool-teal w-full mojito-rum-white px-4 flex-center">
        <div className="m-auto max-w-7xl w-full flex items-center justify-between px-4">
          <button
            className={clsx(
              "relative w-6 h-6 transition-all duration-500 ease-in-out",
              isSearchOpen
                ? "opacity-0 translate-x[-20px] pointer-events-none"
                : "opacity-100 translate-x-0"
            )}
            onClick={handleMenuOpen}
          >
            <HamburgerMenuIcon
              style={{ height: 24, width: 24 }}
              fill="#f4f4f4"
              className={clsx(
                "absolute top-0 left-0 transition-all duration-200 ease-in-out cursor-pointer",
                isMenuOpen ? "opacity-0 scale-90" : "opactiy-100 scale-100"
              )}
            />
            <CloseIcon
              style={{ height: 24, width: 24 }}
              fill="var(--mojito-rum-white)"
              className={clsx(
                "absolute top-0 left-0 transition-all duration-200 ease-in-out cursor-pointer",
                !isMenuOpen ? "opacity-0 scale-90" : "opactiy-100 scale-100"
              )}
            />
          </button>
          <h2
            className={clsx(
              "font-bold text-2xl transition-all duration-500 ease-in-out",
              isSearchOpen ? "translate-x-[-120px]" : "translate-x-0",
              isMenuOpen ? "translate-x-[120px]" : "translate-x-0"
            )}
          >
            <Link href="/" onClick={resetSidebars}>
              Mr.Lime
            </Link>
          </h2>
          <button
            className={clsx(
              "relative w-6 h-6 transition-all duration-500 ease-in-out ",
              isMenuOpen
                ? "opacity-0 translate-x[-20px] pointer-events-none"
                : "opacity-100 translate-x-0"
            )}
            onClick={handleSearchOpen}
          >
            <SearchIcon
              style={{ height: 24, width: 24 }}
              fill="var(--mojito-rum-white)"
              className={clsx(
                "absolute top-0 left-0 transition-all duration-200 ease-in-out cursor-pointer",
                isSearchOpen ? "opacity-0 scale-90" : "opactiy-100 scale-100"
              )}
            />
            <CloseIcon
              style={{ height: 24, width: 24 }}
              fill="var(--mojito-rum-white)"
              className={clsx(
                "absolute top-0 left-0 transition-all duration-200 ease-in-out cursor-pointer",
                !isSearchOpen ? "opacity-0 scale-90" : "opactiy-100 scale-100"
              )}
            />
          </button>
        </div>
      </nav>
      {isSearchOpen && <TopNavSearchPage />}
      {isMenuOpen && <TopNavMenuPage resetSidebars={resetSidebars} />}
    </>
  );
};

export default TopNav;
