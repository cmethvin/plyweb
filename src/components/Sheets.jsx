import 'components/Sheets.less'
import React from 'react'

const Sheet = ({ pieces }) => {
  return <div className='ply-sheet'>
    <svg className='ply-sheet__graphic' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 960 480'>
      <g>
        <rect x='0' y='0' width='960' height='480' />
        {pieces.map(p => {
          let x = p.x * 10
          let y = p.y * 10
          let width = p.width * 10
          let height = p.height * 10

          return <rect x={x} y={y} width={width} height={height} style={{ fill: '#fff' }} />
        })}
      </g>
    </svg>
  </div>
}

export default ({ sheets, kerfInput, changeKerf, updateSettings }) => <div id='ply-sheets'>
  <div className='ply-sheets__controls'>
    <div>
      <label htmlFor='kerf'>Kerf</label>
      <input type='text' id='kerf' value={kerfInput} onChange={changeKerf} />
    </div>
    <button type='button' className='ply-button' onClick={updateSettings}>Update</button>
  </div>
  {sheets.map((s, i) => <Sheet key={i} {...s} />)}
</div>
