import Actor from '../actor/actor'
import useKeyBoard from '../controller/keypress/keypress'
import useWalk from '../controller/move/move'

export default function Player({
  skin,
  mapSize
})
{  
  const sizeOfSprite={
    h:32,
    w:32
  }
  const rangOfMap={
    x:mapSize.width,
    y:mapSize.height
  }

  const { dir,step,position,walk }=useWalk(
    3,                                                // 3 la so hoat anh 
    {
      x:Math.floor(rangOfMap.x/sizeOfSprite.w)*sizeOfSprite.w-sizeOfSprite.w,
      y:Math.floor(rangOfMap.y/sizeOfSprite.h)*sizeOfSprite.h-sizeOfSprite.h
    }
    )   

  useKeyBoard((e)=>{
    const dir =e.key.replace("Arrow","").toLowerCase()
    walk(dir)
    e.preventDefault()
  })

  return (
    <Actor 
      sprite={skin} 
      sizeOfSprite={sizeOfSprite} 
      step={step}
      dir={dir} 
      position={position}
    />
  )
}