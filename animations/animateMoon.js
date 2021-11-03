
const animateMoon = (durationOfNight) => {

    anime({
        targets: '#moon',
        translateX: [
            {value: '63vw', easing: 'easeInSine', duration: durationOfNight/2},
            {value: '116vw', easing: 'easeOutSine', duration: durationOfNight/2},
            {value: '63vw', easing: 'easeInSine', duration: durationOfNight/2},
            {value: '0vw', easing: 'easeOutSine', duration: durationOfNight/2},
        ],
        translateY: [
            {value: '100vh', easing: 'easeOutSine', duration: durationOfNight/2},
            {value: '0', easing: 'easeInSine', duration: durationOfNight/2},
            {value: '-65vh', easing: 'easeOutSine', duration: durationOfNight/2},
            {value: '0', easing: 'easeInSine', duration: durationOfNight/2},
        ],
        scale: [
            {value: [1, 0.75], duration: durationOfNight/2, easing: 'linear'},
            {value: [0.75, 1], duration: durationOfNight/2, easing: 'linear'},
            {value: [1, 0.75], duration: durationOfNight/2, easing: 'linear'},
            {value: [0.75, 1], duration: durationOfNight/2, easing: 'linear'}
        ],
        backgroundColor: [
            {value: '#ffffff', duration: durationOfNight/2, easing: 'linear'},
            {value: '#bbbbbb', duration: durationOfNight/2, easing: 'linear'},
            {value: '#ffffff', duration: durationOfNight/2, easing: 'linear'},
            {value: '#bbbbbb', duration: durationOfNight/2, easing: 'linear'}
        ],
        loop: true
    })
}

export default animateMoon;