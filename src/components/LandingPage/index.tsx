import { ArrowRightIcon } from "@/assets";
import React from "react";

const LandingPage = () => {
  return (
    <div className="top-20 left-0 right-0 bottom-0 overflow-hidden z-1000 w-[100vw] h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start pt-20 gap-15">
      <h1 className="font-semibold text-2xl">🍹 What can I get for you?</h1>
      <div className="w-[300px] rounded-2xl shadow-md flex items-center justify-between pr-4">
        <input
          placeholder="Ask recipes"
          className="px-6 py-4  text-[1rem] focus:outline-none truncate"
          autoFocus
        />
        <div className="w-8 h-8 rounded-xl border-1 flex-center">
          <ArrowRightIcon style={{ width: 24, height: 24 }} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
