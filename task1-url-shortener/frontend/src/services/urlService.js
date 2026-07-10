import axios from "axios";

const API = "https://codealpha-urlshortener-62pb.onrender.com/api/url";

export const shortenUrl = async (originalUrl) => {
  const response = await axios.post(`${API}/shorten`, {
    originalUrl,
  });

  return response.data;
};