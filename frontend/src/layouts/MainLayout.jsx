import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';

const MainLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
