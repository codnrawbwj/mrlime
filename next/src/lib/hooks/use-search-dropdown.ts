import { COCKTAIL_HASH } from "@/constant/dummy";
import { useMemo, useState } from "react";

type searchResultType = {
  _id: string;
  name: string;
  tasteReview: string;
};

const useSearchDropdown = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  // MARK: TODO replace with API
  const cocktailSearchResultList: searchResultType[] = COCKTAIL_HASH.map(
    (item) => ({
      _id: item._id,
      name: item.name,
      tasteReview: item.tasteReview,
    })
  );
  const relativeSearchResult: searchResultType[] = useMemo(() => {
    if (!searchValue) return [];

    return cocktailSearchResultList.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue, cocktailSearchResultList]);

  return { searchValue, setSearchValue, relativeSearchResult };
};

export default useSearchDropdown;
