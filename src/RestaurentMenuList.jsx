import { useState } from "react";
import RestaurentMenu from "./RestaurentMenu";
import { MENU_URL } from "./constant/Variables";
import useGetRestaurent from "./hooks/useGetRestaurent";
import { useParams } from "react-router-dom";

const RestaurentMenuList = () => {
  // let [showMenu, setShowMenu] = useState(true)
  // if we store a value of toggling then after click our state change,
  // it change for all not a indivitiua that is why we dont't need a state variable

  let [getIndex, setGetIndex] = useState(2); // we want to change it dynamicly on click of Recomendation Click

  let params = useParams();

  let restaurentList = useGetRestaurent(MENU_URL + params.id);
  let { cards } = restaurentList;

  if (!cards) {
    return null;
  }

  let { REGULAR } = cards[4]?.groupedCard?.cardGroupMap;
  console.log(getIndex);

  return (
    <div>
      {REGULAR?.cards
        .filter(
          (elem) =>
            elem?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        .map((item, index) => (
          <div key={index}>
            <div>
              {
                <RestaurentMenu
                  data={item?.card?.card}
                  setGetIndex={() => setGetIndex(index)} // callBack take a input that change on click of Recomendation
                  Toggle={index == getIndex ? true : false}
                />
              }
            </div>
          </div>
        ))}
    </div>
  );
};

export default RestaurentMenuList;
