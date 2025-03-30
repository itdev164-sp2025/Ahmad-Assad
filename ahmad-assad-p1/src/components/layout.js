/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { lightTheme, darkTheme } from '../styles/GlobalStyles';
import { Box } from 'rebass';
import { Header } from './Header';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Box>
        <Header toggleTheme={toggleTheme} />
        <Box as="main" px={3} py={2}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;