import React from "react"

const LayoutContext = React.createContext({isHome: false})

const LayoutContextProviderComponent = ({children}) => {

  const [isHome, setIsHome] = React.useState(false);

  const value = React.useMemo(() => ({
    isHome,
    setIsHome
  }), [isHome])

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export { LayoutContext, LayoutContextProviderComponent }
