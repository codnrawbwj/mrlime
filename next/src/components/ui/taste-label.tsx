import { cn } from "@/lib/utils";
import React from "react";

export interface TasteLabelType {
  tasteLabel: "sweet" | "fresh" | "deep" | "bitter" | "classic";
}

const TASTELABEL_COLOR_HASH = {
  sweet: "bg-amber-200 text-black",
  fresh: "bg-emerald-600 text-white",
  deep: "bg-indigo-800 text-white",
  bitter: "bg-orange-950 text-white",
  classic: "bg-slate-600 text-white",
};

const TasteLabel: React.FC<TasteLabelType> = ({ tasteLabel }) => {
  return (
    <div
      className={cn(
        "px-2 rounded-2xl py-1 text-[10px] font-semibold",
        TASTELABEL_COLOR_HASH[tasteLabel]
      )}
    >
      {tasteLabel}
    </div>
  );
};

export default TasteLabel;
