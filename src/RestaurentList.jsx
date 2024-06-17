import Card from "./Card";
import useGetRestaurent from "./hooks/useGetRestaurent";
import { RESTAURENT_URL } from "./constant/Variables";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useEffect, useState } from "react";
// import { useState } from "react";

const RestaurentList = ({ inputName }) => {
  let restaurentList = useGetRestaurent(RESTAURENT_URL);

  let { cards } = restaurentList;
  if (!cards) {
    return null;
  }

  let { restaurants } = cards[4]?.card?.card?.gridElements?.infoWithStyle;
  if (!restaurants) {
    return null;
  }

  // console.log(inputName);

  return (
    <div>
      <div className="flex flex-wrap flex-shrink-0">
        {/* inputName is grater then or equal 1 than show inputName.map otherWise restaurent.map */}
        {inputName.length >= 1
          ? inputName.map((res) => (
              <Link key={res?.info?.id} to={"/restaurentCard/" + res?.info?.id}>
                <Card data={res} urlId={res?.info?.id} />
              </Link>
            ))
          : restaurants.map((res) => (
              <Link key={res?.info?.id} to={"/restaurentCard/" + res?.info?.id}>
                <Card data={res} urlId={res?.info?.id} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default RestaurentList;
