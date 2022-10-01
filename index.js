//  navbar && hamburger

const ham = document.querySelector("#hamburger");
const navlist = document.querySelector("nav > ul");
const toggleHam = () => {
    ham.classList.toggle("on");
    if(ham.classList.contains("on")){
        navlist.classList.toggle("on");
       
    }
    else{
        navlist.classList.toggle("close");
        setTimeout(() => {
            navlist.classList.remove("close");
            navlist.classList.toggle("on");
        }, 250);

    }
}
ham.addEventListener("click",toggleHam)
const myvar = Array.from(document.querySelectorAll("nav > ul > li"));
myvar.forEach(element => {
    element.addEventListener("click",toggleHam); 
});