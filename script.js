let burgerMenu = document.querySelector("#burger-menu");
let overlay = document.querySelector("#menu");

burgerMenu.addEventListener("click", function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});





const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('click', () => {
    document.querySelector('.sertificates-container').classList.toggle('show');
})

//scroll to top
const scrollBtn = document.querySelector('.scrBtn');
console.log(scrollBtn);
scrollBtn.onclick = () =>{
    window.scrollTo (0,0);
}

//animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".skills-item", { scrollTrigger: {
    trigger:".skills-item",
    toggleActions: "restart restart restart restart"}, 
     opacity:0, ease:"power2.inOut", duration:1, stagger:1})

gsap.from(".info", { scrollTrigger: {
        trigger:".contactContainer",
        toggleActions: "restart restart restart restart"}, 
        y:50, opacity:0, ease:"power2.inOut", duration:2, delay:.5})

gsap.from(".form", { scrollTrigger: {
        trigger:".contactContainer",
        toggleActions: "restart restart restart restart"}, 
        y:50, opacity:0, ease:"power2.inOut", duration:2, delay:.5})

gsap.from(".btn", { scrollTrigger: {
        trigger:".btn",
        toggleActions: "restart restart restart restart"}, 
        opacity:0, duration:2, delay:3})

        gsap.from(".intro", { scrollTrigger: {
            trigger:".intro",
            toggleActions: "restart restart restart restart"}, 
            opacity:0, duration:3, delay:0.5})

gsap.to(".about-me",{scrollTrigger: {
    trigger:".about-me",
    toggleActions: "restart restart restart restart"}, 
    text:"Facts about me",
    repeat:-1,
    repeatDelay:.3,
    duration:2.8,
    ease: "power1.in",
    yoyo:true
})

gsap.to(".skills",{scrollTrigger: {
    trigger:".skills",
    toggleActions: "restart restart restart restart"}, 
    text:"My skills",
    repeat:-1,
    repeatDelay:.5,
    duration:2.8,
    ease: "power1.in",
    yoyo:true
})
gsap.to(".portfolio",{scrollTrigger: {
    trigger:".portfolio",
    toggleActions: "restart restart restart restart"}, 
    text:"Portfolio",
    repeat:-1,
    repeatDelay:.5,
    duration:2.8,
    ease: "power1.in",
    yoyo:true
})
gsap.to(".contact",{scrollTrigger: {
    trigger:".contact",
    toggleActions: "restart restart restart restart"}, 
    text:"Contact me",
    repeat:-1,
    repeatDelay:.5,
    duration:2.8,
    ease: "power1.in",
    yoyo:true
})
    