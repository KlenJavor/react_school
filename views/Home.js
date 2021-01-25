import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';
import {Menu} from 'react-native-feather';
import {Settings} from 'react-native-feather';
import FirstListItem from '../components/FirstListItem';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.statbar} />
      <View>
        <ImageBackground
          source={require('../img/img2.png')}
          style={styles.bgImage}
          imageStyle={{borderBottomRightRadius: 55}}
        />
        <Menu style={styles.menu} />
        <Settings style={styles.settings} />
        <Text style={styles.text}>
          These are some unsorted photos uploaded by students
        </Text>
      </View>
      <View style={styles.boxes}>
        <FirstListItem navigation={navigation}></FirstListItem>
        <List navigation={navigation}></List>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    height: '100%',
  },
  statbar: {
    backgroundColor: 'rgb(137, 207, 240)',
  },

  bgImage: {
    width: '100%',
    height: 150,
    paddingBottom: 10,
  },
  menu: {
    position: 'absolute',
    top: 30,
    left: 20,
    color: 'white',
    width: 32,
    height: 32,
  },
  settings: {
    position: 'absolute',
    top: 30,
    right: 20,
    color: 'white',
    width: 32,
    height: 32,
  },
  text: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    padding: 10,
  },
  boxes: {
    flex: 1,
    flexDirection: 'row',
  },
});

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
