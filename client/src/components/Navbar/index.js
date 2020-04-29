import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <Link to='/counter'>Counter</Link>
    <Link to='/todos'>Todos</Link>
  </>
);

export default Navbar;