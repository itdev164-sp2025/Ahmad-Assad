import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BaseButton } from './BaseButton'
import { cloneElement } from 'react'

const StyledButton = styled(BaseButton)`
  ${({ theme, variant }) => {
    const selected = theme.variants?.iconButton?.[variant || 'primary']
    return selected ? `color: ${selected.color}; background-color: ${selected.backgroundColor};` : ''
  }}
`

export const IconButton = styled(({ icon, className, ...rest }) => {
  const clonedIcon = cloneElement(icon, { size: rest.size || 24 })
  return (
    <StyledButton className={className} {...rest}>
      {clonedIcon}
    </StyledButton>
  )
})``

IconButton.defaultProps = {
  size: 24,
}

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
}