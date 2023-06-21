
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Page/Home/Home';
import CartPage from './Components/Page/CartPage/CartPage';
import BillPage from './Components/Page/BillPage/BillPage';
import MuwteriPage from './Components/Page/MuteriPage/MuwteriPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="cart" element={<CartPage/>}/>
      <Route path="bills" element={<BillPage/>}/>
      <Route path="customers" element={<MuwteriPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
