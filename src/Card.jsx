const Card = ({ data }) => {
  let {
    name,
    areaName,
    avgRatingString,
    cloudinaryImageId,
    cuisines,
    aggregatedDiscountInfoV3,
  } = data?.info;

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
        <h2>{name}</h2>
        <h2>{avgRatingString}</h2>
        {/* <h2>{cuisines}</h2> */}
        <h2>{areaName}</h2>
      </div>
    </div>
  );
};

export default Card;
