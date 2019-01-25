const binaryTree = (pieces, sheetWidth, sheetHeight, kerf) => {
  pieces.sort((a, b) => b.width - a.width)

  let sheets = [
    {
      root: {
        x: 0,
        y: 0,
        width: sheetWidth,
        height: sheetHeight,
        used: false
      },
      pieces: []
    }
  ]

  for (var i = 0; i < pieces.length; i++) {
    fit(pieces[i], sheets, kerf)
  }

  return sheets
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

export default binaryTree
