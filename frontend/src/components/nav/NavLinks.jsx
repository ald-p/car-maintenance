import { NavbarItem, Link } from '@nextui-org/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink';

const NavLinks = ({ navItems }) => {
  return (
    <>
      {navItems.map((item, index) => (
        <NavLink
          key={`${index}-${item.label}`}
          route={item.route}
          label={item.label}
        />
      ))}
    </>
  );
};

export default NavLinks;
