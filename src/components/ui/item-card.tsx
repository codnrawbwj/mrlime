import { ItemCardProps } from "@/components/ui";
import Image from "next/image";
import React from "react";

const ItemCard: React.FC<ItemCardProps> = ({ name, img, baseSpirit }) => {
  const altDescription = `${name} card image`;

  return (
    <article className="relative rounded-lg inline-block w-full aspect-[3/4] bg-mojito-dark-rum mx-auto overflow-hidden">
      <Image src={img} alt={altDescription} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex-col justify-end items-start pl-4 pb-6 gap-3 mojito-rum-white">
        <p className="text-5xl font-bold">{name}</p>
        {baseSpirit ? (
          <p className="text-[18px]">
            {baseSpirit[0].toUpperCase() + baseSpirit.slice(1)} Based
          </p>
        ) : (
          <span className="invisible">placeholder</span>
        )}
      </div>
    </article>
  );
};

export default ItemCard;
