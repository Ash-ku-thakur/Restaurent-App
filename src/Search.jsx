const Search = ({ filteredName, setFilteredName, handleSearchName , handleTopCard}) => {
  return (
    <div className="flex items-center gap-[5rem] w-full mt-4">
      <div className='w-[80%]'>
        <div className="w-1/2 flex items-center ">
          <input
            type="text"
            name="search"
            id="search"
            onInput={(event) => setFilteredName(event?.target?.value)}
            value={filteredName}
            placeholder="Search Here"
            className="py-3 border-black border-[1px] rounded-l-3xl w-full px-4"
          />
          <button
            className="py-[0.16rem] px-5 text-[1.8rem] border-black border-[1px] rounded-r-3xl hover:scale-95"
            onClick={(event) => handleSearchName(event)}
          >
            🔍
          </button>
        </div>
      </div>
      <div className="">
        <button className="border-black border-[1px] rounded-[50px] px-4 py-2 hover:scale-90" onClick={handleTopCard}>
          Top Rated
        </button>
      </div>
    </div>
  );
};

export default Search;
