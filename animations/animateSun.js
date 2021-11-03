const animateSun = (durationOfDay) => {

    anime({
        targets: '#sun',
        translateX: [
            {value: '-63vw', easing: 'easeInSine', duration: durationOfDay/2},
            {value: '-116vw', easing: 'easeOutSine', duration: durationOfDay/2},
            {value: '-63vw', easing: 'easeInSine', duration: durationOfDay/2},
            {value: '0', easing: 'easeOutSine', duration: durationOfDay/2},
        ],
        translateY: [
            {value: '-70vh', easing: 'easeOutSine', duration: durationOfDay/2},
            {value: '0', easing: 'easeInSine', duration: durationOfDay/2},
            {value: '100vh', easing: 'easeOutSine', duration: durationOfDay/2},
            {value: '0', easing: 'easeInSine', duration: durationOfDay/2},
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

export default animateSun;