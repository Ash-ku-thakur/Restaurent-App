import { useSelector } from "react-redux";
import RestaurentCard from "./RestaurentCard";

let IntheCart = () => {
  let cartData = useSelector((state) => state?.AddToCart?.cartList);
  console.log(cartData);

  return (
    <div>
      {cartData.map((reduxData, index) => (
        <RestaurentCard key={index}  data ={reduxData}/>
      ))}
    </div>
  );
};

export default IntheCart;
