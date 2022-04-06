
gsap.defaults({
  ease: "Power2.easeOut",
  opacity: 0,
  duration: 1
});

gsap.timeline().from('#landing-title', {x: -800}, 0)
                .from('.main-divider', {x: -800}, 0)
                .from('.icons-learned', {stagger: .1, duration: .5, scale: 0.1,  filter: "grayscale(1)"}, .8)
                .from('#code', {duration: 5}, 1.8)
                .from('.icons-currently', {stagger: .1, duration: .5, scale: 0.1}, 1.3)
                .from('#landing-title em', {y: -100, duration: 5}, 1.8)
                .from('.icons-nav', { y: -100, duration: .8}, 1.5);
        
gsap.from("#about", {
  scrollTrigger: {
   trigger: '#about',
   scrub: 1,
   start: "top 95%",
   end: "bottom 60%"
  },
  duration: 2,
  ease: "all 1s ease",
  y: 200,
});

gsap.from("#projects", {
  scrollTrigger: {
    trigger: '#projects',
    scrub: 1,
    start: "top 95%",
    end: "bottom 60%"
   },
   ease: "all 1s ease",
   duration: 2,
   y: 200
});

gsap.from("footer", {
  scrollTrigger: 'footer', 
  duration: 2
});