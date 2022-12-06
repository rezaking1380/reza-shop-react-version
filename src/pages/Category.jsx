
import {useEffect , useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'




export default function Category() {
  const [Category, setCategory] = useState()
  const { categories } = useParams()
  

  const fetcher = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${categories}`);
  const data = await response.json();
  setCategory(data)
  }

  
  useEffect( () => {
      fetcher()
  }, [categories]);

  const dispatch = useDispatch()
  const handelid = (e,id,img,title,price) => {
    e.preventDefault()
    dispatch({type:'inc'})
    dispatch({type:'Add_product_id',
    id:id,
    image:img,
    title:title,
    price:price
  })
  };

  return (
    <>
    {!Category ? <Loading /> : 
    <div className="bg-white">
           <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
             <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{categories}</h2>
    
             <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 xl:grid-cols-4">
               {Category.map((product) => (
                 <div className="group relative"  key={product.id}>
                  <Link to={`/product/${product.id}`} >
                  <div className='flex items-start p-2 rounded-lg 
                 border-solid bg-white border-2 border-gray-200 flex-col'>
                 <div className="mb-3 flex justify-center h-56
                 w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                   <img
                     src={product.image}
                     alt={product.title}
                     className="rounded-lg
                      object-center"
                   />
                 </div>
                 <div className='w-full'>
                   <div className="mb-3 flex flex-col h-[100px] items-center text-center justify-center">
                     <span className='text-lg'>{product.title}</span>
                   </div>
                   <div className="flex justify-around items-center mb-3">
                     <button onClick={(e) => handelid(e,product.id,product.image,product.title,product.price)}
                     className='bg-amber-400 rounded-lg py-2 px-4 font-semibold text-lg'
                     >
                      Add to bag
                      </button>
                     <div className='text-2xl font-semibold'><span>${product.price}</span></div>
                   </div>
                 </div>
               </div>
                  </Link>
                   

                 </div>
                
               ))}
             </div>
           </div>
         </div>
  }
    </>
  )
}