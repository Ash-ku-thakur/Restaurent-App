import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartData, deleteToCart } from "./slicers/AddtoCartSlicer";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineDeleteSweep } from "react-icons/md";

const RestaurentCard = ({ data }) => {
  let dispatch = useDispatch();

  // dispatch for redux Slicer
  let addToCartHandel = (item) => {
    dispatch(addToCartData(item));
  };

  
  let handelCartDelete = (item) => {
    dispatch(deleteToCart(item));
  };

  // to string length manipulating
  let [title] = useState(data?.card?.info?.description);
  let [minLength] = useState("1");
  let [maxLength] = useState("55");

  if (!title) {
    return null;
  }

  return (
    <div className="w-[70%] m-auto mt-4" >
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

          <div
            onClick={() =>addToCartHandel(data)}
            className="absolute top-2 font-extrabold text-center bg-gray-300 rounded-lg cursor-pointer hover:scale-95 transition-all"
          >
            <AiOutlineStar size="2rem" />
          </div>

          <div
            onClick={() =>handelCartDelete(data)}
            className="absolute bottom-2 font-extrabold text-center bg-gray-300 rounded-lg cursor-pointer hover:scale-95 transition-all"
          >
            <MdOutlineDeleteSweep size="1.5rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
