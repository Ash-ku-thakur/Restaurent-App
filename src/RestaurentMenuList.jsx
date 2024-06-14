import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { MENU_URL } from "./constant/Variables";
import useGetRestaurent from "./hooks/useGetRestaurent";
import { useParams } from "react-router-dom";

const RestaurentMenuList = () => {
  let params = useParams()

  let restaurentList = useGetRestaurent(MENU_URL+params.id);
  let { cards } = restaurentList;

  if (!cards) {
    return null;
  }

  let { REGULAR } = cards[4]?.groupedCard?.cardGroupMap;

  console.log(REGULAR?.cards);

  return (
    <div>
      {REGULAR?.cards
        .filter(
          (elem) =>
            elem?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        .map((item, index) => (
          <RestaurentCard data={item?.card?.card?.itemCards[0]} key={index} />
        ))}
    </div>
  );
};

export default RestaurentMenuList;
