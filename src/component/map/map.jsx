import { useState,useEffect } from 'react'
import Player from '../player/player'
import { m2 } from '../character/character'


export default function Map({
  tiles,
  tileset,   
  mapSize,
  setTiles,
  activeTile
})
{
  console.log("map")
  useEffect(()=>{
      const tiles=document.querySelectorAll('.tilesInMap')
      window.addEventListener("mousedown",drawing)
      window.addEventListener("mouseup",removeDraw)

      function removeDraw(){
        window.removeEventListener("mousedown",drawing)
        tiles.forEach(tile=>{
          tile.removeEventListener("mouseover",tilefunc)
        })
      }

      function drawing(){
        tiles.forEach(tile=>{
          tile.addEventListener("mouseover",tilefunc)
        })  
      }

      function tilefunc(e){
        let arr=e.target.id.split(',')
        dropTile({x:parseInt(arr[0]),y:parseInt(arr[1])})
      }
    return
      window.removeEventListener("mouseup",removeDraw)
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
  function dropTile({x,y}){
      setTiles(pre=>{
        const clone=cloneMatrix(pre)  
        const tile={
          ...clone[y][x],
          v:activeTile
        }
        clone[y][x]=tile
        return clone
      })
  }


  return (
    <div
      style={{
        backgroundColor:"white",
        width:mapSize.width,
        height:mapSize.height,
        boxSizing:"border-box",
        borderBottom:"1px solid black",
        borderLeft:"1px solid black"
      }}
    >

      {/* cac tile trong map */}
      {tiles.map((row,y)=>
          <div style={{display:"flex",boxSizing:"border-box"}} >
            {row.map((tile,x)=>
              <div 
                className="tilesInMap"
                onClick={()=>dropTile({x,y})}
                id={`${x},${y}`}
                style={{
                  borderTop:"1px solid black",
                  borderRight:"1px solid black",
                  boxSizing:"border-box", 
                  background:`url("${tileset}") -${tile.v.x}px -${tile.v.y}px no-repeat`,
                  width:32,
                  height:32
                }}
              >
              </div>
            )}  
          </div>
      )}

      {/* nhan vat */}
    </div>
  )
}