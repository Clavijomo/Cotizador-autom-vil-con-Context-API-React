import { useState, createContext } from 'react'

// Función context
const CotizadorContext = createContext();

// Provider
const CotizadorProvider = ({children}) => {

  return(
    <CotizadorContext.Provider
      value={{
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext;