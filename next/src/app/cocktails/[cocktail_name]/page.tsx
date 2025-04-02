import CocktailRecipe from "@/components/Cocktail/CocktailRecipe";
import { COCKTAIL_HASH, CocktailType } from "@/constant/dummy";
import { toUnSlug } from "@/lib/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ cocktail_name: string }>;
}) {
  const { cocktail_name } = await params;

  //TODO: Replace with action after applying server
  const getCocktailInfo: CocktailType | undefined = COCKTAIL_HASH.find(
    (cocktail) => cocktail.name === toUnSlug(cocktail_name)
  );

  if (getCocktailInfo) return <CocktailRecipe cocktail={getCocktailInfo} />;
  else return <>Error!</>;
}
