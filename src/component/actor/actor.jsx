import Sprite from '../sprite/sprite'


export default function Actor({
    sprite,
    sizeOfSprite,
    step=0,
    dir=0,
    position={x:0,y:0}
})
{
  const {h,w}=sizeOfSprite
  return (
    <Sprite
      img={sprite}
      dataOfSprite={{
        x:step *w,
        y:dir *h,
        h:h,
        w:w
      }}
      position={position}
    />
  )
}

