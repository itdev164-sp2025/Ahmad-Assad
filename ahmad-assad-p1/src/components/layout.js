import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from 'rebass'
import { Header } from './Header'
import { theme } from '../components/themes/Gray/Gray'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Box as="main" px={3} py={2}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Layout