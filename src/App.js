import React from 'react'
import RequireAuth from './Good-Code/RequireAuth'
import Routing from './Good-Code/Routing'

const App = () => {
  return (
    <div>
      <RequireAuth>
        <Routing />
      </RequireAuth>
    </div>
  )
}

export default App
