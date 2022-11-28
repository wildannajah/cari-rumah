import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import Hero from '../sections/home/Hero';

function Home() {
  return (
    <Page
      title="Home"
      sx={{
        backgroundColor: 'background',
        mt: '3rem',
      }}
    >
      <Stack
        display="flex"
        minHeight="100vh"
        justifyContent="center"
        spacing={5}
        alignItems="center"
      >
        <Hero />
        <Stack spacing={2}>
          <Typography variant="h3" align="center">
            Discover your dream house <br /> from smartphone
          </Typography>
          <Typography variant="subtitle2" align="center">
            You can arrange the installments <br />
            accordingly with your income
          </Typography>
        </Stack>
        <Link component={RouterLink} to="/auth/login">
          <Typography
            variant="h4"
            sx={{
              color: 'text.primary',
            }}
            display="flex"
            alignItems="center"
          >
            Next
            <Iconify icon="ic:round-navigate-next" fontSize="32px" />
          </Typography>
        </Link>
      </Stack>
    </Page>
  );
}

export default Home;
