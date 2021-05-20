import { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Actions from '../../state/rootAction'
import Constants from '../../constants'
import Character from '../character/character.jsx'

export default function Player() {
  const [moving, setMoving] = useState()
  const { dir, step } = useSelector(state => state.sprites)
  const dispatch = useDispatch()
  const skin = useSelector(state => state.skin)
  useEffect(() => {
    window.addEventListener("keydown", KeyBoard)
    return () => {
      window.removeEventListener("keydown", KeyBoard)
    }
  },[dir])

  const KeyBoard = (e) => {
    const nextDir = e.key.replace("Arrow", "").toLowerCase()
    if (
      nextDir === "right" ||
      nextDir === "left" ||
      nextDir === "up" ||
      nextDir === "down"
    ) {
      if (Constants.direction[nextDir] == dir) {
        dispatch(Actions.setPosOfCam(nextDir))
      }
      dispatch(Actions.setStepAndDir(nextDir))
    }
  }
  return (
    <Character
      sprite={skin.default}
      data={{
        w: Constants.sizeOfSprite.width,
        h: Constants.sizeOfSprite.height,
        x: step * Constants.sizeOfSprite.width,
        y: dir * Constants.sizeOfSprite.height
      }}
    />
  )
}