import React from 'react'

export default ({ width, height, quantity, changeWidth, changeHeight, changeQuantity, addPiece, addEnabled, clearPieces }) => <form onSubmit={addPiece} autoComplete='off'>
  <label htmlFor='width'>Width</label>
  <input type='text' id='width' value={width} onChange={changeWidth} pattern='[0-9]+([\.][0-9]+)?' />
  <label htmlFor='height'>Height</label>
  <input type='text' id='height' value={height} onChange={changeHeight} pattern='[0-9]+([\.][0-9]+)?' />
  <label htmlFor='ply-quantity'>Quantity</label>
  <input type='text' id='quantity' value={quantity} onChange={changeQuantity} pattern='\d*' />
  <input type='submit' className='ply-button' value='Add' disabled={!addEnabled} />
  <button type='button' className='ply-button' onClick={clearPieces}>Clear</button>
</form>
