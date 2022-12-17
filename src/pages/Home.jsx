import Slider from '../components/Slider'
import Jewelery from './categoties/Jewelery'
import SliderCart from '../components/SliderCart'
import Menclothing from './categoties/Menclothing'
import Womenclothing from "./categoties/Womenclothing";
import Electronics from "./categoties/Electronics";
import Footer from './Footer'
import { useDispatch , useSelector } from 'react-redux'
import { useContext, useEffect } from 'react';
import Mycontext from '../context'
import Loading from '../components/Loading';
import { allproduct } from '../Redux/reducer/Api';


export default function Home() {
  // const products = useContext(Mycontext)
  const products = useSelector(state => state.Allproduct.allproduct)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allproduct())
  }, [dispatch]);
  
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
