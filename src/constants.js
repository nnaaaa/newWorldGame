const Constants = {
    centerOfMap: {
        x:Math.floor(Math.floor(window.innerWidth/2)/32)*32,
        y:Math.floor(Math.floor(window.innerHeight/2)/32)*32
    },
    mapSize: {
        width:992,
        height:672
    },
    sizeOfSprite: {                 
        height: 32,
        width: 32
    },
    stepUnits: 8,
    maxStep: 3,
    direction: {
        down: 0,
        up: 3,
        left: 1,
        right: 2
    },
    modifier: {
        down: {
            x: 0,
            y: 8
        },
        up: {
            x: 0,
            y: -8
        },
        left: {
            x: -8,
            y: 0
        },
        right: {
            x: 8,
            y: 0
        }
    }
}

export default Constants 