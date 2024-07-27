import axios from "axios";

export const searchCars = async (query) => {
  try {
    const response = await axios.get("https://freetestapi.com/api/v1/cars");
    const cars = response.data;

    // Filter cars by make or model property matching the query
    const filteredCars = cars.filter(
      (car) =>
        car.make.toLowerCase().includes(query.toLowerCase()) ||
        car.model.toLowerCase().includes(query.toLowerCase())
    );

    return filteredCars;
  } catch (error) {
    throw error;
  }
};
