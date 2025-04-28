import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from 'styled-components';
import IconButton from './IconButton';

const SearchButton = ({ variant, ...props }) => (
  <ThemeConsumer>
    {theme => (
      <IconButton
        {...props}
        icon={theme.icons.Search}
        variant={variant}
      />
    )}
  </ThemeConsumer>
);

SearchButton.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default SearchButton;