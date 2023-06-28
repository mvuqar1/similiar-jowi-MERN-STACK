import React from 'react'

export default function ProductsItem({ products }) {
    return (
        <>
            {products.map((item) => (
                <div key={item._id} className="products-item border hover:shadow-lg cursor-pointer transition-all select-none">
                    <div className="product-image">
                        <img className='h-28 object-cover w-full border-b' src={item.img} alt="im" />
                    </div>
                    <div className="product-info font-bold flex flex-col p-3">
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                    </div>
                </div>
            ))}
        </>
    )
}
