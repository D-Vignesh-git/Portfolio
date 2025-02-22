const display=document.getElementById('display');


function appendtodisplay(input){
    display.value=display.value+input;
}
function cleardisplay(){
    display.value="";
}

function calculate(){
    try{
    display.value=eval(display.value);
}
catch(error){
  display.value="error";
};
}

function del(){
    display.value=display.value.slice(0, -1);
}