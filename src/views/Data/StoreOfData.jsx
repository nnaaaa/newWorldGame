import React, { Component ,createContext,useState,useEffect} from 'react'


import useDraggable from '../draggable/draggable'

export const DataOfGame=createContext()

export function DataProvider({children}){
  const idOfDrag="tool"

  const [tileset,setTileset]=useState()
  const [activeTile,setActiveTile]=useState({v:{x:1*32,y:4*32},url:""})
  const [tiles,setTiles]=useState([])
  //const {positionOfDrag}=useDraggable(idOfDrag)
  
  
  
  useEffect(()=>{
    const _tiles=[] 
    let id=0
    for (let y=0;y<672;y+=32){
      let row=[]
      for (let x=0;x<992;x+=32){
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
        //positionOfDrag,idOfDrag,
      }}
    >
      {children}
    </DataOfGame.Provider>
  )
}