const burger_button = document.getElementById("burger-menu");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const navbar = document.getElementById("navbar");
const bodypart = document.getElementById("bodypart");

let open = false;
let ready = true;

burger_button.addEventListener("click", function() {
    if (ready = true) {
        ready = false

        if (open == false) {
            navbar.style.animation = "open-navbar1 ease 1s";
        
            bodypart.style.animation = "hide-bodypart1 ease 1s";
        
            navbar.addEventListener("animationend", function() {
                navbar.style.animation = '';
                bodypart.style.animation = '';
                navbar.style.width = "100%";
                bodypart.style.opacity = "0";
        
                open = true;
                ready = true;
            })
        } else {
            navbar.style.animation = "open-navbar2 ease 1s";
        
            bodypart.style.animation = "hide-bodypart2 ease 1s";
        
            navbar.addEventListener("animationend", function() {
                navbar.style.animation = '';
                bodypart.style.animation = '';
                navbar.style.width = "15%";
                bodypart.style.opacity = "1";
        
                open = false;
                ready = true;
            })
        }

    }
})