import RestaurentCard from "./RestaurentCard";

const RestaurentMenu = ({ data }) => {
 

  return (
    <div>
      {data &&
        data.map((items, index) => (
          <div key={index}>
            <RestaurentCard data={items} />
          </div>
        ))}
    </div>
  );
};

export default RestaurentMenu;
