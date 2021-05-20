import {useContext} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//import cac tileset
import fall from '../../Data/image/map/boat.png'
import winter from '../../Data/image/map/winter.png'
import spring from '../../Data/image/map/spring.png'
import boat from '../../Data/image/map/boat.png'
import set_1 from '../../Data/image/map/set1.png'

import { DataOfGame } from '../../Data/StoreOfData';
import '../menuTileSet/style.css'
export default function MenuTileSet(){
  const { setTileset } = useContext(DataOfGame)

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
      label:"Add Boat"
    },
    {
      value:set_1,
      label:"Set 1"
    },
  ]

  return (
    <div id="menuTileset">
      <Dropdown 
        placeholder="Chọn set"
        options={setTiles}
        onChange={(chosen)=>setTileset(chosen.value)}
        // value={}
      />
    </div>
      
  )
}

