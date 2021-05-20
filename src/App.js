
import { useState, useEffect} from 'react'

import Player from './views/player/player.jsx'
import TilePalatte from './views/tilePalatte/tilePalatte.jsx'
import Map from './views/map/map.jsx'

import { DataProvider } from './views/Data/StoreOfData'


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
        {/* <TilePalatte /> */}
        <Map />
        <Player />   
      </DataProvider>
    </div>
  );
}

export default App;
