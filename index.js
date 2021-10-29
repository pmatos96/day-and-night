
animateSun(10000);
animateMoon(10000);
animateSky(10000);


// ---------------------- Functions

function animateSun(durationOfDay){

    anime({
        targets: '#sun',
        endDelay: durationOfDay,
        translateX: [
            {value: '-60vw', easing: 'easeInSine', duration: durationOfDay/2},
            {value: '-110vw', easing: 'easeOutSine', duration: durationOfDay/2}
        ],
        translateY: [
            {value: '-50vh', easing: 'easeOutSine', duration: durationOfDay/2},
            {value: '0', easing: 'easeInSine', duration: durationOfDay/2}
        ],
        scale: [
            {value: [1, 0.75], duration: durationOfDay/2, easing: 'linear'},
            {value: [0.75, 1], duration: durationOfDay/2, easing: 'linear'}
        ],
        backgroundColor: [
            {value: '#ffff00', duration: durationOfDay/2, easing: 'linear'},
            {value: '#f5da42', duration: durationOfDay/2, easing: 'linear'}
        ],
        loop: true
    })
}

function animateMoon(durationOfNight){

    anime({
        targets: '#moon',
        delay: durationOfNight,
        endDelay: durationOfNight,
        translateX: [
            {value: '-60vw', easing: 'easeInSine', duration: durationOfNight/2},
            {value: '-110vw', easing: 'easeOutSine', duration: durationOfNight/2}
        ],
        translateY: [
            {value: '-50vh', easing: 'easeOutSine', duration: durationOfNight/2},
            {value: '0', easing: 'easeInSine', duration: durationOfNight/2}
        ],
        scale: [
            {value: [1, 0.75], duration: durationOfNight/2, easing: 'linear'},
            {value: [0.75, 1], duration: durationOfNight/2, easing: 'linear'}
        ],
        backgroundColor: [
            {value: '#ffffff', duration: durationOfNight/2, easing: 'linear'},
            {value: '#bbbbbb', duration: durationOfNight/2, easing: 'linear'}
        ],
        loop: true
    })
}

function animateSky(durationOfDay){
    anime({
        targets: '#sky',
        backgroundColor: [
            {value: '#abdcf1', duration: durationOfDay*0.1, easing: 'linear'},
            {value: '#87ceeb', duration: durationOfDay*0.4, easing: 'linear'},
            {value: '#6ca4bc', duration: durationOfDay*0.3, easing: 'linear'},
            {value: '#0d1417', duration: durationOfDay*0.2, easing: 'linear'},
            {value: '#0d1417', duration: durationOfDay*0.2, easing: 'linear'},
            {value: '#6ca4bc', duration: durationOfDay*0.3, easing: 'linear'},
            {value: '#87ceeb', duration: durationOfDay*0.4, easing: 'linear'},
            {value: '#abdcf1', duration: durationOfDay*0.1, easing: 'linear'},
        ],
        loop: true
    })
}
