import axios from "axios";

 export const baseUrl="https://bayut.p.rapidapi.com"

export const fetchApi= async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '8adbc92d9emshec753aad7a0f07dp142162jsn3d8d33d76462',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
  }