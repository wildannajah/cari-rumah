import { Box, Container } from '@mui/material';

export default function Hero() {
  return (
    <Container>
      <Box
        sx={{
          height: '437px',
          backgroundImage: `url(${'assets/images/home.jpg'})`,
          borderRadius: '20px',
        }}
      >
        <Box justifyContent="center" display="flex" pt="2rem">
          <img src="assets/images/logo-light.png" alt="" />
        </Box>
      </Box>
    </Container>
  );
}
