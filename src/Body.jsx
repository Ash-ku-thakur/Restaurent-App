import useGetRestaurent from "./hooks/useGetRestaurent";
import { RESTAURENT_URL } from "./constant/Variables";
import Search from "./Search";
import { useState } from "react";
import RestaurentList from "./RestaurentList";

const Body = () => {
  let [filteredName, setFilteredName] = useState("");
  let [inputName, setInputName] = useState([]);
  
  let restaurentList = useGetRestaurent(RESTAURENT_URL);
  
  let { cards } = restaurentList;
  if (!cards) {
    return null;
  }

  let { restaurants } = cards[4]?.card?.card?.gridElements?.infoWithStyle;

  // filter by name with the help of inCludes() and and toLowerCase() method
  let handleSearchName = () => {
    let FilText = restaurants.filter((elem) =>
      elem.info.name.toLowerCase().includes(filteredName.toLowerCase())
    );
    setInputName(FilText);
  };

  return (
    <div>
      <Search
        filteredName={filteredName}
        setFilteredName={setFilteredName}
        handleSearchName={handleSearchName}
      />
      <div>
        <RestaurentList inputName={inputName}/>
      </div>
    </div>
  );
};

export default Body;
