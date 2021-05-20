import { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import Player from '../player/player'
import {DataOfGame} from '../Data/StoreOfData'

export default function Map(){
  const {
    tiles,setTiles,
    activeTile, 
  } = useContext(DataOfGame)

  const posOfCam=useSelector(state=>state.posOfCam)
  useEffect(()=>{
      const tiless=document.querySelectorAll('.tilesInMap')
      window.addEventListener("mousedown",drawing)
      window.addEventListener("mouseup",removeDraw)

      function removeDraw(){
        window.removeEventListener("mousedown",drawing)
        tiless.forEach(tile=>{
          tile.removeEventListener("mouseover",tilefunc)
        })
      }

      function drawing(){
        tiless.forEach(tile=>{
            tile.addEventListener("mouseover",tilefunc)
        })  
      }

      function tilefunc(e){
        let arr=e.target.id.split(',')
        dropTile({x:parseInt(arr[0]),y:parseInt(arr[1])})
      }
    return 
      window.removeEventListener("mouseup",removeDraw)                 //???????????????????
  })
    

  //tao arr phu sao chep arr tiles
  function cloneMatrix(matrix){
    const clone=new Array(matrix.length)
    for (let i=0;i<matrix.length;++i){
      clone[i]=matrix[i].slice(0)
    }
    return clone
  }

  //drop activeTile vao Map
  function dropTile(coordinate){
    const clone=cloneMatrix(tiles)  
    const tile={
      ...clone[coordinate.y][coordinate.x],
      v:activeTile.v,
      url:activeTile.url
    }
    clone[coordinate.y][coordinate.x]=tile
    setTiles(clone)
  }


  return (
    <div
      style={{
        backgroundColor:"white",
        width:992,
        height:672,
        boxSizing:"border-box",
        borderBottom:"1px solid black",
        borderLeft:"1px solid black",
        position:"absolute",
        top:posOfCam.y,
        left:posOfCam.x
      }}
    >

      {/* cac tile trong map */}
      {tiles.map((row,y)=>
          <div 
            key={`_${y}`}
            style={{display:"flex",boxSizing:"border-box"}} 
          >
            {row.map((tile,x)=>
              <div 
                className="tilesInMap"
                onClick={()=>dropTile({x,y})}
                id={`${x},${y}`}
                style={{
                  borderTop:"1px solid black",
                  borderRight:"1px solid black",
                  boxSizing:"border-box", 
                  background:`url("${tile.url}") -${tile.v.x}px -${tile.v.y}px no-repeat`,
                  width:32,
                  height:32
                }}
                key={`_${x}${y}`}
              >
              </div>
            )}  
          </div>
      )}

      {/* nhan vat */}
    </div>
  )
}