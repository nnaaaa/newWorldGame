
import { useState, useEffect} from 'react'

import Player from './component/player/player.jsx'
import TilePalatte from './component/tilePalatte/tilePalatte.jsx'
import Map from './component/map/map.jsx'

import { DataProvider } from './component/Data/StoreOfData.jsx'


function App() {
  // useEffect(()=>{
  //   let data=JSON.parse(localStorage.getItem("map 1"))
  // },[])

  // let dataStorage=JSON.stringify(tiles)
  // localStorage.setItem("data",dataStorage)

  // if (posOfCam==={x:64,y:64}){ 
  //   console.log("you win")
  // }
 
  return (
    <div 
        id="background" 
        style={{
          position:"relative",
          width:window.innerWidth-30,
          height:window.innerHeight-30,
          overflow: "hidden",  
        }}
    >
      <DataProvider>
        <TilePalatte />
        <Map />
        <Player />   
      </DataProvider>
    </div>
  );
}

export default App;
