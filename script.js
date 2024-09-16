// let boxeffect = document.querySelector('');
// let boxeffecttwo = document.querySelector('.box2');
// let dataeffect = document.querySelector('.data');

// landing animation
gsap.from(".box1",{
    y:90,
    x:150,
    delay:1,
    duration:1

})
gsap.from("#center-photo", {
    y:-600,
    duration:1
})
gsap.from(".box2",{
    y:-90,
    x:-150,
    delay:1,
    duration:1
})

gsap.from(".data",{
    duration:1,
    scale:0,
    delay:1,
    opacity:0,
})

gsap.from("#nav-bar",{
    x:140,
    duration:0.6,
    
})
gsap.from(".menu", {
      opacity:0,
      top:60,
      delay:1  
})

gsap.to("#nav-bar", {
   width:60,
   scrollTrigger:{
       trigger:"#page2",
       scroller:"body",
    //    markers:true,
       start:"top 50%",
       end:"top 30%",
       scrub:2
   }
})
gsap.to(".menu", {
    height:50,
    duration:0.6,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 30%",
        scrub:2
    }
})
gsap.to(".navigation", {
    // x:-50,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 30%",
        scrub:2
    }
})

gsap.to(".menu",{
    x:130,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:2
    }
})
// cursor
let cursor = document.querySelector("#cursor");
let body = document.querySelector("body");
body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x:e.x,
        y:e.y,
        // ease: "power2.inOut"
    })
})

// lets start the js
let homeLinks = document.querySelector(".navigation");
let linkHider = document.querySelector(".menu");
let leftCont = document.querySelector("#nav-bar");
let menuIcon = document.querySelector("#menuIcon");

// Initial state
let isMenuOpen = false;

menuIcon.addEventListener("click", () => {
    if (!isMenuOpen) {
        // Show the menu
        homeLinks.classList.remove("hidden");
        homeLinks.classList.add("show");

        // Animate the menu links
        gsap.from(".navigation", {
            opacity: 0,
            delay: 0.3,
            duration: 0.5,
            x: -70
        });

        // Animate the left container width
        gsap.to(leftCont, {
            width: "10rem", // Change to the width when the menu is open
            duration: 0.5,
            ease: "power2.inOut"
        });

         // Animate the menu icon moving back to the original position and fading in
        gsap.to(linkHider, {
            x: 0,  // Move back to the original position
            opacity: 1, // Fade in
            duration: 0.5,
            ease: "power2.inOut"
        });
    } else {
        // Hide the menu
        homeLinks.classList.remove("show");
        homeLinks.classList.add("hidden");

        // Animate the left container width
        gsap.to(leftCont, {
            width: "60px", // Change to the width when the menu is closed
            duration: 0.5,
            ease: "power2.inOut"
        });

        // Animate the menu icon moving to the left and fading out
        gsap.to(linkHider, {
            x: 130,  // Example move to the left 
            duration: 0.5,
            ease: "power2.inOut"
        });
        
       
    }

    // Toggle the menu state
    isMenuOpen = !isMenuOpen;
});
