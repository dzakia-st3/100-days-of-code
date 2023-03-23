import './App.css';
import MainNavigation from './MainNavigation';
import { AppProvider } from './sidebar/context';

function App() {
  return (
    <AppProvider>
      <MainNavigation />
    </AppProvider>
  );
}

export default App;
