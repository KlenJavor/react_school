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

const url = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = ({singleMedia, navigation}) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Single', {singleMedia});
        }}
        style={{flex: 1, flexDirection: 'row'}}
      >
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{uri: url + singleMedia.filename}}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 20, alignItems: 'flex-start'}}>
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
    backgroundColor: 'lightgray',
    marginVertical: 2,
    padding: 8,
    borderColor: 'black',
    borderWidth: 0.5,
    elevation: 5,
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
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
