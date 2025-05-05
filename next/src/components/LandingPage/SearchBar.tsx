"use client";
import { ArrowRightIcon } from "@/assets";
import useSearchDropdown from "@/lib/hooks/use-search-dropdown";
import Link from "next/link";

const SearchBar = () => {
  const { searchValue, setSearchValue, relativeSearchResult } =
    useSearchDropdown();

  return (
    <div className="w-[300px] md:w-[600px] shadow-md rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between pr-4">
        <input
          placeholder="What's your drink?"
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
