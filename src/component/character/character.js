

import {useContext} from 'react'
import { DataOfGame } from '../Data/StoreOfData'

export default function Character({
  sprite,
  data
})
{
  const { centerOfMap } = useContext(DataOfGame)
  
  const {h,w,x,y}=data
  return (
    <div
      style={{
        position:"absolute",
        top:centerOfMap.y,
        left:centerOfMap.x,
        display:"inline-block",
        height:`${h}px`,
        width:`${w}px`,
        backgroundImage: `url(${sprite})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:`-${x}px -${y}px`,
      }}>

    </div>
  )
}