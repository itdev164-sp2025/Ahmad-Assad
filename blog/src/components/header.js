import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.headerBackground};
  padding: 20px;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.headerFontColor};
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">My Blog</StyledLink>
    </StyledHeader>
  )
}

export default Header