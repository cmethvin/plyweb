import { combineReducers } from 'redux'

const initial = {
  pieces: {
    width: 1,
    height: 1,
    quantity: 1,
    errors: {},
    list: {}
  }
}

const pieces = (state = initial.pieces, action) => {
  switch (action.type) {
    case 'CHANGE_WIDTH':
      const { width } = action.payload
      return {
        ...state,
        width
      }
    case 'CHANGE_HEIGHT':
      const { height } = action.payload
      return {
        ...state,
        height
      }
    case 'CHANGE_QUANTITY':
      const { quantity } = action.payload
      return {
        ...state,
        quantity
      }
    case 'ADD_PIECE':
      const list = { ...state.list }
      const w = parseFloat(state.width)
      const h = parseFloat(state.height)
      const q = parseInt(state.quantity)

      const key = `${w}-${h}`

      const item = list[key]
      if (!item) {
        list[key] = {
          width: w,
          height: h,
          quantity: q
        }
      } else {
        list[key].quantity += q
      }

      return {
        ...initial.pieces,
        list
      }
    case 'CLEAR_PIECES':
      return {
        ...state,
        list: {}
      }
    default:
      return state
  }
}

export default combineReducers({
  pieces
})
