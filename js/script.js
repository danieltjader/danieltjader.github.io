const timeline = gsap.timeline({defaults: {
  duration: 1, 
  delay: 0,
  opacity: 0
}});

timeline.from('#landing-title', {ease: 'Power2.easeOut', x: -800}, 0)
        .from('.main-divider', {ease: 'Power2.easeOut', x: -800}, 0)
        .from('.icons-learned', {stagger: .1, duration: .1}, .6)
        .from('#code', {duration: 1, y: '50px'}, .8)
        .from('.icons-currently', {stagger: .1, duration: .1}, 1.6)
        .from('#landing-title em', {ease: 'Power2.easeOut', y: -100}, 2)
        .from('.icons-nav', {ease: 'Power2.easeOut', y: -100}, 2);
        

gsap.from("#about", {
  scrollTrigger: '#about', 
  opacity: 0,
  duration: 2,
  ease: 'Power2.easeOut',
  y: 200
});

gsap.from("#projects", {
  scrollTrigger: '#projects', 
  opacity: 0,
  duration: 2,
  ease: 'Power2.easeOut', 
  y: 200
});

gsap.from("footer", {
  scrollTrigger: 'footer', 
  opacity: 0,
  duration: 2,
  ease: 'Power2.easeOut', 
});