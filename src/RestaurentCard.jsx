import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartData } from "./slicers/AddtoCartSlicer";

const RestaurentCard = ({ data }) => {
  let dispatch = useDispatch();

   // dispatch for redux Slicer
  let addToCartHandel = (item) => {
    dispatch(addToCartData(item));        
  };

  // to string length manipulating
  let [title] = useState(data?.card?.info?.description);
  let [minLength] = useState("1");
  let [maxLength] = useState("55");

  if (!title) {
    return null;
  }

  return (
    <div className="w-[70%] p-8 m-auto" onClick={() => addToCartHandel(data)}>
      <div>
        {data?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
          ? "🐔"
          : "🥒"}
      </div>
      <div className="flex justify-between w-full">
        <div className="mt-4">
          <h2 className="font-extrabold">{data?.card?.info?.name}</h2>
          <h2 className="font-extrabold">
            {data?.card?.info?.defaultPrice / 100 ||
              data?.card?.info?.price / 100}
          </h2>
          <h2 className="w-[70%]">
            {title.length > minLength ? (
              <p>{title.substring(0, maxLength)}</p>
            ) : (
              <p>{"title is so sort"}</p>
            )}
          </h2>
        </div>

        <div className="w-[15%] relative">
          <img
            className="rounded-2xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${data?.card?.info?.imageId}`}
            alt="RestaurentCardImage"
          />

          <h2 className="absolute top-2 font-extrabold text-center w-full bg-gray-300 rounded-lg cursor-pointer hover:scale-95 transition-all">
            Add to Cart
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
