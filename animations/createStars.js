
import MathHelper from '../helpers/mathHelper.js';

const mathHelper = new MathHelper();

const createStars = (numberOfStars) => {


    for(let i=1; i <= numberOfStars; i++){
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

    let rightDistance = mathHelper.getPosition();
    let topDistance = mathHelper.getPosition();

    return '<div class="star" style="right: ' + rightDistance.x + 'vw; top: ' + topDistance.y + '%;"></div>'
}

export default createStars;