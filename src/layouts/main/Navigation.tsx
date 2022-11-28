/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tabs, Box, Tab, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Iconify from '../../components/Iconify';

function Navigation() {
  const { pathname } = useLocation();
  const [value, setValue] = useState(pathname);
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: 1,
        borderColor: 'grey.300',
      }}
      // elevation={3}
    >
      <Grid container sx={{ marginTop: '-2px' }}>
        <Grid item xs={3}>
          <Link to="/" onClick={() => setValue('/')}>
            <Box justifyContent="center" display="flex">
              <Iconify
                height="2em"
                borderTop={value === '/' ? 3 : ''}
                icon={
                  value === '/'
                    ? 'ant-design:home-filled'
                    : 'ant-design:home-outlined'
                }
                color={value === '/' ? 'primary.main' : 'text.primary'}
                fontSize="32px"
              />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/search" onClick={() => setValue('/search')}>
            <Box justifyContent="center" display="flex">
              <Iconify
                height="2em"
                borderTop={value === '/search' ? 3 : ''}
                icon="bx:search"
                color={value === '/search' ? 'primary.main' : 'text.primary'}
                fontSize="32px"
              />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/liked" onClick={() => setValue('/liked')}>
            <Box justifyContent="center" display="flex">
              <Iconify
                height="2em"
                borderTop={value === '/liked' ? 3 : ''}
                icon={
                  value === '/liked'
                    ? 'icon-park-solid:like'
                    : 'icon-park-outline:like'
                }
                color={value === '/liked' ? 'primary.main' : 'text.primary'}
                fontSize="32px"
              />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/profile" onClick={() => setValue('/profile')}>
            <Box justifyContent="center" display="flex">
              <Iconify
                height="2em"
                borderTop={value === '/profile' ? 3 : ''}
                icon="pajamas:profile"
                color={value === '/profile' ? 'primary.main' : 'text.primary'}
                fontSize="32px"
              />
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Navigation;
