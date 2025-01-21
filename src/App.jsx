import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import { BrowserRouter,Routes,Route } from 'react-router';
import Shop from './pages/shop/Shop';
import ShopCategory from './pages/shopcategory/ShopCategory';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import LoginSignup from './pages/loginsignup/LoginSignup';
import Footer from './components/footer/Footer';
import mens_banner from "./assets/frontend assest/Formals.jpg"
import women_banner from "./assets/frontend assest/womenbanner.png"
import kids_baneer from "./assets/frontend assest/banner_kids.png"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Shop/>} />
         <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men"/>}/>
         <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
         <Route path='/kids' element={<ShopCategory banner={kids_baneer} category="kid"/>}/>
         <Route path='/product' element={<Product/>}>
             <Route  path=':productId' element={<Product/>}/>
         </Route>
         <Route path='/cart' element={<Cart/>} />
         <Route path='/login' element={<LoginSignup/>} />
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
