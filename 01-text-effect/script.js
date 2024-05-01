const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  scrollTrigger : {
    trigger: ".two",
    start: "20%, 50%",
    end: "100%, 50%",
    markers: true,
    scrub: true,
  },
  
})
tl.to('.text-area-over h1', {
  width: "100%"
})

tl.to('.text-area-over h2', {
  delay: -0.35,
  width: "100%"
})