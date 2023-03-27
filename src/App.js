import './App.css';
import MainNavigation from './MainNavigation';
import { AppProvider } from './sidebar/context';
import { CartProvider } from './cart/context';

function App() {
  return (
    <AppProvider>
      <CartProvider>
      <MainNavigation />
      </CartProvider>
    </AppProvider>
  );
}

export default App;
