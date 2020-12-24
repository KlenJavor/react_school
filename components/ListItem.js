import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import PropTypes from "prop-types";

const ListItem = ({ singleMedia }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: singleMedia.thumbnails.w160 }}
        />
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={styles.titleText}>{singleMedia.title}</Text>
          <Text>{singleMedia.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    marginVertical: 2,
    padding: 8,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: "20px",
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
