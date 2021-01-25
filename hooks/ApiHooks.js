import {useState, useEffect} from 'react';
import {baseUrl, mediaUrl} from '../utils/variables';

// general function for fetching (fetchOptions default value is empty object)
const doFetch = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('doFetch failed');
  }
  return await response.json();
};

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(mediaUrl);
      const json = await response.json();
      //  console.log(json);

      const result = await Promise.all(
        json.map(async (item) => {
          //y     console.log(item);
          const response = await fetch(mediaUrl + item.file_id);
          const json = await response.json();
          return json;
        })
      );
      setMediaArray(result);
    } catch (error) {
      console.error('loadMedia error', error);
    }
  };
  useEffect(() => {
    try {
      loadMedia();
    } catch (error) {
      throw error;
    }
  }, []);

  return mediaArray;
};

const useLogin = () => {
  const postLogin = async (userCredentials) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userCredentials),
    };
    try {
      const response = await doFetch(baseUrl + 'login', options);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {postLogin};
};

const useUser = () => {
  const postRegister = async (inputs) => {
    console.log('trying to create user', inputs);
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    try {
      const response = await fetch(baseUrl + 'users', fetchOptions);
      const json = await response.json();
      console.log('register resp', json);
      if (response.ok) {
        return json;
      } else {
        throw new Error(json.message + ': ' + json.error);
      }
    } catch (e) {
      console.log('ApiHooks register', e.message);
      throw new Error(e.message);
    }
  };

  const checkToken = async (token) => {
    try {
      const options = {
        method: 'GET',
        headers: {'x-access-token': token},
      };
      const response = await fetch(baseUrl + 'users/user', options);
      const userData = response.json();
      if (response.ok) {
        return userData;
      } else {
        throw new Error(userData.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {postRegister, checkToken};
};

export {useLoadMedia, useLogin, useUser};
