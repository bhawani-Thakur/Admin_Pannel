import axios from "axios";
import { ALL_ROLES, ALL_USER, UPDATE_STATUS } from "../constants/constants";

const token = localStorage.getItem("token");
async function getAllRolesApi() {
  const baseUrl = `${import.meta.env.VITE_SERVER_URI}${ALL_ROLES}`;
  try {
    const response = await axios.get(baseUrl);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch roles");
  }
}

async function getAllUserApi() {
  const baseUrl = `${import.meta.env.VITE_SERVER_URI}${ALL_USER}`;
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //  console.log(response.data)  // This will print the roles data in the console
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get the Users");
  }
}

async function updateUserStatusApi(id, status) {
  const baseUrl = `${import.meta.env.VITE_SERVER_URI}${UPDATE_STATUS}`;
  const data = { id, status };
  try {
    const res = await axios.post(baseUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    throw new Error("Failed to update User Status", error);
  }
}

export { getAllRolesApi, getAllUserApi, updateUserStatusApi };
