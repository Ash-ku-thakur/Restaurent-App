import { useDispatch, useSelector } from "react-redux";
import RestaurentCard from "./RestaurentCard";
import { deleteAllCart } from "./slicers/AddtoCartSlicer";
import { FcDeleteDatabase } from "react-icons/fc";

let IntheCart = () => {
  let cartData = useSelector((state) => state?.AddToCart?.cartList);
  let dispatch = useDispatch();

  let handleAlldelete = () => {
    dispatch(deleteAllCart());
  };
  return (
    <div>
      <div className="relative">
        <h2 className="absolute right-[8.5rem]" onClick={handleAlldelete}>
          <FcDeleteDatabase  size={30}/>
        </h2>
      </div>
      {cartData.map((reduxData, index) => (
        <RestaurentCard key={index} data={reduxData} />
      ))}
    </div>
  );
};

export default IntheCart;
