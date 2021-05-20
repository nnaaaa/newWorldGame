import { useEffect,useState } from 'react'
const thunderImg = {
}
for (let i = 0; i <= 10; ++i){
    let string = i;
    if (i < 10)
        string = "0" + string
    else
        string = "" + string
    thunderImg[`effect${i}`]=require(`./disintegrate${string}.png`)
}
export default function Thunder() {
    const [state,setState]=useState(0)
    useEffect(() => {
        setTimeout(() => {  
            if (state == 9)
            setState(0)
            else setState(state+1)
        },100)
    },[state])
    return (
        <div style={{
            width: 32,
            height: 32,
            background: `url(${thunderImg[`effect${state}`].default}) center center / 32px 32px `,
        }}/>
    )
}