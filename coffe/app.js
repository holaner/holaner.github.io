const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//end section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 8000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//TEXT ANIMATION
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

// VIDEO ANIMATION
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

let scene2 = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: intro,
    triggerHook: 0
})

    .setTween(textAnim)
    .addTo(controller);

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;

});
setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
}, 33.3);

