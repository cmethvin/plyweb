import React from 'react'

import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Sheets from 'components/ConnectedSheets'

import 'components/App.less'

export default props => <div id='ply-app'>
  <Header />
  <main>
    <Sidebar />
    <Sheets />
  </main>
</div>
