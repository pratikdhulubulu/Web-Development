let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let winnerMsg = document.querySelector(".winner-msg");

let turnO = true;
const winPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8]
];

boxes.forEach((box) => {
      box.addEventListener("click", () => {
            if (turnO) {
                  box.innerText = "O";
                  turnO = false;
            }
            else {
                  box.innerText = "X";
                  turnO = true;
            }
            box.disabled = true;
            checkWinner();
      });
});
 
const checkWinner = () => {
      for (pattern of winPatterns) {
            let a = boxes[pattern[0]].innerText;
            let b = boxes[pattern[1]].innerText;
            let c = boxes[pattern[2]].innerText;
            if (a === b && b === c && a !== "") {
                  showWinnerMsg(a);
            }
      }
};

const showWinnerMsg = (a) => {
      disableBoxes();
      winnerMsg.innerText = `Player ${a} won!`;
      winnerMsg.style.display = flex;
};

const disableBoxes = () => {
      for (let box of boxes) {
            box.disabled = true;
      }
};
const enableBoxes = () => {
      for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
      }
};
const resetGame = () => {
      turnO = true;
      enableBoxes();
      winnerMsg.innerText = ""
};

resetBtn.addEventListener("click", resetGame);