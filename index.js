const toggleHam = function(){
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("navlist").classList.toggle("open");
    if(document.getElementById("navbar").classList.contains("open")){
        setTimeout(() => {
            document.getElementById("navbar").classList.toggle("open");
        },250);
    }
    else{
        document.getElementById("navbar").classList.toggle("open");
    }
   
    
}

document.getElementById("hamburger").addEventListener("click",toggleHam);

let x = [...document.getElementsByClassName("navlist-unit")]
x.forEach(e => e.addEventListener("click",toggleHam))


