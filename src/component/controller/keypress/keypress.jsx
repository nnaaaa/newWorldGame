import { useEffect } from 'react'

export default function useKeyBoard(func){
  useEffect(()=>{
    window.addEventListener("keydown",func)
    return ()=>window.removeEventListener("keydown",func)
  })
}

