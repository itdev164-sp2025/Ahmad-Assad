import React from 'react';
import { Button } from 'rebass';

const ThemeToggle = ({ toggleTheme }) => (
  <Button mt={2} onClick={toggleTheme}>
    Toggle Theme
  </Button>
);

export default ThemeToggle;