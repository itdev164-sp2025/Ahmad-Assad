import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { Link } from 'gatsby'
import { Search } from 'styled-icons/feather'
import { IconButton } from '../Button'
import { H1 } from '../Heading'

// Styled components with theme variants
const StyledHeader = styled(Flex)`
  ${({ theme }) => {
    const variant = theme.variants?.header?.primary
    return variant ? `background-color: ${variant.backgroundColor};` : ''
  }}
`

const StyledLink = styled(Link)`
  ${({ theme }) => {
    const variant = theme.variants?.header?.primary
    return variant ? `color: ${variant.color}; text-decoration: none;` : ''
  }}
`

const Header = ({ TestSite }) => (
  <StyledHeader
    as="header"
    px={3}
    py={2}
    alignItems="center"
    justifyContent="space-between"
  >
    <Box>
      <H1>
        <StyledLink to="/">{TestSite}</StyledLink>
      </H1>
    </Box>
    <IconButton icon={<Search />} variant="contrast" />
  </StyledHeader>
)

export default Header