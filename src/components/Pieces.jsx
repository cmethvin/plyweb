import 'components/Pieces.less'

import React from 'react'

const pieceBaseDim = 135
const pieceShift = 50

const Piece = ({ width, height, quantity }) => {
  let pieceWidth = pieceBaseDim
  let pieceHeight = pieceBaseDim

  if (width > height) {
    pieceHeight *= height / width
  } else if (height > width) {
    pieceWidth *= width / height
  }

  const imageHeight = pieceHeight + pieceShift
  const pieceVertY = pieceHeight / 2 + 25
  const pieceWidthX = pieceWidth / 2 + pieceShift
  const pieceQuantX = pieceWidth + pieceShift + 10
  const pieceHeightX = pieceShift - 5

  return <div className='ply-pieces__piece'>
    <svg className='ply-piece__graphic' xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 230 ${imageHeight}`}>
      <g>
        <text x={pieceHeightX} y={pieceVertY} textAnchor='end'>{`${height}"`}</text>
        <text x={pieceWidthX} y='15' textAnchor='middle'>{`${width}"`}</text>
        <rect x={pieceShift} y='20' width={pieceWidth} height={pieceHeight} />
        <text x={pieceQuantX} y={pieceVertY}>{` x ${quantity}`}</text>
      </g>
    </svg>
  </div>
}

export default ({ pieces }) => <div id='ply-pieces'>
  {Object.keys(pieces).map(p => <Piece key={p} {...pieces[p]} />)}
</div>
