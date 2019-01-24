import React from 'react'

import Controls from 'components/ConnectedControls'
import Pieces from 'components/ConnectedPieces'

import 'components/Sidebar.less'

export default props => <aside id='ply-sidebar'>
  <Controls />
  <Pieces />
</aside>
