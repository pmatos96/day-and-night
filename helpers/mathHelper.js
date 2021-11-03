
class MathHelper {
    
    getPosition(){
        let position = {}
    
        position.x = this.getRandomIntInclusive(1, 100);
        position.y = this.getRandomIntInclusive(1, 100);
    
        return position;
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default MathHelper;