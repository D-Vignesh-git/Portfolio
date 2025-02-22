const slides=document.querySelector('.slides');
const nextbtn=document.querySelector('.next');
const prevbtn=document.querySelector('.prev');
let currentslide=0;
const totalslide=slides.children.length;

function showSlide(index){
    if(index>=totalslide){
        currentslide=0;
    }
    else if(index<=0){
        currentslide=totalslide-1;
    }
    else{
        currentslide=index;
    }
    const offset = -currentslide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}
nextbtn.onclick=function nextSlide() {
    showSlide(currentslide + 1);
}

 prevbtn.onclick=function prevSlide() {
    showSlide(currentslide - 1);
}