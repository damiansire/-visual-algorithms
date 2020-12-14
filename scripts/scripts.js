const timeLine = gsap.timeline();

timeLine.from(".line", {
    duration: 3,
    stagger: 3,
    y: -50,
    scaleY: 0,
})

timeLine.from('.line-1', {
    duration: 3,
    width: 'auto'
}, '3')

timeLine.from('.line-2', {
    duration: 3,
    width: 'auto'
}, '6')

timeLine.from('.line-3', {
    duration: 3,
    width: '100%'
}, '8.5')

timeLine.from('.line-4', {
    duration: 3,
    width: '100%'
}, '12')