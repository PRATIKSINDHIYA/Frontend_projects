let btn = document.querySelector(".btn")
let body = document.querySelector("body")

let currentmode = "light";
btn.innerText = "dark mode"

const toggle = () =>{
    if(currentmode == "light"){
        body.style.backgroundColor =  "black";
        btn.innerText = "light mode"
        body.style.color =  "#ffff";
        currentmode = "dark";
        console.log(currentmode)

    }
    else if(currentmode == "dark"){
        body.style.backgroundColor =  "white";
        body.style.color =  "black";
        btn.innerText = "dark mode"
        currentmode = "light";
        console.log(currentmode);

    }
}

let data6 = document.querySelector(".boxes6")
btn.addEventListener("click",toggle)
let names = "....Welcome_To_TicTocToe_Game...."
for (let i = 0; i < names.length; i++) {
    setTimeout(() => {
        data6.innerText += names[i];
    }, 80 * i);
}

let winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let boxes = document.querySelectorAll(".box")
let winnername= document.querySelector(".winner")
let count = true;


const disableBoxes = () => {
    boxes.forEach((box) =>
        box.style.pointerEvents = "none");
};


const showwinner = (part1) =>{
    winnername.innerText = `Congratulation , Winner is ${part1}`;
    disableBoxes();
}

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = ""
        winnername.innerText = ""
        box.style.pointerEvents = "auto"
    });
    winnerName.innerText = "";
    count = true;
}

 
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(count == true){
            box.innerText = "X"
            count = false
        }
        else{
            box.innerText = "O"
            count = true
        }
        checkwinner()

    })
})

const checkwinner = () =>{
    for (const element of winning) {
        let part1 = boxes[element[0]].innerText
        let part2 = boxes[element[1]].innerText
        let part3 = boxes[element[2]].innerText

       if(part1 !="" && part2 !="" && part3 != ""){
        if(part1 === part2 && part2 === part3){
            console.log("winner")
            showwinner(part1);
            }
       }
    }
}