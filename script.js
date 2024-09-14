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

gsap.from("#nav-bar, .second-hider",{
    x:140,
    duration:0.6,
    
})
gsap.from(".floting-section", {
      opacity:0,
      top:60,
      delay:1  
})

gsap.to("#nav-bar", {
   width:60,
   scrollTrigger:{
       trigger:"#page2",
       scroller:"body",
       markers:true,
       start:"top 60%",
       end:"top 30%",
       scrub:2
   }
})

gsap.to(".menu",{
    x:130,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})
gsap.to(".floting-section" ,{
    backgroundColor:"transparent",
    duration:0.77,
    delay:0.1,
       scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 96%",
        end:"top 90%",
        scrub:true
    }
})

// lets start the js
let homeLinks = document.querySelector(".navigation")
let linkHider = document.querySelector(".menu")
// event listner
linkHider.addEventListener("click",() => {
    homeLinks.classList.toggle("hidden")
    if (homeLinks.classList.contains("hidden")) {
        gsap.from(".navigation", {
            opacity:1,
            delay:0.3,
            duration:0.5,
            x:0
          
        })
       
    } else {
        gsap.from(".navigation", {
            opacity:0,
            delay:0.3,
            duration:0.5,
            x:-110
        })
       
    }

    
})