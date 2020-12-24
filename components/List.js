import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

const url =
  "https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json";

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    {
      const loadMedia = async () => {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setMediaArray(json);
        console.log(json);
      };
      loadMedia();
    }
  }, []);
  return (
    <FlatList
      data={mediaArray}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
