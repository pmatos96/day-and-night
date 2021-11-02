
animateSun(10000);
animateMoon(10000);
animateSky(10000);
createStars(150);



// ---------------------- Functions

function createStars(numberOfStars){


    for(let i=1; i < numberOfStars; i++){
        $('.starsContainer').append(getStarHtml())
    }

    animateStars();
}

function animateStars(){

    anime({
        targets: '.star',
        scale: [1, 2],
        delay: function(el, i){ return (i % 3)*250; },
        duration: 500,
        brightness: [1, 5],
        direction: 'alternate',
        easing: 'linear',
        loop: true,
        // autoPlay: false
    })

    anime({
        targets: '.star',
        opacity: [
            {
                value: [0, 1],
                delay: 8000,
                duration: 2000
            },
            {
                value: [1, 0],
                delay: 9000,
                duration: 1000
            }
        ],
        loop: true
    })
}

function getStarHtml(){

    let rightDistance = getPosition();
    let topDistance = getPosition();

    return '<div class="star" style="right: ' + rightDistance.x + 'vw; top: ' + topDistance.y + '%;"></div>'
}

function getPosition(){
    let position = {}

    position.x = getRandomIntInclusive(1, 100);
    position.y = getRandomIntInclusive(1, 100);

    return position;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateSun(durationOfDay){

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

function animateMoon(durationOfNight){

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

function animateSky(durationOfDay){
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
