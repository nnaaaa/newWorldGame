import { useState, useEffect } from 'react'
import drag_img from './drag-handle.png'
export default function useDraggable(id){
  const [position,setPosition]=useState({
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
      document.body.removeEventListener("mousedown",start)
      document.body.addEventListener("mousemove",move)
      document.body.addEventListener("mouseup",end)
    }
  },[])

  

  function move(e){
    setPosition({
      x:e.clientX,
      y:e.clientY
    })
  }

  return {position}
}

export {drag_img}