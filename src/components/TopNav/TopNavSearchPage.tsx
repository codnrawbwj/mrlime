import React from "react";

const TopNavSearchPage = () => {
  return (
    <div className="fixed z-1000 w-[100vw] h-[100vh] bg-mojito-rum-white flex-col items-center justify-center">
      <input
        placeholder="What can I get for you?"
        className="border-black p-3 text-[1rem] border-0 border-b-2 border-mojito-text-b w-[300px]"
      />
    </div>
  );
};

export default TopNavSearchPage;
