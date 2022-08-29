
import Slider from '../components/Slider'
import Jewelery from './categoties/Jewelery'
import SliderCart from '../components/SliderCart'
import Menclothing from './categoties/Menclothing'
import Womenclothing from "./categoties/Womenclothing";
import Electronics from "./categoties/Electronics";
import Footer from './Footer'


import { useContext } from 'react';

import Mycontext from '../context'
import Loading from '../components/Loading';

export default function Home() {
  const products = useContext(Mycontext)
  
  return (
    <>
        {!products ? <Loading /> : 
        <div className='pt-20'>
          <Slider product9={products} />
        
        <Jewelery />
        <SliderCart title={'Most popular'} products={products} />
        <Menclothing />
        <SliderCart title={'Most viewed'} products={products} />
        <Womenclothing />
        <SliderCart title={'Most purchased'} products={products} />
        <Electronics />
        <Footer />
        </div>
        }
        
    </>
  )
}
