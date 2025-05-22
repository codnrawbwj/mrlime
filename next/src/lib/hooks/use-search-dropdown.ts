import { useMemo, useState } from "react";
import useSWR from "swr";

type searchResultType = {
  _id: string;
  name: string;
  tasteReview: string;
};

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    credentials: "omit",
  });
  return res.json();
};

const useSearchDropdown = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const { data: cocktailSearchResultList = [] } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cocktail-list`,
    fetcher
  );
  console.log(cocktailSearchResultList);

  const relativeSearchResult: searchResultType[] = useMemo(() => {
    if (!searchValue) return [];

    return cocktailSearchResultList.filter((item: searchResultType) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue, cocktailSearchResultList]);

  return { searchValue, setSearchValue, relativeSearchResult };
};

export default useSearchDropdown;
