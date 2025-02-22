const choices=["rock","paper","scissor"];
const yourscore=document.getElementById('your-score');
const computerscore=document.getElementById('computer-score');
const yourchoice=document.getElementById('your-choice');
const computerchoice=document.getElementById('computer-choice');
const resultdisplay=document.getElementById('result');
let ys=0;
let cs=0;

function playgame(playerchoice){
    const computer=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerchoice===computer){
       result="its a Tie";
    }
    else{
        switch(playerchoice){
            case "rock":
            result=(computer==="scissor") ? "You win": "You Lose";
            break;
            case "paper":
                result=(computer==="rock") ? "You win": "You Lose";
                break;
                case "scissor":
                    result=(computer==="paper") ? "You win": "You Lose";
                    break;

        }
    }
    resultdisplay.classList.remove("greentext","redtext");


    switch(result){
        case "You win":
            resultdisplay.classList.add("greentext");
            ys++;
            yourscore.textContent=ys;
            break;
            case "You Lose":
            resultdisplay.classList.add("redtext");
            cs++;
            computerscore.textContent=cs;
            break;
    }
    resultdisplay.textContent=result;
    yourchoice.textContent=playerchoice;
    computerchoice.textContent=computer;

}