import React, { createContext } from 'react'

export const Data=createContext()

const RequireAuth = ({children}) => {

const  name="chandra"

const arr=['super','star','sekhar']

const fruits={item:"banana",price:20,quality:"good"}

  return (
    <div>
      <Data.Provider value={{name,arr,fruits}}>
        {children}
      </Data.Provider>
    </div>
  )
}

export default RequireAuth
