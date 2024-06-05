import { NavbarMenu, NavbarMenuItem, Link } from '@nextui-org/react';
import { useLocation } from 'react-router-dom';

const NavMenu = ({ navItems }) => {
  const { pathname } = useLocation();

  return (
    <NavbarMenu>
      {navItems.map((item, index) => (
        <NavbarMenuItem
          key={`${index}-${item.label}`}
          isActive={pathname === item.route}
        >
          <Link
            href={item.route}
            color={pathname !== item.route && 'foreground'}
          >
            {item.label}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default NavMenu;
