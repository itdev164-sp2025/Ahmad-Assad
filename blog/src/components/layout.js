/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import { Gray } from "./themes"

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  font-size: 14px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Gray}>
      <Header />
      <Content>{children}</Content>
      <Footer>© {new Date().getFullYear()} {data.site.siteMetadata.title}</Footer>
    </ThemeProvider>
  )
}

export default Layout
