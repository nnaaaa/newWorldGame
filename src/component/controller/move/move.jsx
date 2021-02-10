import { useState } from 'react'
export default function useWalk(maxStep,rangeOfMap){
  const [dir,setDir]=useState(0)
  const [step,setStep]=useState(0)
  const [position,setPosition]=useState({x:0,y:0})
  const { x, y }=rangeOfMap
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

  function walk(dir){
    setDir(pre=> { 
        move(dir)
      return direction[dir]
    })
    setStep(pre=> (pre<maxStep-1) ? pre+1 : 0)
  }

  function move(dir){
    setPosition(pre=>{
        let outOfMap
        
        if ((pre.x==0&&dir=='left')||
            (pre.x==x&&dir=='right')||
            (pre.y==0&&dir=="up")||
            (pre.y==y&&dir=='down')
        )
          outOfMap=false
        else 
          outOfMap=true

        return {
          x:(pre.x ? pre.x : 0)+(outOfMap ? modifier[dir].x : 0),
          y:(pre.y ? pre.y : 0)+(outOfMap ? modifier[dir].y : 0)
        }
    })    
  }


  return {
    walk,
    dir,
    step,
    position,
    direction
  }
}