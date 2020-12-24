import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

const List = () => {
  return (
    <FlatList
      data={mediaArray}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
