import Home from './Home'
import ProductReviewe from "./ProductReviewe";
import { Route, Routes} from 'react-router-dom';
import { useContext } from 'react';
import Mycontext from '../context';
import Category from './Category';
import Most from './Most';
import Register from './Register'
import NotFound from './NotFound';
import Navbar from '../components/NavBar';
import ShoppingCart from "./ShoppingCart";


export default function Pages() {

  const product = useContext(Mycontext)
  
  return (
    <>
    <Navbar />
    <Routes>
          <Route index element={<Home products={product} />} />
          <Route path='*' element={<NotFound />} />
          <Route path={`product/:id`} element={<ProductReviewe />} />
          <Route path={`/:products/product/:id`} element={<ProductReviewe />} />
          <Route path={`category/:categories`} element={<Category />} />
          <Route path={`productlist/:products`} element={<Most />} />
          <Route path={`/signup`} element={<Register /> } />
          <Route path={`/signin`} element={<Register /> } />
          <Route path={`/shoping`} element={<ShoppingCart product={product} /> } />
        </Routes>
        
    </>
        
  )
}
