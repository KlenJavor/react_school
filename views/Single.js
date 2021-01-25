import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {Avatar, Card, ListItem, Text} from 'react-native-elements';
import moment from 'moment';

const Single = ({route}) => {
  const {singleMedia} = route.params;
  return (
    <Card>
      <Card.Title h4>{singleMedia.title}</Card.Title>
      <Card.Title>{moment(singleMedia.time_added).format('LLL')}</Card.Title>
      <Card.Divider />
      <Card.Image
        source={{uri: uploadsUrl + singleMedia.filename}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Card.Divider />
      <Text style={{marginBottom: 10}}>{singleMedia.description}</Text>
      <ListItem>
        <Avatar source={{uri: 'http://placekitten.com/180'}} />
        <Text>Ownername</Text>
      </ListItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
