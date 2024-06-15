import { useState } from "react";
import RestaurentMenu from "./RestaurentMenu";
import { MENU_URL } from "./constant/Variables";
import useGetRestaurent from "./hooks/useGetRestaurent";
import { useParams } from "react-router-dom";

const RestaurentMenuList = () => {
  // let [showToggle, setShowToggle] = useState(false);
  let params = useParams();

  let restaurentList = useGetRestaurent(MENU_URL + params.id);
  let { cards } = restaurentList;

  if (!cards) {
    return null;
  }

  let { REGULAR } = cards[4]?.groupedCard?.cardGroupMap;

  // let handelToggle = () => {
  //   showToggle ? setShowToggle(false) : setShowToggle(true);
  // };

  let handelClick = (index) => {
    console.log(index);
  };
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
            <div className="w-[70%] m-auto text-2xl font-extrabold flex justify-between items-center mt-4 cursor-pointer" onClick={() => handelClick(index)}>
              <h3 className="">
                {item?.card?.card?.title}({item?.card?.card?.itemCards.length})
              </h3>
              {"🔻"}
            </div>
            <div >
              <RestaurentMenu data={item?.card?.card?.itemCards} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default RestaurentMenuList;
