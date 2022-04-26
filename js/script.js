function runGSAP() {
  gsap.defaults({
    ease: "Power2.easeOut",
    opacity: 0,
    duration: 1,
  });

  gsap
    .timeline()
    .from("#landing-title", { x: -800 }, 0)
    .from(".main-divider", { x: -800 }, 0)
    .from(".icons-learned", { stagger: 0.1, duration: 0.5, scale: 0.1 }, 0.8)
    .from("#code", { duration: 5 }, 1.8)
    .from(".icons-currently", { stagger: 0.1, duration: 0.5, scale: 0.1 }, 1.3)
    .from("#landing-title em", { y: -100, duration: 5 }, 1.8)
    .from(".icons-nav", { y: -100, duration: 0.8 }, 1.5);

  gsap.from("#about", {
    scrollTrigger: {
      trigger: "#about",
      scrub: 1,
    },
    duration: 2,
  });

  gsap.from("#projects", {
    scrollTrigger: {
      trigger: "#projects",
      scrub: 2,
      start: "top 80%",
      end: "top 10%",
    },
    duration: 2,
    y: 200,
  });

  gsap.from("footer", {
    scrollTrigger: "footer",
    duration: 2,
  });
}

window.onload = runGSAP;
