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

const Single = ({route}) => {
  const {singleMedia} = route.params;
  // console.log('route filename', singleMedia.filename);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{uri: uploadsUrl + singleMedia.filename}}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 20, alignItems: 'flex-start'}}>
        <Text style={styles.titleText}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    marginVertical: 2,
    padding: 8,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageBox: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 2,
    overflow: 'hidden',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
