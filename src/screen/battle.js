import Map from '../components/map/map'
import Player from '../components/player/player'
import PlayerState from '../components/player/playerState'

function Battle() {
    return (
        <div style={styles}>
            <Map />
            <Player />
            <PlayerState />
        </div>
    )
}
const styles = {
    position: "relative",
    width: window.innerWidth,
    height: window.innerHeight,
    overflow: "hidden",
}
export default Battle