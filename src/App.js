import logo from './logo.svg';
import './App.css';

import {e1,m1,m2,f1,f2} from './component/character/character'

import { useState, useEffect} from 'react'

import Player from './component/player/player.jsx'
import useDraggable from './component/draggable/draggable.jsx'
import TilePalatte from './component/tilePalatte/tilePalatte.jsx'
import Map from './component/map/map.jsx'



function App() {
  
  const idOfDrag="tool"
  const [tileset,setTileset]=useState()
  const [activeTile,setActiveTile]=useState({x:1*32,y:4*32})
  const [tiles,setTiles]=useState([])
  const [bgTile,setBgTile]=useState({x:0,y:0})
  const [mapSize,setMapSize]=useState({width:992,height:672})

  const {position}=useDraggable(idOfDrag)

  console.log("app")

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
  // let dataStorage=JSON.stringify(tiles)
  // localStorage.setItem("map 1",dataStorage)

  return (
    <div 
      id="background" 
      style={{
        position:"relative",
        width:window.innerWidth-30,
        height:window.innerHeight-30,
        overflow: "hidden",  
        // display: "flex",
        // justifyContent:"center",
        // alignItems:"center",
      }}
    >
        <TilePalatte 
          position={position} 
          size={{                       //size of palatte
            height:32*32,
            width:32*32
          }}
          idOfTool={idOfDrag}
          tileset={tileset}
          activeTile={activeTile}
          setActiveTile={setActiveTile}
          setTileset={setTileset}
        />

        <Map 
          tiles={tiles} 
          tileset={tileset} 
          mapSize={mapSize} 
          activeTile={activeTile}
          setTiles={setTiles}
        />
        
        <Player 
          skin={e1} 
          mapSize={mapSize}
        />
    </div>
    
  );
}

export default App;
