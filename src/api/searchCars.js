import axios from "axios";

export const searchCars = async (query) => {
  try {
    const response = await axios.get("https://myfakeapi.com/api/cars/");
    const cars = response.data.cars.slice(0, 48);

    // Filter cars by make or model property matching the query
    const filteredCars = cars.filter(
      (car) =>
        car.car.toLowerCase().includes(query.toLowerCase()) ||
        car.car_model.toLowerCase().includes(query.toLowerCase())
    );

    return filteredCars;
  } catch (error) {
    throw error;
  }
};
