import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

const url =
  "https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json";
let mediaArray = [];
const loadMedia = async () => {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
};

loadMedia();

const List = () => {
  return (
    <FlatList
      data={mediaArray}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
