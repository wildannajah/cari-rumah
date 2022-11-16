import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <Stack>
      <Outlet />
    </Stack>
  );
}
