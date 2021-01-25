import React from 'react';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {Avatar, ListItem as RNEListItem} from 'react-native-elements';
import {StyleSheet, Dimensions} from 'react-native';
import moment from 'moment';
import {View} from 'react-native';

const ListItem = ({navigation, singleMedia}) => {
  // console.log(props);
  return (
    <RNEListItem
      onPress={() => {
        navigation.navigate('Single', {file: singleMedia});
      }}
    >
      <Avatar
        size="large"
        square
        style={styles.imageBox}
        source={{uri: uploadsUrl + singleMedia.thumbnails.w160}}
      ></Avatar>

      <RNEListItem.Content>
        <RNEListItem.Title h4>{singleMedia.title}</RNEListItem.Title>
        <RNEListItem.Subtitle>
          {moment(singleMedia.time_added).format('LLL')}
        </RNEListItem.Subtitle>
      </RNEListItem.Content>
      <RNEListItem.Chevron />
    </RNEListItem>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 4,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    elevation: 2,
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    overflow: 'hidden',
  },
  imageBox: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  textBox: {width: Dimensions.get('window').width * 0.5},
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
