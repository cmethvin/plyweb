import React from 'react'

export default ({ width, height, quantity, changeWidth, changeHeight, changeQuantity, addPiece, addEnabled, clearPieces }) => <form onSubmit={addPiece} autoComplete='off'>
  <label htmlFor='width'>Width</label>
  <input type='text' id='width' value={width} onChange={changeWidth} />
  <label htmlFor='height'>Height</label>
  <input type='text' id='height' value={height} onChange={changeHeight} />
  <label htmlFor='ply-quantity'>Quantity</label>
  <input type='text' id='quantity' value={quantity} onChange={changeQuantity} />
  <input type='submit' className='ply-button' value='Add' disabled={!addEnabled} />
  <button type='button' className='ply-button' onClick={clearPieces}>Clear</button>
</form>
