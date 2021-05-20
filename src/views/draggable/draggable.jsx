import { useState, useEffect } from 'react'
import drag_img from './drag-handle.png'
export default function useDraggable(id){
  const [positionOfDrag,setPositionOfDrag]=useState({
    x:0,
    y:0
  })

  useEffect(()=>{
    const handle=document.getElementById(id)
    handle.addEventListener("mousedown",start)
    function start(e){
      e.preventDefault()
      document.body.addEventListener("mousemove",move)
      document.body.addEventListener("mouseup",end)
    }

    function end(){
      document.body.removeEventListener("mousemove",move)
    }
    
    return ()=>{
      handle.removeEventListener("mousedown",start)
      document.body.addEventListener("mousemove",move)
      document.body.addEventListener("mouseup",end)
    }
  },[])

  

  function move(e){
    setPositionOfDrag({
      x:e.clientX,
      y:e.clientY
    })
  }

  return {positionOfDrag}
}

export {drag_img}