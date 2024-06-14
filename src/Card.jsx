import { useState } from "react";

const Card = ({ data}) => {

  
  let {
    name,
    areaName,
    avgRatingString,
    cloudinaryImageId,
    cuisines,
    aggregatedDiscountInfoV3,
  } = data?.info;

  let [title] = useState(name);
  let [discription] = useState(cuisines.join(" "));
  let [minLength] = useState("1");
  let [maxLength] = useState("25");

  if (!name) {
    return null;
  }
  if (!discription) {
    return null;
  }

  return (
    <div className="px-6 py-16 hover:scale-95 transition-all">
      <div className="w-56 relative">
        <img
          className="w-full h-40 rounded-2xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt=""
        />
        <h2 className="absolute bottom-1 text-white font-extrabold text-xl text-center w-full">{`${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader}`}</h2>
      </div>

      <div className="font-semibold">
        {title.length > minLength ? (
          <p>{title.substring(0, maxLength)}</p>
        ) : (
          <p>{"title is so sort"}</p>
        )}
        <h2>{avgRatingString}</h2>
        {discription.length > minLength ? (
          <p>{discription.substring(0, maxLength)}</p>
        ) : (
          <p>{"discription is so sort"}</p>
        )}
        <h2>{areaName}</h2>
      </div>
    </div>
  );
};

export default Card;
