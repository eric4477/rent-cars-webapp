import axios from "axios";

export const fetchAllCars = async () => {
  try {
    const response = await axios.get("https://freetestapi.com/api/v1/cars");
    return response.data;
  } catch (error) {
    throw error;
  }
};
