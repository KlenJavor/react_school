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
import {LinearGradient} from 'react-native-svg';
import {Plus} from 'react-native-feather';

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
          <LinearGradient
            colors={['rgb(236, 150, 17)', 'rgb(180, 37, 56)']}
          ></LinearGradient>
          <Plus style={styles.menu} />
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
    height: Dimensions.get('window').width * 0.7,
    overflow: 'hidden',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'chocolate',
  },

  imageBox: {
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.65,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  menu: {
    position: 'absolute',
    top: Dimensions.get('window').width * 0.27,
    left: 20,
    color: 'black',
    width: 32,
    height: 32,
  },
});

FirstListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default FirstListItem;
