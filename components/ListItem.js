import React from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {Avatar, ListItem as RNEListItem} from 'react-native-elements';
import {Image, Text, Button} from 'react-native-elements';

const ListItem = ({singleMedia, navigation}) => {
  return (
    <RNEListItem
      onPress={() => {
        navigation.navigate('Single', {singleMedia});
      }}
      style={styles.row}
    >
      <View style={styles.imageBox}>
        <Avatar
          style={styles.image}
          source={{uri: uploadsUrl + singleMedia.thumbnails.w160}}
        />
      </View>

      <RNEListItem.Subtitle style={styles.titleText}>
        {singleMedia.title}
      </RNEListItem.Subtitle>
      <RNEListItem.Chevron></RNEListItem.Chevron>
    </RNEListItem>
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
    fontSize: 16,
    color: 'chocolate',
  },
  imageBox: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
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
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
