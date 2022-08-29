import { useState , useEffect } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import {Link, useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loading from '../components/Loading';

const product = {
  
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  
}
const reviews = { href: '#', average: 0, totalCount: 0 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductReviewe() {
  const { id } = useParams()
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [products, setproducts] = useState()
  
  const api = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );
    const data = await response.json();
    setproducts(data);
  };

  useEffect(() => {
    api()
  }, [ ])


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
    {!products ? <Loading /> : 
    
    <div className="bg-white pt-16">

    <div className="pt-6">
      

      <div className='flex items-center flex-col lg:flex-row md:flex-col h-[90vh]'>
        {/* Image gallery */}
      <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:min-w-[40%]">
        
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 max-w-lg">
          <img
            src={products[id-1].image}
            alt={products[id-1].title}
            className="w-full h-full object-center object-cover px-4"
          />
        </div>
      </div>

      {/* Product info */}
      <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2  lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{products[id-1].title}</h1>
        </div>
        
        <div className="py-10 lg:pt-6 lg:pb-5 lg:col-start-1 lg:col-span-2 lg:border-b lg:border-gray-200 lg:pr-8">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900 font-sans">{products[id-1].description}</p>
            </div>
          </div>

          
        </div>

        {/* Options */}
        <div className="mt-4 lg:mt-5 lg:row-span-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl text-gray-900">${products[id-1].price}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      products[id-1].rating.rate > rating ? 'text-amber-500' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
              <a href={reviews.href} className="ml-3 text-sm font-medium text-amber-500 hover:text-amber-400">
                {products[id-1].rating.count} reviews
              </a>
            </div>
          </div>

          <form className="mt-10">
            

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                <a href="#" className="text-sm font-medium text-amber-500 hover:text-amber-500">
                  Size guide
                </a>
              </div>

              <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                <div className="grid grid-cols-4 gap-4 lg:grid-cols-4">
                  {product.sizes.map((size) => (
                    <RadioGroup.Option
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={({ active }) =>
                        classNames(
                          size.inStock
                            ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                            : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                          active ? 'ring-2 ring-amber-400' : '',
                          'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                          {size.inStock ? (
                            <span
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked ? 'border-amber-400' : 'border-transparent',
                                'absolute -inset-px rounded-md pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                            >
                              <svg
                                className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <button
            onClick={(e) => handelid(e,id,products[id-1].image,products[id-1].title,products[id-1].price)}
              type="submit"
              className="mt-10 w-full bg-amber-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
            >
              Add to bag
            </button>
          </form>
        </div>

        
      </div>
      </div>
    </div>
  </div>
}
</>
  )
}