import Page from '../components/Page';
import Hero from '../sections/home/Hero';

function App() {
  return (
    <Page
      title="Home"
      sx={{
        backgroundColor: 'background',
        mt: '3rem',
      }}
    >
      <Hero />
    </Page>
  );
}

export default App;
