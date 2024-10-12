import axios from "axios";

export const fetchAllCars = async () => {
  try {
    const response = await axios.get("https://myfakeapi.com/api/cars/");
    return response.data.cars.slice(0, 48);
  } catch (error) {
    throw error;
  }
};
