import MotionLazyContainer from './components/animate/MotionLazyContainer';
import { ProgressBarStyle } from './components/ProgressBar';
import Router from './routes';
import ThemeProvider from './theme';

function App() {
  return (
    <ThemeProvider>
      <MotionLazyContainer>
        <ProgressBarStyle />
        <Router />
      </MotionLazyContainer>
    </ThemeProvider>
  );
}

export default App;
