import RestaurentCard from "./RestaurentCard";

const RestaurentMenu = ({ data }) => {
  return (
    <div>
      {data &&
        data.map((items, index) => <RestaurentCard data={items} key={index} />)}
    </div>
  );
};

export default RestaurentMenu;
