import React from 'react';
import { Flex, Box } from 'rebass';
import { Link } from 'gatsby';

export const Header = () => {
  return (
    <Flex
      as="header"
      px={3}
      py={2}
      alignItems="center"
      justifyContent="space-between"
      bg="primary"
      color="white"
    >
      <Box as={Link} to="/" sx={{ textDecoration: 'none', fontSize: 3 }}>
        My Gatsby Site
      </Box>
      <Box as="img"
        alt="Gatsby logo"
        height={20}
        sx={{ margin: 0 }}
        src="data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 107 28' xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3C/svg%3E"
      />
    </Flex>
  );
};
