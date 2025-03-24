"use client";
import {
  COCKTAIL_TMI_LIST,
  CocktailTMIType,
} from "@/components/TopNav/cocktailTMIList";
import { getRandomInt } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const TopNavSearchPage = () => {
  const [randomTMI, setRandomTMI] = useState<CocktailTMIType | undefined>();

  useEffect(() => {
    setRandomTMI(COCKTAIL_TMI_LIST[getRandomInt(10)]);
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 bottom-0 overflow-hidden z-1000 w-[100vw] h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start pt-20 gap-15">
      <input
        placeholder="🍹 What can I get for you?"
        className="border-black p-3 text-[1rem] border-b-2 border-mojito-text-a w-[300px] focus:outline-none"
        autoFocus
      />
      {/* TMI Container */}
      <div className="flex-col items-start gap-4 w-[350px] h-[200px]">
        <h3 className="font-semibold text-2xl">Before you order...</h3>
        {randomTMI && (
          <p className="font-semibold">
            {randomTMI.title} {randomTMI.emoji}
          </p>
        )}
        {randomTMI &&
          randomTMI.fact.split("<br/>").map((line, index) => (
            <p key={index}>
              {line}
              {index > randomTMI.fact.split("<br/>").length - 1 && <br />}
            </p>
          ))}
      </div>
    </div>
  );
};

export default TopNavSearchPage;
