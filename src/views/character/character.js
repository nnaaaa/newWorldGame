

import { useSelector } from 'react-redux'
import Constants from '../../constants'
import { DataOfGame } from '../Data/StoreOfData'

export default function Character({ sprite, data }) {
  const { h, w, x, y } = data

  return (
    <div
      style={{
        position: "absolute",
        top: Constants.centerOfMap.y,
        left: Constants.centerOfMap.x,
        display: "inline-block",
        height: `${h}px`,
        width: `${w}px`,
        backgroundImage: `url(${sprite})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`,
      }}>

    </div>
  )
}