import { GET_BUSINESSES } from "../constants/constants";
import axios from "axios";

const token = localStorage.getItem("token");
async function getAllBusinessApi() {
  const baseUrl = `${import.meta.env.VITE_SERVER_URI}${GET_BUSINESSES}`;
  try {
    const response = await axios.get(baseUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export { getAllBusinessApi };
