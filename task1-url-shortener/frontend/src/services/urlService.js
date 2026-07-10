import axios from "axios";

const API = "http://localhost:5000/api/url";

export const shortenUrl = async (originalUrl) => {
  const response = await axios.post(`${API}/shorten`, {
    originalUrl,
  });

  return response.data;
};