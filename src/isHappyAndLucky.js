import isLucky from './isLucky.js';
import isHappy from './isHappy.js'

function isHappyAndLucky(number) {
  return "Número " + isLucky(number) + " e " + isHappy(number);
}