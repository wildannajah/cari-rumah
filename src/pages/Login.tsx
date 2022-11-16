import { Container, Stack, Typography } from '@mui/material';
import Logo from '../components/Logo';
import Page from '../components/Page';
import LoginForm from '../sections/auth/login/LoginForm';

export default function Login() {
  return (
    <Page title="Login">
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
          <LoginForm />
        </Stack>
      </Container>
    </Page>
  );
}
