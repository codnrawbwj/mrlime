import ItemCard from "@/components/ui/item-card";
import { CocktailType } from "@/constant/dummy";

interface CocktailRecipeProps {
  cocktail: CocktailType;
}

const CocktailRecipe: React.FC<CocktailRecipeProps> = ({ cocktail }) => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start py-10 gap-15">
      <ItemCard
        name={cocktail.name}
        baseSpirit={cocktail.ingredients[0]}
        img={cocktail.pictureURL}
        alcoholPercent={cocktail.alcoholPercent}
      />
    </div>
  );
};

export default CocktailRecipe;
