import { ItemCardProps } from "@/components/ui";
import Image from "next/image";
import React from "react";

const ItemCard: React.FC<ItemCardProps> = ({
  name,
  img,
  baseSpirit,
  alcoholPercent,
  isToday = false,
}) => {
  const altDescription = `${name} card image`;

  return (
    <article className="relative rounded-lg inline-block w-[340px] aspect-[3/4] bg-mojito-dark-rum mx-auto overflow-hidden">
      {isToday && (
        <div className="absolute top-4 left-4 bg-mojito-rum-white text-xs font-semibold px-3 py-1 rounded-full shadow z-101">
          Today’s Drink
        </div>
      )}
      <Image src={img} alt={altDescription} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex-col justify-end items-start pl-4 pb-6 gap-3 mojito-rum-white">
        <p className="text-5xl font-bold">{name}</p>
        <div className="flex w-[300px] justify-between items-center">
          {baseSpirit ? (
            <p className="text-[18px]">
              {baseSpirit[0].toUpperCase() + baseSpirit.slice(1)} Based
            </p>
          ) : (
            <span className="invisible">placeholder</span>
          )}
          <p>Alc {alcoholPercent}%</p>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
