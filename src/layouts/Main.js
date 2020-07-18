import React from 'react'
import useHeaderOffsetClass from '../hooks/useHeaderOffsetClass';

const Main = ({children}) => {
  const offsetClass = useHeaderOffsetClass();
  return (
    <main className={offsetClass}>
      {children}
    </main>
  )
}
export default Main
