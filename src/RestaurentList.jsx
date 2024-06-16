import Card from "./Card";
import useGetRestaurent from "./hooks/useGetRestaurent";
import { RESTAURENT_URL } from "./constant/Variables";
import { Link } from "react-router-dom";

const RestaurentList = () => {
  let restaurentList = useGetRestaurent(RESTAURENT_URL);
  let { cards } = restaurentList;
  if (!cards) {
    return null;
  }

  let { restaurants } = cards[4]?.card?.card?.gridElements?.infoWithStyle;
  if (!restaurants) {
    return null
  }

  return (
    <div className="flex flex-wrap flex-shrink-0">
      {restaurants.map((res) => (
        <Link key={res?.info?.id} to={"/restaurentCard/" + res?.info?.id}>
          <Card data={res} urlId={res?.info?.id} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurentList;
