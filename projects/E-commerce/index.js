const prevBt = document.querySelector(".prevBtn");
const nextBt = document.querySelector(".nextBtn");
const sliderimg = document.querySelectorAll(".slider-container img"); 
const sliderContainer = document.querySelector(".slider-container");
const slider=document.querySelector(".slider")

let currentIndex = 0;

nextBt.addEventListener("click",()=>{
    if(currentIndex<sliderimg.length-1){
        currentIndex++;
    }
    else{
        currentIndex=0;
    }
    slider.style.transform=`translateX(-${currentIndex*100}%)`;
})
prevBt.addEventListener("click",()=>{
    if(currentIndex>0){
        currentIndex--;
    }
    else{
        currentIndex=sliderimg.length-1;
    }
    slider.style.transform=`translateX(-${currentIndex*100}%)`;
})

