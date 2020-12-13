gsap.from(".right-array", {
    scale: 0,
    duration: 3,
    stagger: 2,
    x: "33%",
    y: -100
})

gsap.from(".left-array", {
    scale: 0,
    duration: 3,
    stagger: 2,
    x: "-33%",
    y: -100
})