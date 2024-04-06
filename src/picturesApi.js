import axios from "axios";
import { perPage } from "./App";

const fetchPictures = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=mHuV7B_1dtKb7zlNk3tT5PsHrOoVx1loVJyVaKOmLAU&query=${query}&page=${page}&per_page=${perPage}&orientation=landscape`
  );
  return response.data;
};

export default fetchPictures;
