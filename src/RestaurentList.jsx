import { useEffect, useState } from "react";
import Card from "./Card";

const RestaurentList = () => {
  let [restaurents, setrestaurents] = useState([]);

  let fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&p"
    );

    let json = await data.json();

    setrestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(restaurents[0]);

  useEffect(() => {
    fetchData();
  }, []);

  if (!restaurents[0]) {
    return null;
  }

  return (
    <div className="flex flex-wrap flex-shrink-0">
      {restaurents.map((res) => (
        <Card data={res} key={res?.info?.id} />
      ))}
    </div>
  );
};

export default RestaurentList;
