const button=document.getElementById('mybtn');
const name=document.getElementById('name');
const age=document.getElementById('age');
const bounty=document.getElementById('bounty');
const size=document.getElementById('size');
const menutbn=document.getElementById('menubtn');
const cross=document.getElementById('cross');
const content=document.querySelector('.character-list');


menutbn.addEventListener("click",event=>{
    content.style.display = "block";
    menutbn.style.display="none";
});
cross.addEventListener("click",event=>{
    content.style.display="none";
    menutbn.style.display="block";

})
fetch("https://api.api-onepiece.com/v2/characters/en")
.then(response=>response.json())
.then(data=>{
button.addEventListener("click",()=>
{
    const inputbox=document.getElementById('inputbox').value;
    const inputboxValue = inputbox.trim().toLowerCase().replace(/\s+/g, '-');

    const char = data.find(char1 => char1.name.toLowerCase() === inputbox);
     


    if(char){
        name.textContent=char.name;
        age.textContent=char.age;
        bounty.textContent=char.bounty;
        size.textContent=char.size;
        document.body.className=inputboxValue;
    }
    
    else{
        name.textContent="Not found";
        age.textContent="-";
        bounty.textContent="-";
        size.textContent="-";

    }

    
})

})
const apikey=`6f77cb82d5226580dda9136eaf753b0c`;
const city="kerala";
const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
fetch(apiurl)
.then(response=>response.json())
.then(data=>console.log(data));
