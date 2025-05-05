"use client";
import {
  COCKTAIL_TMI_LIST,
  CocktailTMIType,
} from "@/components/TopNav/cocktailTMIList";
import { useLockScroll } from "@/lib/hooks/use-lock-scroll";
import { getRandomInt } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const TopNavSearchPage = () => {
  const [randomTMI, setRandomTMI] = useState<CocktailTMIType | undefined>();

  useEffect(() => {
    setRandomTMI(COCKTAIL_TMI_LIST[getRandomInt(10)]);
  }, []);

  useLockScroll();
  //MARK: TODO: think about how to handle this search bar
  return createPortal(
    <div className="fixed top-20 left-0 right-0 bottom-0 overflow-hidden z-1000 w-[100vw] h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start pt-20 gap-15">
      <input
        placeholder="🍹 What can I get for you?"
        className="border-black p-3 text-[1rem] border-b-2 border-mojito-text-a w-[350px] focus:outline-none"
        autoFocus
      />
      {/* TMI Container */}
      <div className="flex-col items-start gap-8 w-[350px] h-[200px]">
        <h3 className="font-semibold text-2xl">Did you know that...?</h3>
        {randomTMI && (
          <p className="font-semibold">
            {randomTMI.title} {randomTMI.emoji}
          </p>
        )}
        <div className="flex flex-col gap-4">
          {randomTMI &&
            randomTMI.fact.split("<br/>").map((line, index) => (
              <p key={index}>
                {line}
                {index > randomTMI.fact.split("<br/>").length - 1 && <br />}
              </p>
            ))}
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")!
  );
};

export default TopNavSearchPage;
