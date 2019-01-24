import { connect } from 'react-redux'
import Controls from 'components/Controls'

const mapStateToProps = (state) => {
  return {
    ...state.pieces,
    addEnabled: Object.keys(state.pieces.errors).length === 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeWidth: (e) => {
      dispatch({
        type: 'CHANGE_WIDTH',
        payload: {
          width: e.target.value
        }
      })
    },
    changeHeight: (e) => {
      dispatch({
        type: 'CHANGE_HEIGHT',
        payload: {
          height: e.target.value
        }
      })
    },
    changeQuantity: (e) => {
      dispatch({
        type: 'CHANGE_QUANTITY',
        payload: {
          quantity: e.target.value
        }
      })
    },
    addPiece: (e) => {
      e.preventDefault()

      dispatch({
        type: 'ADD_PIECE'
      })
    },
    clearPieces: () => {
      dispatch({
        type: 'CLEAR_PIECES'
      })
    }
  }
}

const ConnectedControls = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default ConnectedControls
