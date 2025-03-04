const container=document.querySelector(".container");
const addbtn=document.getElementById("btn");
const inputbox=document.getElementById("input");


addbtn.addEventListener("click",()=>{
    const inputValue=inputbox.value.trim();
    if(inputValue){
    createlist(inputValue);
    inputbox.value="";

}


})

function createlist(inputValue){
    const div =document.createElement("div");
    div.classList.add("newdiv");
    div.innerHTML=inputValue;
    container.append(div);
    
};
