let nav = document.querySelector("#mobileNav");


function toggleMenu(){
    console.log("nav");

    if(nav.style.opacity == 1){
        nav.style.opacity = 0
    }else{

        nav.style.opacity = 1;
    }

}


function init(){
    console.log("hi");
    document.querySelector("#toggleMobileMenu").addEventListener("click", toggleMenu);
}


window.onload = init;