import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';

const FirstListItem = (/*{singleMedia, navigation}*/) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        /*onPress={() => {
          navigation.navigate('Upload', {singleMedia});  //navigate here to upload page
        }}*/
        style={styles.row}
      >
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            /*source={{uri: uploadsUrl + singleMedia.thumbnails.w160}}*/
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleText}>Upload</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 4,
    padding: 8,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    elevation: 2,
    height: Dimensions.get('window').width * 0.5,
    overflow: 'hidden',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'chocolate',
  },

  imageBox: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },

  textBox: {width: Dimensions.get('window').width * 0.3},
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default FirstListItem;
