import drag_img from '../draggable/drag-handle.png'

import {useState,useEffect,useContext} from 'react'
import React from 'react'

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../tilePalatte/style.css'

import MenuTileSet from './menuTileSet/menuTileSet'
import { DataOfGame } from '../Data/StoreOfData'

export default function TilePalatte(){
  const {
    tiles,setTiles,
    tileset,   
    activeTile,setActiveTile,
    positionOfDrag,idOfDrag,
    
  } = useContext(DataOfGame)

  const sizeOfTab={                      //size of palatte
    height:32*32,
    width:32*32  
  }

  const tilesBlank=[]
  let id=0
  // tao arr tiles rong
  for (let y=0;y<sizeOfTab.height;y+=32){
    let row=[]
    for (let x=0;x<sizeOfTab.width;x+=32){
      row.push({
        x,y,id:id++
      })
    }
    tilesBlank.push(row)
  }
  

  //tao arr phu sao chep arr tiles
  function cloneMatrix(matrix){
    const clone=new Array(matrix.length)
    for (let i=0;i<matrix.length;++i){
      clone[i]=matrix[i].slice(0)
    }
    return clone
  }

  function dropTileAll(activeTile){
    const clone=cloneMatrix(tiles)
     
    for (let y=0;y<clone.length;y++){  
      for (let x=0;x<clone[y].length;x++){
        let tile={
          ...clone[y][x],
          v:activeTile.v,
          url:activeTile.url
        }
        clone[y][x]=tile        
      }
    }
    setTiles(clone)
  }

  return (
    <div
      id="palatte"
      style={{
        boxSizing:"border-box",
        position:"absolute",
        borderLeft: "1px solid black",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        top:positionOfDrag.y,
        left:positionOfDrag.x, 
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
        <img id={idOfDrag} src={drag_img} style={{height:32,width:32}}/>
        <div 
          style={{
            boxSizing:"border-box",
            border:"1px solid black",
            background:`url("${tileset}") -${activeTile.v.x}px -${activeTile.v.y}px no-repeat`,
            width:32,
            height:32,
            margin:"0 20px 0 100px"
          }}
        >
        </div>

        <MenuTileSet/>

        <div style={{margin:"0 0 0 20px"}}>
          <Button color="success" onClick={()=>dropTileAll(activeTile)}>Tô map</Button>
        </div>
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
          {tilesBlank.map((row,y)=>
              <div 
                style={{
                  display:"flex",
                  boxSizing:"border-box"
                }} 
                key={`${y}`}
              >
                {row.map((tile,x)=>
                  <div 
                    onClick={
                      ()=>setActiveTile({
                        v:{x:x*32,y:y*32}
                        ,url:tileset
                      })
                    }
                    style={{
                      boxSizing:"border-box",
                      borderTop:"1px solid black",
                      borderRight:"1px solid black", 
                      background:`url("${tileset}") -${x*32}px -${y*32}px no-repeat`,
                      width:32,
                      height:32
                    }}
                    key={`${x}${y}`}
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