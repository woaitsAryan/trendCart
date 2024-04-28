import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/categories';
import Cart from './components/cart';
import Login from './components/Login';
import BestSell from './components/BestSell';
import Donate from './components/Donate'

function App(){
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/bestsell" element={<BestSell/>}></Route>
      <Route path="/donate" element={<Donate/>}></Route>

      </Routes>
    </Router>
  )
}
export default App;