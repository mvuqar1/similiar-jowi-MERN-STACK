import React from 'react'
import { addProduct } from '../../Redux/cartSlice'
import { useDispatch } from 'react-redux'

export default function ProductsItem({ products }) {
    const dispact=useDispatch()


    const handleClick=(item)=>{
        dispact(addProduct({...item,quantity:1}))
    }

    return (
        <>
            {products.map((item) => (
                <div key={item._id} onClick={()=>handleClick(item)} className="products-item border hover:shadow-lg cursor-pointer transition-all select-none">
                    <div className="product-image">
                        <img className='h-28 object-cover w-full border-b' src={item.img} alt="im" />
                    </div>
                    <div className="product-info font-bold flex flex-col p-3">
                        <span>{item.title}</span>
                        <span>{item.price} Azn</span>
                    </div>
                </div>
            ))}
        </>
    )
}
