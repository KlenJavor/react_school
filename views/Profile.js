import React, {useContext} from 'react';
import {StatusBar} from 'expo-status-bar';
import PropTypes from 'prop-types';
import {StyleSheet, View, Button, Text, SafeAreaView} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = (props) => {
  const [state, setState] = useContext(MainContext);

  // console.log('username', formValues.fullname)
  const logout = async () => {
    await AsyncStorage.clear();

    setState((state) => ({...state, isLoggedIn: false}));
    if (!state.isLoggedIn) {
      props.navigation.navigate('Login');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Text>{state.user.username}</Text>
      <Text>{state.user.full_name}</Text>
      <Text>{state.user.email}</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
