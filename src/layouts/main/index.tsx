import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function MainLayout() {
  return (
    <Stack minHeight="100vh">
      <Outlet />
      <Navigation />
    </Stack>
  );
}
