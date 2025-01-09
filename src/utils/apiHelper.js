import axios from "axios";

export const handleFormSubmit = async (
  endpoint,
  data,
  token = null,
  method = "GET"
) => {
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await axios({ url: endpoint, method, data, headers });

    return response;
  } catch (error) {
    // console.log(" Api Error Object ", error);
    throw error;
  }
};
