import { Link } from '@nextui-org/react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { NavbarItem } from '@nextui-org/react';

const NavLink = ({ route, label }) => {
  const { pathname } = useLocation();

  return (
    <NavbarItem isActive={pathname == route}>
      <Link href={route} color={pathname !== route && 'foreground'}>
        {label}
      </Link>
    </NavbarItem>
  );
};

export default NavLink;
