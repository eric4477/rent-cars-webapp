import car1 from "/card/car1.png";
import car2 from "/card/car2.png";
import car3 from "/card/car3.png";

export function getRandomImg() {
  const arr = [car1, car2, car3];
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomRating(min = 3, max = 5) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

export function getRandomReviews(min = 1100, max = 2100) {
  return Math.round(Math.random() * (max - min) + min);
}
