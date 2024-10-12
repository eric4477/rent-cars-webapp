import axios from "axios";

export const fetchFirstCars = async () => {
  try {
    const response = await axios.get("https://myfakeapi.com/api/cars/");
    return response.data.cars.slice(0, 4);
  } catch (error) {
    throw error;
  }
};
