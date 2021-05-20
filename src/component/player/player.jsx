import {useContext,useEffect} from 'react'

import Character from '../character/character'
import useWalk from '../controller/useWalk'
import {DataOfGame} from '../Data/StoreOfData'

export default function Player()
{  
  const {
    skin,setSkin,
    mapSize,
    setPosOfCam
  } = useContext(DataOfGame)

  const {e1,m1,m2,f1,f2}=skin

  const sizeOfSprite={                    //kich thuoc nhan vat , mac dinh la 32*32
    h:32,
    w:32
  }
  
  const { dir,step,walk }=useWalk(
    3,                                                // 3 la so hoat anh 
    {
      x:mapSize.width,                    //kich thuoc Map, 992*672
      y:mapSize.height
    }
  )   

  useEffect(()=>{
    window.addEventListener("keyup",useKeyBoard)
    window.addEventListener("keydown",useKeyBoard)
    return ()=>{
      window.removeEventListener("keyup",useKeyBoard)
      window.removeEventListener("keydown",useKeyBoard)
    }

  })


  const useKeyBoard=(e)=>{
    const dir =e.key.replace("Arrow","").toLowerCase()
    if (dir=="right"||dir=="left"||dir=="up"||dir=="down")
      walk(dir,setPosOfCam)
    e.preventDefault()
  }

  
  return (
    // <Sprite 
    //   sprite={e1} 
    //   sizeOfSprite={sizeOfSprite} 
    //   step={step}
    //   dir={dir}
    // />
    <Character
      sprite={m2}
      data={{
        h:sizeOfSprite.h,
        w:sizeOfSprite.w,
        x:step*sizeOfSprite.w,
        y:dir*sizeOfSprite.h
      }}
    />
  )
}