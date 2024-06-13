import RestaurentCard from "./RestaurentCard";
import { MENU_URL } from "./constant/Variables";
import useGetRestaurent from "./hooks/useGetRestaurent";

const RestaurentMenuList = () => {
  let restaurentList = useGetRestaurent(MENU_URL);
  let { cards } = restaurentList;
  if (!cards) {
    return null;
  }
  let { itemCards } = cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);
  return (
    <div>
      {itemCards.map((item, index) => (
        <RestaurentCard data={item} key={index} />
      ))}
    </div>
  );
};

export default RestaurentMenuList;
