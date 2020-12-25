import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";

const url = "http://media.mw.metropolia.fi/wbma/uploads/";

const ListItem = ({ singleMedia }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.imageBox}>
          <Image

            source={{ uri: url + singleMedia.filename }}
          />
        </View>
        <View
          style={{ flex: 1, marginHorizontal: 20, alignItems: "flex-start" }}
        >
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
  imageBox: {
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.3,

    overflow: "hidden",
    flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
