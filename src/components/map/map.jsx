import { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import Constants from '../../constants'
export default function Map() {
  const posOfCam = useSelector(state => state.posOfCam)
  const mapUnits = useSelector(state => state.map)
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        width: Constants.mapSize.width,
        height: Constants.mapSize.width,
        boxSizing: "border-box",
        border: "1px solid black",
        position: "absolute",
        top: posOfCam.y,
        left: posOfCam.x
      }}>
      {mapUnits.map((row, y) =>
        <div
          key={`_${y}`}
          style={{ display: "flex" }}
        >
          {row.map((tile, x) =>
            <div
              id={`${x},${y}`}
              style={{
                background: `url("${tile.url}") -${tile.v.x}px -${tile.v.y}px no-repeat`,
                width: 32,
                height: 32
              }}
              key={`_${x}${y}`}
            />
          )}
        </div>
      )}
    </div>
  )
}