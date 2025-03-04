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
  .then(response => response.json())
  .then(data => {
    button.addEventListener("click", () => {
      const inputbox = document.getElementById('inputbox').value;
      const inputboxValue = inputbox.trim().toLowerCase();

      const char = data.find(char1 => char1.name.trim().toLowerCase() === inputboxValue);

      if (char) {
        name.textContent = char.name;
        age.textContent = char.age || "-"; 
        bounty.textContent = char.bounty || "-"; 
        size.textContent = char.size || "-"; 
      } else {
        name.textContent = "Not found";
        age.textContent = "-";
        bounty.textContent = "-";
        size.textContent = "-";
      }
    });
  });


