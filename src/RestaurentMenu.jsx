import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import RestaurentMenuTitle from "./RestaurentMenuTitle";

const RestaurentMenu = ({ data, setGetIndex, Toggle }) => {
  let [Toogle2, setToogle2] = useState(false);
  let handelClick = () => {
    setGetIndex();            // here call the callBack with the on click (means on that index that i will click)
    setToogle2(!Toogle2);    // childComponent me rekh ne se sab ke lia click method ban jayga 
  };
  console.log(Toogle2);
  return (
    <div>
      <div>
        <div onClick={handelClick}>
          <RestaurentMenuTitle data={data} />
        </div>
      </div>
      {Toogle2 && Toggle && (
        <div>
          {data &&
            data?.itemCards.map((items) => (
              <div key={items?.card?.info?.id}>
                <RestaurentCard data={items} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default RestaurentMenu;
