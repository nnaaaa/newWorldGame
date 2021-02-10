import {useState,useEffect} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//import cac tileset
import fall from '../../map/fall.png'
import winter from '../../map/winter.png'
import spring from '../../map/spring.png'
import boat from '../../map/boat.png'
import set_1 from '../../map/set1.png'

export default function MenuTileSet({
  setTileset,
  tileset
})
{

  //dua cac tileset vao setTiles
  const setTiles=[
    {
      value:fall,
      label:"Fall"
    },
    {
      value:winter,
      label:"Winter"
    },
    {
      value:spring,
      label:"Spring"
    },
    {
      value:boat,
      label:"Add Boat "
    },
    {
      value:set_1,
      label:"Set 1"
    },
  ]
  console.log("menu")

  return (
    <Dropdown 
      placeholder="Chọn set"
      options={setTiles}
      onChange={(tileset)=>setTileset(tileset.value)}
      value={tileset}
    />
      
  )
}

