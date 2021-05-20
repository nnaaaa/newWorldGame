import {useContext} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//import cac tileset
import fall from '../../../assets/map/fall.png'
import winter from '../../../assets/map/winter.png'
import spring from '../../../assets/map/spring.png'
import boat from '../../../assets/map/boat.png'
import set_1 from '../../../assets/map/set1.png'

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

