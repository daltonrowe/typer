import gameState from "./gameState.js";
import { removeListeners } from "./listeners.js";

const gameComplete = function () {
  removeListeners();
  gameState.rootEl.classList.add("complete");
  gameState.finishTime = new Date().getTime();
  const elapsedTime = gameState.finishTime / 1000 - gameState.startTime / 1000;

  let accuracy;
  if (gameState.numberOfErrors) {
    accuracy =
      gameState.numberOfErrors / gameState.numberOfErrors +
      gameState.numberOfCorrect;
  } else {
    accuracy = 0;
  }

  console.log("total:", gameState.numberOfCorrect + gameState.numberOfErrors);
  console.log("errors:", gameState.numberOfErrors);

  gameState.wordEl.textContent = `You Win! 
Accuracy: ${100 - accuracy}%. 
Time: ${elapsedTime.toFixed(2)} seconds`;
};

export default gameComplete;
