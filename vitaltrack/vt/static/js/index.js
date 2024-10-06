const burger_button = document.getElementById("burger-menu");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const navbar = document.getElementById("navbar");
const bodypart = document.getElementById("bodypart");
const title2 = document.getElementById("title2");

let open = false;
let ready = true;

burger_button.addEventListener("click", function() {
    if (window.innerWidth < 480) {
        if (ready = true) {
            ready = false

            if (open == false) {
                span1.style.animation = "span1_1 ease 1s";
                span2.style.animation = "span2_1 ease 1s";
                span3.style.animation = "span3_1 ease 1s";
                title2.style.animation = "title_anim ease 1s";
                
                span1.addEventListener("animationend", function() {
                    span1.style.animation = '';
                    span2.style.animation = '';
                    span3.style.animation = '';
                    title2.style.animation = '';
                    span1.style.top = "3vw";
                    span1.style.rotate = "45deg";
                    span2.style.opacity = "0";
                    span3.style.top = "-3vw";
                    span3.style.rotate = "-45deg";
                    title2.style.left = "-20vw";
                    title2.style.opacity = "0";
                })

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
                span1.style.animation = "span1end ease 1s";
                span2.style.animation = "span2end ease 1s";
                span3.style.animation = "span3end ease 1s";
                title2.style.animation = "title_anim_end ease 1s";
                title2.style.opacity = "1";
                
                span1.addEventListener("animationend", function() {
                    span1.style.animation = '';
                    span2.style.animation = '';
                    span3.style.animation = '';
                    title2.style.animation = '';
                    span1.style.top = "0";
                    span1.style.rotate = "0deg";
                    span2.style.opacity = "1";
                    span3.style.top = "0";
                    span3.style.rotate = "0deg";
                    title2.style.left = "-4.5vw";
                    title2.style.opacity = "1";
                })

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
    } else {
        if (ready = true) {
            ready = false

            if (open == false) {
                span1.style.animation = "span1 ease 1s";
                span2.style.animation = "span2 ease 1s";
                span3.style.animation = "span3 ease 1s";
                title2.style.animation = "title_anim ease 1s";
                
                span1.addEventListener("animationend", function() {
                    span1.style.animation = '';
                    span2.style.animation = '';
                    span3.style.animation = '';
                    title2.style.animation = '';
                    span1.style.top = "2vw";
                    span1.style.rotate = "45deg";
                    span2.style.opacity = "0";
                    span3.style.top = "-2vw";
                    span3.style.rotate = "-45deg";
                    title2.style.left = "-20vw";
                    title2.style.opacity = "0";
                })

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
                span1.style.animation = "span1end ease 1s";
                span2.style.animation = "span2end ease 1s";
                span3.style.animation = "span3end ease 1s";
                title2.style.animation = "title_anim_end ease 1s";
                title2.style.opacity = "1";
                
                span1.addEventListener("animationend", function() {
                    span1.style.animation = '';
                    span2.style.animation = '';
                    span3.style.animation = '';
                    title2.style.animation = '';
                    span1.style.top = "0";
                    span1.style.rotate = "0deg";
                    span2.style.opacity = "1";
                    span3.style.top = "0";
                    span3.style.rotate = "0deg";
                    title2.style.left = "-4.5vw";
                    title2.style.opacity = "1";
                })

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
    }
})