import SearchBar from "@/components/LandingPage/SearchBar";
import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-mojito-rum-white flex-col items-center justify-start pt-20 gap-15">
      <h1 className="font-semibold text-2xl">🍹 What can I get for you?</h1>
      <SearchBar />
    </div>
  );
};

export default LandingPage;
