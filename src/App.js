import './App.css';
import MainNavigation from './MainNavigation';
import { AppProvider } from './sidebar/context';
import { CartProvider } from './cart/context';
import { AppBeverageProvider } from './beverage/context';

function App() {
  return (
    <AppProvider>
      <CartProvider>
        <AppBeverageProvider>
          <MainNavigation />
        </AppBeverageProvider>
      </CartProvider>
    </AppProvider>
  );
}

export default App;
