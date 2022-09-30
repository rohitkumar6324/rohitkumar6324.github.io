let hey = function(){
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("navlist").classList.toggle("open");
    document.getElementById("navbar").classList.toggle("open");
}

document.getElementById("hamburger").addEventListener("click",hey);