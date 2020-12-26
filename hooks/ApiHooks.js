
import { useState, useEffect } from "react";
const url = "http://media.mw.metropolia.fi/wbma/media/";


const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    const result = await Promise.all(
      json.map(async (item) => {
        console.log(item);
        const response = await fetch(url + item.file_id);
        const json = await response.json();
        return json;
      })
    );
    setMediaArray(result);
    console.log("RESULT", result);
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

export { useLoadMedia };
