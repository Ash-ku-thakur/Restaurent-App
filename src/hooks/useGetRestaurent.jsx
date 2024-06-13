import { useEffect, useState } from "react";

const useGetRestaurent = (url) => {
  let [restaurentList, setRestaurentList] = useState([]);

  let fetchData = async () => {
    let data = await fetch(url);

    let json = await data.json();

    setRestaurentList(json?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurentList;
};

export default useGetRestaurent;
