import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import suple_banner from './Components/Assets/BANNER_SUPLEMENTOS.png';
import acessorios_banner from './Components/Assets/BANNER_ACESSÓRIOS.png';
import kit_banner from './Components/Assets/BANNER_KITS.png';

function App() {
  return (
      <BrowserRouter>      
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/suplementos' element={<ShopCategory banner={suple_banner} category="suplementos"/>}/>
          <Route path='/acessorios' element={<ShopCategory banner={acessorios_banner} category="acessorios"/>}/>
          <Route path='/kits' element={<ShopCategory banner={kit_banner} category="kits"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>         
          </Routes>
          <Footer/>
      </BrowserRouter>
                 
  );
}

export default App;
