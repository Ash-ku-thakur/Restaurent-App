const Search = () => {
  return (
    <div className="flex items-center justify-center w-full mt-4">
      <div className="w-1/3 flex items-center ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Here"
          className="py-3 border-black border-[1px] rounded-l-3xl w-full px-4"
        />
        <div className="py-[0.16rem] px-5 text-[1.8rem] border-black border-[1px] rounded-r-3xl">
          🔍
        </div>
      </div>
    </div>
  );
};

export default Search;
