
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Page/Home/Home';
import CartPage from './Components/Page/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
