import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
} from '@nextui-org/react';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import { FaCar } from 'react-icons/fa';

const NavBar = () => {
  const navItems = [
    { route: '/', label: 'Home' },
    { route: '/cars', label: 'Cars' },
    { route: '/records', label: 'Records' },
    { route: '/add-record', label: 'Add Record' },
  ];

  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarBrand>
          <NavbarMenuToggle className="sm:hidden mr-6" />
          <FaCar className="text-2xl mr-2" />
          <h1 className="font-bold text-inherit text-xl">AutoLog</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLinks navItems={navItems} />
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <RouterLink to="/login">
            <Link>Login</Link>
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink to="/signup">
            <Button as={Link} color="primary" variant="flat">
              Sign Up
            </Button>
          </RouterLink>
        </NavbarItem>
      </NavbarContent> */}

      <NavMenu navItems={navItems} />
    </Navbar>
  );
};

export default NavBar;
