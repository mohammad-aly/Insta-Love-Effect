const cardClick = document.querySelector('img');
const icon = document.querySelector("i");

cardClick.addEventListener("dblclick", function(){
    icon.style.transform = "scale(0.8)";
    icon.style.opacity = 0.8;

    setTimeout(function(){
        icon.style.opacity = 0;
    },1000)
    setTimeout(function(){
        icon.style.transform = "scale(0)";
    },2000)
});