"use client";
import { ArrowRightIcon } from "@/assets";
import { COCKTAIL_HASH } from "@/constant/dummy";
import Link from "next/link";
import { useMemo, useState } from "react";

type searchResultType = {
  _id: string;
  name: string;
  tasteReview: string;
};

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string | null>();
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

  return (
    <div className="w-[300px] md:w-[600px] shadow-md rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between pr-4">
        <input
          placeholder="Ask recipes"
          className="text-[1rem] focus:outline-none truncate px-6 py-4"
          // autoFocus
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="w-8 h-8 rounded-xl border-1 flex-center">
          <ArrowRightIcon style={{ width: 24, height: 24 }} />
        </div>
      </div>
      {searchValue && (
        <div className="mt-2">
          {relativeSearchResult.slice(0, 5).map((item) => (
            <Link
              href={`/cocktails/${item.name}`}
              key={item._id}
              className="py-2 flex-col hover:bg-[var(--mojito-green)] px-4"
            >
              {item.name}
              <span className="mojito-text-b text-[0.625rem]">
                {item.tasteReview}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
