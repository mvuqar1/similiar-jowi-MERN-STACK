import React, { useState } from 'react'
import ProductsItem from './ProductsItem'
import { PlusOutlined,EditOutlined } from "@ant-design/icons"
import Add from './Add'
import { useNavigate } from 'react-router-dom'

export default function Products({products,setProducts,categories,filtered,search}) {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const navigate=useNavigate()
    


    const showAddModal = () => {
        setAddModalOpen(true);
    };
    return (
        <div className='products-wrapper grid grid-cols-card gap-4'>
            <ProductsItem key={filtered._id} filtered={filtered} search={search} />
            <div onClick={showAddModal} className="h-[186px] products-item border hover:shadow-lg cursor-pointer select-none bg-purple-800 flex justify-center items-center hover:opacity-90">
                <PlusOutlined className='text-white md:text-2xl' />
            </div>
            <div className="h-[186px] products-item border hover:shadow-lg cursor-pointer select-none bg-orange-800 flex justify-center items-center hover:opacity-90">
                <EditOutlined onClick={()=>navigate("/products")} className='text-white md:text-2xl' />
            </div>
            <Add categories={categories} products={products} addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} setProducts={setProducts}/>
        </div>
    )
}
