import Constants from '../../constants'
const emptyMap = () => {
    const tiles = []
    let id = 0
    for (let y = 0; y < Constants.mapSize.height; y += 32) {
        let row = []
        for (let x = 0; x < Constants.mapSize.width; x += 32) {
            row.push({
                x,
                y,
                id: id++,
                v: {
                    x: -32 * 5,
                    y: 0
                },
                url: ""
            })
        }
        tiles.push(row)
    }
    return tiles
}

const map = (state = emptyMap(), action) => {
    return state
}

export default map