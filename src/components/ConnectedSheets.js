import { connect } from 'react-redux'
import Sheets from 'components/Sheets'

const mapStateToProps = state => {
  const { list } = state.pieces
  const { kerf } = state.sheets

  let pieces = selectPieces(list)

  let sheets = [
    {
      root: {
        x: 0,
        y: 0,
        width: 96.0,
        height: 48.0,
        used: false
      },
      pieces: []
    }
  ]

  for (var i = 0; i < pieces.length; i++) {
    fit(pieces[i], sheets, kerf)
  }

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

const fit = (piece, sheets, kerf) => {
  let node
  for (var i = 0; i < sheets.length; i++) {
    let sheet = sheets[i]
    node = findNode(sheet.root, piece.width, piece.height)

    if (node) {
      split(node, piece.width, piece.height, kerf)
      sheet.pieces.push({
        width: piece.width,
        height: piece.height,
        x: node.x,
        y: node.y
      })
      break
    }
  }

  if (!node) {
    let sheet = {
      root: {
        x: 0,
        y: 0,
        width: 96.0,
        height: 48.0,
        used: false
      },
      pieces: []
    }
    node = findNode(sheet.root, piece.width, piece.height)

    if (node) {
      split(node, piece.width, piece.height, kerf)
      sheet.pieces.push({
        width: piece.width,
        height: piece.height,
        x: node.x,
        y: node.y
      })
      sheets.push(sheet)
    }
  }
  return node
}

const findNode = (root, width, height) => {
  if (root.used) {
    let right = findNode(root.right, width, height)
    let down = findNode(root.down, width, height)
    if (right) {
      return right
    } else {
      return down
    }
  } else if (width <= root.width && height <= root.height) {
    return root
  }
  return null
}

const split = (node, width, height, kerf) => {
  node.used = true
  node.down = {
    x: node.x,
    y: node.y + height + kerf,
    width: node.width,
    height: node.height - height - kerf,
    used: false
  }
  node.right = {
    x: node.x + width + kerf,
    y: node.y,
    width: node.width - width - kerf,
    height,
    used: false
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

  pieces.sort((a, b) => b.width - a.width)

  return pieces
}

export default connect(mapStateToProps, mapDispatchToProps)(Sheets)
