
gsap.defaults({
  ease: "Power2.easeOut",
  opacity: 0
});

gsap.timeline().from('#landing-title', {x: -800}, 0)
                .from('.main-divider', {x: -800}, 0)
                .from('.icons-learned', {stagger: .1, duration: .3, scale: 0.1 }, .6)
                .from('#code', {duration: 1, y: '50px'}, .8)
                .from('.icons-currently', {stagger: .1, duration: .3, scale: 0.1}, 1.6)
                .from('#landing-title em', {y: -100}, 2)
                .from('.icons-nav', { y: -100}, 2);
        
gsap.from("#about", {
  scrollTrigger: {
   trigger: '#about',
   scrub: true
  },
  duration: 2,
  y: 200,
});

gsap.from("#projects", {
  scrollTrigger: {
    trigger: '#projects',
   },
   duration: 2,
   y: 200,
});

gsap.from("footer", {
  scrollTrigger: 'footer', 
  duration: 2
});