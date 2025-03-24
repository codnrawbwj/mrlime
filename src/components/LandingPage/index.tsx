import ItemCard from "@/components/ItemCard/item-card";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex-col justify-start gap-20 py-6">
      <section id="todayDrink">
        <ItemCard
          name="Mojito"
          img="/mojito-image.jpeg"
          baseSpirit="Rum"
          isToday
        />
      </section>
      <section
        id="recipes"
        className="flex-col justify-center items-center gap-6"
      >
        <h2 className="font-semibold text-3xl">Recipes</h2>
        <div className="w-full min-w-[260px] h-[100px] bg-mojito-green border border-[#eaeaea] shadow-md overflow-hidden rounded-xl ">
          <div className="bg-mojito-rum-white h-full ml-[100px]"></div>
        </div>
        <div className="w-full min-w-[260px] h-[100px] bg-mojito-green border border-[#eaeaea] shadow-md overflow-hidden rounded-xl ">
          <div className="bg-mojito-rum-white h-full ml-[100px]"></div>
        </div>
        <div className="w-full min-w-[260px] h-[100px] bg-mojito-green border border-[#eaeaea] shadow-md overflow-hidden rounded-xl ">
          <div className="bg-mojito-rum-white h-full ml-[100px]"></div>
        </div>
        <p>View all</p>
      </section>
      <section
        id="ingredients"
        className="flex-col justify-center items-center gap-6"
      >
        <h2 className="font-semibold text-3xl">Ingredients</h2>
        <div className="w-full min-w-[260px] h-[100px] bg-mojito-green border border-[#eaeaea] shadow-md overflow-hidden rounded-xl ">
          <div className="bg-mojito-rum-white h-full mr-[100px]"></div>
        </div>
        <div className="w-full min-w-[260px] h-[100px] bg-mojito-green border border-[#eaeaea] shadow-md overflow-hidden rounded-xl ">
          <div className="bg-mojito-rum-white h-full mr-[100px]"></div>
        </div>
        <div className="w-full min-w-[260px] h-[100px] bg-mojito-green border border-[#eaeaea] shadow-md overflow-hidden rounded-xl ">
          <div className="bg-mojito-rum-white h-full mr-[100px]"></div>
        </div>
        <p>View all</p>
      </section>
    </div>
  );
};

export default LandingPage;
