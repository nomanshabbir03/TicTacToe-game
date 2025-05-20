let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let result = document.querySelector(".winner");
let newGame = document.querySelector(".new-btn");
let msg_container = document.querySelector(".msg-container"); 


let playerO = true;
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      box.innerText = "O";
      playerO = false;
    } else {
      box.innerText = "X";
      playerO = true;
    }
    box.disabled = true;
    checkWinner(box);
  });
});

const checkWinner = () => {
  let isDraw = true;
  for (let pattern of winningPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return;
      }
    }
  }

  boxes.forEach((box) => {
    if (box.innerText === "") isDraw = false;
  });

  if (isDraw) {
    result.innerText = "It's a Draw!";
    msg_container.classList.remove("hide");
  }
};


const showWinner = (winner) =>{
    result.innerText = `Congratulations! Winner is "${winner}"`;
    msg_container.classList.remove("hide");
    disabledBoxes();
}

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


reset.addEventListener("click", () =>{
    playerO = true;
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
})

newGame.addEventListener("click", ()=>{
    msg_container.classList.add("hide");
    playerO = true;
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
})