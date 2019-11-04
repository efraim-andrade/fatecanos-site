import React from 'react';
import PropTypes from 'prop-types';

import '../../theme/global.css';

import { Container } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
