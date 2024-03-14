const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


var sliders=document.getElementsByClassName('img-slider');
var index=1;

var trans=document.documentElement;


var changeslide;
const intervaltime=2000;

let hideall=()=>{
    // sliders.forEach(slide => {
    //     slide.style.display="none";
    // })
    var i=0;
    while(i<sliders.length){
        sliders[i].style.display="none";
        i++;
    }
}

let nextslide=()=>{
    hideall();
    trans.style.setProperty("--transval","3%");
    if(index==sliders.length){
        index=0;
    }
    sliders[index].style.display="block";
    console.log('next',index)
    index++;

    if(index==sliders.length){
        index=0;
    }
    clearInterval(changeslide);
    changeslide=setInterval(nextslide,intervaltime);
}


let prevslide=()=>{
    hideall();
    trans.style.setProperty("--transval","-3%");
    index-=2;
    if(index<=-1){
        index=sliders.length-1;
    }
    sliders[index].style.display="block";
    console.log('prev',index)
    index++;
    

    // if(index==-1){
    //     index=sliders.length-1;
    // }

    clearInterval(changeslide);
    changeslide=setInterval(nextslide,intervaltime);
}