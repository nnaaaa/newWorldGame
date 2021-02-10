import { Component } from "react";


export default function Sprite({dataOfSprite,img,position}){
  const {x,y,w,h}=dataOfSprite
  return (
    <div
      style={{
        position:"absolute",
        top:position.y,
        left:position.x,
        display:"inline-block",
        height:`${h}px`,
        width:`${w}px`,
        backgroundImage: `url(${img})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:`-${x}px -${y}px`
      }}>

    </div>
  )
}