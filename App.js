let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    trueO=true;
    resetboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
     console.log("box was clicked");
     if(turnO){
        box.innerText="O";
        turnO=false;
     }else{
        box.innerText="X";
        turnO=true;
     }
     box.disabled=true;
     checkWinner();
    });
});

const resetboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Value=boxes[pattern[0]].innerText;
        let pos2Value=boxes[pattern[1]].innerText;
        let pos3Value=boxes[pattern[2]].innerText;

        if(pos1Value != ""&& pos2Value != ""&& pos3Value != ""){
            if(pos1Value==pos2Value && pos3Value==pos1Value){
                console.log("Winner");
                showWinner(pos1Value);
            }
        }
    }
};

resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);
