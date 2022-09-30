const toggleHam = function(){
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("navlist").classList.toggle("open");
    document.getElementById("navbar").classList.toggle("open");
}

document.getElementById("hamburger").addEventListener("click",toggleHam);

let x = [...document.getElementsByClassName("navlist-unit")]
x.forEach(e => e.addEventListener("click",toggleHam))


