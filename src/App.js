import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './screens/Cart/Cart'
import Contact from './screens/Contact/Contact'
import { Route, Routes} from 'react-router-dom';
import Products from './screens/Products/Products';
import { CartProvider } from './Contexts/CartContext';
// import Order from './screens/Orders/Order';
import NotFound from './screens/notFound/NotFound';
import Home from './screens/Home/Home';
import ProductDetails from './screens/ProductDetails/ProductDetails';
import About from './screens/About/About';

function App() {
  
  return (
   <>
<CartProvider>
<Header/>
<Routes>

<Route  path="/"  element={<Home/>}/>
<Route  path="/products" element={<Products/>}/>
<Route  path="/product-details/:id" element={<ProductDetails/>}/>
<Route  path="/cart" element={<Cart/>}/>
{/* <Route  path="/orders" element={<Order/>}/> */}
<Route  path="/contact" element={<Contact/>}/>
<Route  path="/about" element={<About/>}/>
<Route  path="*" element={<NotFound/>}/>

</Routes>
</CartProvider>
<Footer/>

   </>
  );
}

export default App;
