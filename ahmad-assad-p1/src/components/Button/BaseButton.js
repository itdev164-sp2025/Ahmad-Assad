import React from 'react'
import { Button } from 'rebass'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Reset = styled(Button)`
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: none;
`

export const BaseButton = ({ children, ...rest }) => (
  <Reset {...rest}>{children}</Reset>
)

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
}