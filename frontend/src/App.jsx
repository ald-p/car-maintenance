import React from 'react';
import { Route, useNavigate, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import RecordsPage from './pages/RecordsPage';
import { NextUIProvider } from '@nextui-org/react';

export default function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/records" element={<RecordsPage />} />
        </Route>
      </Routes>
    </NextUIProvider>
  );
}
