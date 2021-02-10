import drag_img from '../draggable/drag-handle.png'
import {useState,useEffect} from 'react'
import React from 'react'
import MenuTileSet from './menuTileSet/menuTileSet'

export default function TilePalatte({
  position,
  size,
  idOfTool,
  tileset,
  setTileset,
  activeTile,
  setActiveTile
})
{
  
  const {height,width}=size
  const tiles=[]
  let id=0
  for (let y=0;y<height;y+=32){
    let row=[]
    for (let x=0;x<width;x+=32){
      row.push({
        x,y,id:id++
      })
    }
    tiles.push(row)
  }
  // tao arr tiles rong
  console.log("palatte")
  return (
    <div
      id="palatte"
      style={{
        boxSizing:"border-box",
        position:"absolute",
        borderLeft: "1px solid black",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        top:position.y,
        left:position.x, 
        zIndex:10,
        width:640+1,
        height:512+2+4,
        backgroundColor:"#94D0C6",
      }}
    >

      {/* thanh cong cu */}
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor:"#46BAA8"
        }}
      >
        <img id={idOfTool} src={drag_img} style={{height:32,width:32}}/>
        <div 
          style={{
            boxSizing:"border-box",
            border:"1px solid black",
            background:`url("${tileset}") -${activeTile.x}px -${activeTile.y}px no-repeat`,
            width:32,
            height:32,
            margin:"0 20px 0 100px"
          }}
        >
        </div>
        <MenuTileSet 
          setTileset={setTileset}
          tileset={tileset}
        />
      </div>

      {/*chi tiet tiles trong tileset*/}
      <div 
        style={{
          height:480,
          width:640,
          overflow:"scroll"
        }}
      >
        <div 
          style={{
            height:1024,
            width:1024,
            borderBottom:"1px solid black"
          }}
        >
          {tiles.map((row,y)=>
              <div 
                style={{
                  display:"flex",
                  boxSizing:"border-box"
                }} 
              >
                {row.map((tile,x)=>
                  <div 
                    
                    onClick={()=>setActiveTile({x:x*32,y:y*32})}
                    style={{
                      boxSizing:"border-box",
                      borderTop:"1px solid black",
                      borderRight:"1px solid black", 
                      background:`url("${tileset}") -${x*32}px -${y*32}px no-repeat`,
                      width:32,
                      height:32
                    }}
                  >
                  </div>
                )}  
              </div>
          )}
        </div>
      </div>
    </div>
  )
}