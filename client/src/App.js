
import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
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
      <Route path="/" element={<RouteControl><Home/></RouteControl>}/>
      <Route path="cart" element={<RouteControl><CartPage/></RouteControl>}/>
      <Route path="bills" element={<RouteControl><BillPage/></RouteControl>}/>
      <Route path="customers" element={<RouteControl><MuwteriPage/></RouteControl>}/>
      <Route path="statistik" element={<RouteControl><StatistikPage/></RouteControl>}/>
      <Route path="products" element={<RouteControl><ProductPage/></RouteControl>}/>
      <Route path="register" element={<REgister/>}/>
      <Route path="login" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


export  function RouteControl({children}) {
  if(localStorage.getItem("posUser")){
    return children
  }else{
    return <Navigate to="/login"/>
  }
}
