import React, { useEffect, useState } from 'react'

export default function Products() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        const getProducts=async()=>{
            const res=await fetch("http://localhost:5000/api/products/get-all")
            const data=await res.json()
            setProducts([...data])

        }
        getProducts()
    },[])
  return (
    <div className='products-wrapper grid grid-cols-card gap-4'>
        {products.map((item)=>(
            <div className="products-item border hover:shadow-lg cursor-pointer select-none">
            <div className="product-image">
                <img className='h-26 object-cover w-full border-b' src={item.img} alt="im" />
            </div>
            <div className="product-info font-bold flex flex-col p-3">
                <span>{item.title}</span>
                <span>{item.price}</span>
            </div>
        </div>
        ))}
    </div>
  )
}
