import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';
import navStyles from '../styles/navStyles.module.css';

const Navbar = () => (
  <div>
    <Box bgcolor="secondary.main" py={2}>
      <nav className="wrapper">
        <div className={navStyles.container}>
          <Box pt={1}>
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'white' }}>Shopping</Link>
          </Box>
          <ul className={navStyles.icons}>
            <Box px={2}>
              <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Shop</Link></li>
            </Box>
            <Box px={2}>
              <li><Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>My Cart</Link></li>
            </Box>
            <Box px={2}>
              <li><Link to="/cart" style={{ color: 'white' }}><ShoppingCartIcon /></Link></li>
            </Box>
          </ul>
        </div>
      </nav>
    </Box>
  </div>
);

export default Navbar;
