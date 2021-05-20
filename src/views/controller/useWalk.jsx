import { useState ,useContext} from 'react'
import { DataOfGame } from '../Data/StoreOfData'

export default function useWalk(maxStep,rangeOfMap){
  const [dir,setDir]=useState(0)
  const [step,setStep]=useState(0)

  const { x, y }=rangeOfMap

  const { position,setPosition }=useContext(DataOfGame)
  const direction={
    down:0,
    up:3,
    left:1,
    right:2
  }

  const stepSize=8

  const modifier={
    down:{x:0,y:stepSize},
    up:{x:0,y:-stepSize},
    left:{x:-stepSize,y:0},
    right:{x:stepSize,y:0}
  }

  function walk(dir,setPosOfCam){
    setDir(pre=> { 
      if (pre===direction[dir])
        move(dir,setPosOfCam)
      return direction[dir]
    })
    setStep(pre=> (pre<maxStep-1) ? pre+1 : 0)
  }

  function move(dir="down",setPosOfCam){
    setPosOfCam(pre=>{
      let outOfMap
        
      if ((position.x==0&&dir=='left')||
          (position.x==x-32&&dir=='right')||
          (position.y==0&&dir=="up")||
          (position.y==y-32&&dir=='down')
      )
        outOfMap=false
      else 
        outOfMap=true
      
      return {
        x:pre?.x-(outOfMap ? modifier[dir].x : 0),
        y:pre?.y-(outOfMap ? modifier[dir].y : 0)
      } 
    })   

    setPosition(pre=>{
      let outOfMap
      
      if ((pre.x==0&&dir=='left')||
          (pre.x==x-32&&dir=='right')||
          (pre.y==0&&dir=="up")||
          (pre.y==y-32&&dir=='down')
      )
        outOfMap=false
      else 
        outOfMap=true

      return {
        x:pre?.x+(outOfMap ? modifier[dir].x : 0),
        y:pre?.y+(outOfMap ? modifier[dir].y : 0)
      } 
    })
  }

  return {
    walk,
    dir,
    step
  }
}