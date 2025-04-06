import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { H1 } from '../Heading';

const Header = ({ TestSite }) => (
  <header>
    <H1>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        {TestSite}
      </Link>
    </H1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'TestSite',
};

export default Header;