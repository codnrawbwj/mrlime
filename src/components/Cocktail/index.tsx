import ListCard from "@/components/ui/list-card";
import { COCKTAIL_HASH, CocktailType } from "@/constant/dummy";
import React from "react";

const Cocktail = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start py-10 gap-15">
      <div className="w-[300px] rounded-2xl shadow-md flex items-center justify-between pr-4">
        <input
          placeholder="Search by cocktail"
          className="px-6 py-4  text-[1rem] focus:outline-none truncate"
          autoFocus
        />
      </div>
      <div className="flex-col justify-center items-center gap-5">
        {COCKTAIL_HASH.map((cocktail: CocktailType) => (
          <ListCard key={cocktail._id} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
};

export default Cocktail;
