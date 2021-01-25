import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {StatusBar} from 'expo-status-bar';

import {Card, ListItem, Button, Icon} from 'react-native-elements';

const Single = ({route}) => {
  const {singleMedia} = route.params;
  // console.log('route filename', singleMedia.filename);
  return (
    <Card>
      <Card.Divider />
      <Card.Image
        style={styles.imageBox}
        source={{uri: uploadsUrl + singleMedia.filename}}
      ></Card.Image>
      <Card.Title>{singleMedia.title}</Card.Title>
      <Text>{singleMedia.description}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.6,
    overflow: 'hidden',
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
