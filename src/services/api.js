import axios from "axios";

const API_URL = "https://ec2-54-91-111-1.compute-1.amazonaws.com:8000";

export const saveData = async (data) => {
  try {
    await axios.post(`${API_URL}/save`, data);
  } catch (error) {
    console.log(error.message);
  }
};
export const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/get`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
