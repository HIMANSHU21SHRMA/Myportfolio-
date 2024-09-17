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
    x:-50,
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
gsap.from("#page2 #Journey", {
    filter:"blur(10px)",
    x:-100,  
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 30%",
        scrub:2
    }
}) 
let tl = gsap.timeline();
tl.from(".color", {
    opacity:0,
    x:-30,
    delay:0.3,
    duration:0.3,
    stagger:0.6,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:2
    }
    
})
// page 3


gsap.to("#orange-line", {

  strokeDasharray: "1000", 
  scrollTrigger: {
    trigger: "#progress-line",
    start: "top 80%", 
    end: "top 20%",   
    scrub: 2,         
    // markers: true
  }
});


tl.to("#progress-line .animTxt", {
    attr:{fill: "green"},
    delay:0.1,
    stagger:0.1,
    scrollTrigger: {
        trigger: "#progress-line",
        start: "top 80%", 
        end: "top 20%",  
    //   scrub: 2,   
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
// for string
let initialPath = 'M 50 100 Q 550 100 1030 100';
let finalPath = 'M 50 100 Q 550 100 1030 100';
 
let string = document.querySelector(".string");

string.addEventListener("mousemove", (e) => {
    let x = e.x
    let y = e.y - 318;

  initialPath = `M 50 100 Q ${x} ${y} 1030 100`;

 gsap.to("svg path", {
    attr:  {d: initialPath},
    duration:0.3,
    ease:"power3.out"

  });
})
string.addEventListener("mouseleave", (e) => {
    gsap.to("svg path", {
        attr:  {d: finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    
      });
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
        gsap.to(".navigation", {
            opacity: 1,
            delay: 0.3,
            duration: 0.5,
            x: 0
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
