import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from "./component/Products";
import ViewBooks from './component/viewProduct';
import Cart from './component/Cart/Cart'
import AboutUs from './component/AboutUs';

import './App.css';
function App() {




  return (
    <>


      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ViewBooks />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about" element={<AboutUs />} />
      </Routes>

    </>
  );

}

export default App;
