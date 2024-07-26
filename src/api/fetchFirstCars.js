import axios from "axios";

export const fetchFirstCars = async (limit) => {
  try {
    const response = await axios.get(
      `https://freetestapi.com/api/v1/cars?limit=${limit}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
