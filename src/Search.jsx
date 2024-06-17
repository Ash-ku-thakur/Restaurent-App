// import { useState } from "react";

import { useRef } from "react";

const Search = ({filteredName,setFilteredName, handleSearchName}) => {
  // let serchText = useRef('')
  return (
    <div className="flex items-center justify-center w-full mt-4">
      <div className="w-1/3 flex items-center ">
        <input
          type="text"
          name="search"
          id="search"
          // ref={serchText}
          // value={serchText}
          onInput={(event)=>setFilteredName(event?.target?.value)}
          value={filteredName}
          // defaultValue={""}
          placeholder="Search Here"
          className="py-3 border-black border-[1px] rounded-l-3xl w-full px-4"
        />
        <button className="py-[0.16rem] px-5 text-[1.8rem] border-black border-[1px] rounded-r-3xl" onClick={(event)=>handleSearchName(event)}>
          🔍
        </button>
      </div>
    </div>
  );
};

export default Search;
