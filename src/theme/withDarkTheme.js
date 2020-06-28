import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { darkTheme } from './theme'

export const withDarkTheme = (Component) => {
  return (props) => {
    return (
      <ThemeProvider theme={darkTheme}>
        <Component {...props} />
      </ThemeProvider>
    )
  }
}
