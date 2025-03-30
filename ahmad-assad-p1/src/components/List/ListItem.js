import React from 'react';
import PropTypes from 'prop-types';
import { BaseContainer } from '../BaseContainer';

export const ListItem = ({ children, ...rest }) => (
  <BaseContainer as="li" p={2} {...rest}>
    {children}
  </BaseContainer>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};