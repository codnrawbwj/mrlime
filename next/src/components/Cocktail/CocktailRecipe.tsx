import ItemCard from "@/components/ui/item-card";
import { CocktailType } from "@/constant/dummy";

interface CocktailRecipeProps {
  cocktail: CocktailType;
}

const CocktailRecipe: React.FC<CocktailRecipeProps> = ({ cocktail }) => {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start py-10 gap-15">
      <ItemCard
        name={cocktail.name}
        baseSpirit={cocktail.ingredients[0]}
        img={cocktail.pictureURL}
        alcoholPercent={cocktail.alcoholPercent}
      />
      {/* Taste Review */}
      <div className="italic max-w-[320px] flex-center text-center">{`"${cocktail.tasteReview}"`}</div>
      {/* Ingredient  */}
      <div className="w-[340px] flex justify-start items-center rounded-2xl list-disc list-inside shadow-md px-4 py-6">
        <ul>
          {cocktail.ingredients.map((ing, index) => (
            <li key={index}> - {ing}</li>
          ))}
        </ul>
      </div>
      {/* Recipe */}
      <div className="w-[340px] flex-center rounded-2xl list-disc list-inside shadow-md px-4 py-6">
        <ul>
          {cocktail.recipe.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CocktailRecipe;
