const RestaurentMenuTitle = ({ data }) => {
  return (
    <div>
      <div className="w-[70%] m-auto text-2xl font-extrabold flex justify-between items-center mt-4 cursor-pointer">
        <h3 className="">
          {data?.title}({data?.itemCards?.length})
        </h3>
        {"🔻"}
      </div>
    </div>
  );
};

export default RestaurentMenuTitle;
