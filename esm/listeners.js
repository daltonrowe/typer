import checkLetter from "./checkLetter.js";

export const attachListeners = function () {
  document.addEventListener("keydown", checkLetter);
};

export const removeListeners = function () {
  document.removeEventListener("keydown", checkLetter);
};
