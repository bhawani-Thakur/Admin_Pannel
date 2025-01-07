import { GET_BUSINESSES, UPADTE_BUSINESS_STATUS } from "../constants/constants";
import axios from "axios";

const token = localStorage.getItem("token");
async function getAllBusinessApi() {
  const baseUrl = `${import.meta.env.VITE_SERVER_URI}${GET_BUSINESSES}`;
  try {
    const response = await axios.get(baseUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateBusinessStatusApi(id, status) {
  const baseUrl = `${import.meta.env.VITE_SERVER_URI}${UPADTE_BUSINESS_STATUS}`;
  const data = { id, status };
  try {
    const res = await axios.put(baseUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    throw error;
    // throw new Error("Failed to update Business Status", error);
  }
}
export { getAllBusinessApi, updateBusinessStatusApi };
