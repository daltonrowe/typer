const gameState = {
  wordList: ["test", "words", "pizza", "time", "with", "tacos"],
  currentWord: 0,
  startTime: 0,
  finishTime: 0,
  numberOfCorrect: 0,
  numberOfErrors: 0,

  rootEl: document.querySelector("#root"),
  wordEl: document.querySelector("#word"),
  startEl: document.querySelector("#start"),
};

export default gameState;
