import React from 'react';
import { Link } from 'gatsby';

const Navbar = ({ toggleTheme }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/blog">Blog</Link>
    <button onClick={toggleTheme}>Toggle Theme</button>
  </nav>
);

export default Navbar;