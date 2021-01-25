import React, {useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const Profile = ({navigation}) => {
  const {isLoggedIn, setIsLoggedIn, user} = useContext(MainContext);
  console.log('profile is logged in', isLoggedIn);
  console.log('profile user data', user);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    if (!isLoggedIn) {
      // this is to make sure isLoggedIn has changed, will be removed later
      navigation.navigate('Login');
    }
  };
  return (
    <Card>
      <Card.Divider />
      <Card.Image
        style={styles.imageBox}
        source={require('../img/img4.png')}
      ></Card.Image>
      <Card.Title>Name: {user.username}</Card.Title>
      <Card.Title>E-mail: {user.email}</Card.Title>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="Logout"
        onPress={logout}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.3,
    overflow: 'hidden',
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
