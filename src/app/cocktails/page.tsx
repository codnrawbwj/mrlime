import { COCKTAIL_HASH, CocktailType } from "@/constant/dummy";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start py-10 gap-15">
      <div className="w-[300px] rounded-2xl shadow-md flex items-center justify-between pr-4">
        <input
          placeholder="Search by cocktail"
          className="px-6 py-4  text-[1rem] focus:outline-none truncate"
          autoFocus
        />
      </div>
      <div className="flex-col justify-center items-center gap-5 w-[80vw]">
        {COCKTAIL_HASH.map((cocktail: CocktailType) => (
          <article
            key={cocktail._id}
            className="rounded-lg w-full aspect-[3/1] bg-mojito-white-rum mx-auto overflow-hidden shadow-md flex "
          >
            <div className="grow flex-col gap-4 justify-center px-4">
              <div className="flex">
                <h3 className="texl-3xl font-bold">{cocktail.name}</h3>
              </div>
              <p className="text-[12px] italic">
                &quot;{cocktail.tasteReview}&quot;
              </p>
            </div>
            <Image
              src={cocktail.pictureURL}
              width={120}
              height={100}
              alt={`${cocktail.name} card image`}
            />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Page;
