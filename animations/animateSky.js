const animateSky = (durationOfDay) => {
    anime({
        targets: '#sky',
        backgroundColor: [
            {value: '#abdcf1', duration: durationOfDay*0.1, easing: 'linear'},
            {value: '#87ceeb', duration: durationOfDay*0.4, easing: 'linear'},
            {value: '#6ca4bc', duration: durationOfDay*0.3, easing: 'linear'},
            {value: '#0d1417', duration: durationOfDay*0.2, easing: 'linear'},
            {value: '#0d1417', duration: durationOfDay*0.85, easing: 'linear'},
            {value: '#6ca4bc', duration: durationOfDay*0.05, easing: 'linear'},
            {value: '#87ceeb', duration: durationOfDay*0.05, easing: 'linear'},
            {value: '#79b9b3', duration: durationOfDay*0.05, easing: 'linear'},
        ],
        loop: true
    })
}

export default animateSky;