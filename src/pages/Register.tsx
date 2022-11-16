import { Container, Stack, Typography } from '@mui/material';
import Logo from '../components/Logo';
import Page from '../components/Page';
import RegisterForm from '../sections/auth/register/RegisterForm';

export default function Register() {
  return (
    <Page title="Register">
      <Container>
        <Stack
          display="flex"
          minHeight="100vh"
          justifyContent="center"
          spacing="80px"
          alignItems="center"
        >
          <Stack alignItems="center">
            <Logo />
            <Typography>Temukan rumah impianmu</Typography>
          </Stack>
          <RegisterForm />
        </Stack>
      </Container>
    </Page>
  );
}
