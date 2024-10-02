export default function generateRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
