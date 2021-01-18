import {useState, useEffect} from 'react';
import {mediaUrl} from '../utils/variables';

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

export {useLoadMedia};
