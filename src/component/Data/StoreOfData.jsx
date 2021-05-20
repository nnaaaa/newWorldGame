import React, { Component ,createContext,useState,useEffect} from 'react'

import m1 from './image/character/m1.png'
import m2 from './image/character/m2.png'
import e1 from './image/character/e1.png'
import f1 from './image/character/f1.png'
import f2 from './image/character/f2.png'

import useDraggable from '../draggable/draggable'

export const DataOfGame=createContext()

export function DataProvider({children}){
  const idOfDrag="tool"

  const [skin,setSkin]=useState({e1,m1,m2,f1,f2})
  const [tileset,setTileset]=useState()
  const [activeTile,setActiveTile]=useState({v:{x:1*32,y:4*32},url:""})
  const [tiles,setTiles]=useState([])
  const [posOfCam,setPosOfCam]=useState({x:0,y:0})
  const {positionOfDrag}=useDraggable(idOfDrag)
  
  //tao vi tri nhan vat
  const centerOfMap={
    x:Math.floor(Math.floor(window.innerWidth/2)/32)*32,
    y:Math.floor(Math.floor(window.innerHeight/2)/32)*32
  }
  const [position,setPosition]=useState({...centerOfMap})

  //tao map rong
  const mapSize={
    width:992,
    height:672
  }
  
  useEffect(()=>{
    const _tiles=[] 
    let id=0
    for (let y=0;y<mapSize.height;y+=32){
      let row=[]
      for (let x=0;x<mapSize.width;x+=32){
        row.push({
          x,
          y,
          id:id++,
          v:{x:-32*5,y:0},
          url:""
        })
      }
      _tiles.push(row)
    }
    setTiles(_tiles)
  },[])

  return (
    <DataOfGame.Provider
      value={{
        tiles,setTiles,
        tileset,setTileset,
        activeTile,setActiveTile,
        posOfCam,setPosOfCam,
        position,setPosition,
        centerOfMap,
        skin,setSkin,
        positionOfDrag,idOfDrag,
        mapSize,
      }}
    >
      {children}
    </DataOfGame.Provider>
  )
}