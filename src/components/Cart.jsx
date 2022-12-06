import React from 'react'


export default function Cart({product}) {
  return (
    <>
        {product.map((product) => (
                 <div className='w-full'>
                 <div className="mb-3 flex justify-center h-56">
                   <img
                     src={product.image}
                     alt={product.title}
                     className="rounded-lg object-contain"
                   />
                 </div>
                 <div>
                   <div className="mb-3 flex flex-col h-[100px]">
                     <span>{product.title}</span>
                   </div>
                   
                     <div className="flex justify-around items-center">
                       <button className="bg-amber-400 rounded-lg py-2 px-4">
                         <span>Add to bag</span>
                       </button>
                       <div className="text-2xl">
                         <span>${product.price}</span>
                       </div>
                     </div>
                   
                 </div>
               </div>
               ))}
    </>
  )
}
