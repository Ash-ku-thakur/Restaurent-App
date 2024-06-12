import Card from "./Card";
import useGetRestaurent from "./hooks/useGetRestaurent";

const RestaurentList = () => {
  let restaurents = useGetRestaurent();
  if (!restaurents) {
    return null;
  }

  return (
    <div className="flex flex-wrap flex-shrink-0">
      {restaurents.map((res) => (
        <Card data={res} key={res?.info?.id} />
      ))}
    </div>
  );
};

export default RestaurentList;
