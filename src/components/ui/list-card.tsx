import TasteLabel from "@/components/ui/taste-label";
import { CocktailType } from "@/constant/dummy";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListCard: React.FC<{ cocktail: CocktailType }> = ({ cocktail }) => {
  return (
    <Link href={`/cocktails/${cocktail.name}`}>
      <article className="rounded-lg max-w-[340px] aspect-[3/1] bg-mojito-white-rum mx-auto overflow-hidden shadow-md flex">
        <div className="grow flex-col gap-2 justify-center px-4">
          <h3 className="texl-3xl font-bold">{cocktail.name}</h3>
          <div className="flex justify-start items-center gap-1">
            {cocktail.tasteLabel.map((label) => (
              <TasteLabel key={label} tasteLabel={label} />
            ))}
          </div>
          <p className="text-[12px] italic">
            &quot;{cocktail.tasteReview}&quot;
          </p>
        </div>
        <Image
          src={cocktail.pictureURL}
          width={110}
          height={100}
          alt={`${cocktail.name} card image`}
        />
      </article>
    </Link>
  );
};

export default ListCard;
