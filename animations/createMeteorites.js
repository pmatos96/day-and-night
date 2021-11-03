import MathHelper from '../helpers/mathHelper.js';

const mathHelper = new MathHelper();

const createMeteorites = (numberOfMeteorites) => {

    for(let i=1; i <= numberOfMeteorites; i++){
        $('.starsContainer').append(getMeteoriteHtml())
    }

    anime({
        targets: '.meteorite',
        translateX: 400,
        translateY: 400,
        endDelay: 5000,
        loop: true,
        loopComplete: function(anim){
            // let rightDistance = mathHelper.getPosition();
            // let topDistance = mathHelper.getPosition();
            // $('.meteorite').attr('right', rightDistance.x + 'vw')
            // $('.meteorite').attr('top', topDistance.x + '%')
        }
    })
}

function getMeteoriteHtml(){
    let rightDistance = mathHelper.getPosition();
    let topDistance = mathHelper.getPosition();

    return '<div class="meteorite" style="right: ' + rightDistance.x + 'vw; top: ' + topDistance.y + '%;"></div>'
}

export default createMeteorites;