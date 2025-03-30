import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';

export const BaseContainer = ({ children, flex = false, ...rest }) => {
  return flex ? (
    <Flex {...rest}>{children}</Flex>
  ) : (
    <Box {...rest}>{children}</Box>
  );
};

BaseContainer.propTypes = {
  children: PropTypes.node.isRequired,
  flex: PropTypes.bool,
};
