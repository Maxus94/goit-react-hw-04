import axios from "axios";
export const fetchPictures = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=mHuV7B_1dtKb7zlNk3tT5PsHrOoVx1loVJyVaKOmLAU&query=${query}&page=${page}&per_page=12&orientation=landscape`
  );
  return response.data.results;
};