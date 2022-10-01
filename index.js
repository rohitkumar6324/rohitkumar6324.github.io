//  navbar && hamburger

const ham = document.getElementById("hamburger");
const nav = document.getElementById("navbar");

const toggleHam = function(){
    ham.classList.toggle("open");
    document.getElementById("navlist").classList.toggle("open");
    if(nav.classList.contains("open")){
        setTimeout(() => {
            nav.classList.toggle("open");
        },250);
    }
    else{
        nav.classList.toggle("open");
    }
   
    
}

ham.addEventListener("click",toggleHam);

[...document.getElementsByClassName("navlist-unit")].forEach(e => e.addEventListener("click",toggleHam));


