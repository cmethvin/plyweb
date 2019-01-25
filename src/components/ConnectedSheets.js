import { connect } from 'react-redux'
import Sheets from 'components/Sheets'

import binaryTree from 'binpack/binaryTree'

const mapStateToProps = state => {
  const { list } = state.pieces
  const { kerf } = state.sheets

  let pieces = selectPieces(list)

  let sheets = binaryTree(pieces, 96.0, 48.0, kerf)

  return {
    ...state.sheets,
    sheets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeKerf: (e) => {
      dispatch({
        type: 'CHANGE_KERF',
        payload: {
          kerfInput: e.target.value
        }
      })
    },
    updateSettings: () => {
      dispatch({
        type: 'UPDATE_SHEET_SETTINGS'
      })
    }
  }
}

const selectPieces = (list) => {
  let pieces = Object.keys(list).flatMap(k => {
    let rv = []
    let item = list[k]

    const { width, height } = item
    for (var i = 0; i < item.quantity; i++) {
      rv.push({
        width,
        height
      })
    }

    return rv
  })

  return pieces
}

export default connect(mapStateToProps, mapDispatchToProps)(Sheets)
