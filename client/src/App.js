
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Page/Home/Home';
import CartPage from './Page/CartPage/CartPage';
import BillPage from './Page/BillPage/BillPage';
import MuwteriPage from './Page/MuteriPage/MuwteriPage';
import StatistikPage from './Page/StatistikPage/StatistikPage';
import REgister from './Page/Auth/REgister';
import LoginPage from './Page/LoginPage/LoginPage';
import ProductPage from './Page/ProductPage/ProductPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="cart" element={<CartPage/>}/>
      <Route path="bills" element={<BillPage/>}/>
      <Route path="customers" element={<MuwteriPage/>}/>
      <Route path="statistik" element={<StatistikPage/>}/>
      <Route path="products" element={<ProductPage/>}/>
      <Route path="register" element={<REgister/>}/>
      <Route path="login" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
