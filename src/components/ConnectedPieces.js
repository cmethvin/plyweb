import { connect } from 'react-redux'
import Pieces from 'components/Pieces'

const mapStateToProps = (state) => {
  return {
    pieces: state.pieces.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePiece: (index) => {
      dispatch({
        type: 'DELETE_PIECE',
        payload: {
          index
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pieces)
