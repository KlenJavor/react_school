import React, { useState } from "react";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import PropTypes from "prop-types";

const ListItem = ({ singleMedia }) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View>
      <View style={styles.gridItem}>
      <View style={styles.centeredView}>
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            style={{ flex: 1,   }}
            source={{ uri: singleMedia.thumbnails.w160 }}
          />
          <View style={{ flex: 1, marginHorizontal: 20 }}>
            <Text style={styles.titleText}>{singleMedia.title}</Text>
            <Text>{singleMedia.description}</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    backgroundColor: "#D3D3D3",
    marginVertical: 2,
    padding: 8,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
      },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
