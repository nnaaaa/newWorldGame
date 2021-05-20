import { useSelector, useDispatch } from 'react-redux'
import Gold from '../../assets/coin/gold/gold'
import Thunder from '../../assets/effect/thunder/thunder'
import RootStyles from '../../styles/rootStyle'
export default function PlayerState() {
    return (
        <div style={styles.container}>
            <div>
                <span style={{...RootStyles.flex()}}>
                    <Thunder />
                    <h1 style={{
                        ...RootStyles.text({
                            color: 'rgb(134,222,218,0.75)',
                            shadowColor: 'rgba(150,225,230,0.4)'
                        }),
                        paddingLeft: 10
                    }}>
                        Giới chủ
                    </h1>
                </span>
                <span style={{...RootStyles.flex()}}>
                    <div></div>
                    <h2 style={{ ...RootStyles.text({ color: 'rgb(134,260,218,0.75)' }) }}>
                        Tinh thần niệm sư
                    </h2>
                </span>
                <span style={{...RootStyles.flex()}}>
                    <h3>Tiền</h3>
                    <span style={{...RootStyles.flex()}}> 
                        <Gold />
                        <span style={{
                            ...RootStyles.text({
                                color: `yellow`, fontSize: 25
                            }),
                            textShadow:'0 2px 4px yellow'
                        }}>30</span>
                    </span>
                </span>
                <span style={{...RootStyles.flex()}}>
                    <p>Bảo vật</p>
                    ...
                </span>
                <span style={{...RootStyles.flex()}}>
                    <p>Công pháp</p>
                    ...
                </span>
                <span style={{...RootStyles.flex()}}>
                    máu và năng lượng
                </span>
            </div>
        </div>
    )
}

const styles = {
    container: {
        height: window.innerHeight,
        width: window.innerWidth / 4,
        backgroundColor: "gray",
        padding:20,
        position: "absolute",
        right: 0,
        top: 0
    },
}