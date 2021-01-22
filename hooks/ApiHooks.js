import {useState, useEffect} from 'react';
import {baseUrl, mediaUrl} from '../utils/variables';

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
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(userCredentials),
    };
    try {
      const response = await fetch(baseUrl + 'login', options);
      const userData = await response.json();
      console.log(userData);
      if (response.ok) {
        return userData;
      } else {
        throw new Error(userData.message);
      }
    } catch (error) {
      throw new Error(error.message);
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
      throw new Error(error.mesage);
    }
  };
  return {postLogin, checkToken};
};

export {useLoadMedia, useLogin};
