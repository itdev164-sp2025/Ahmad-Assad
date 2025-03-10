/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { lightTheme, darkTheme } from '../styles/GlobalStyles';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;