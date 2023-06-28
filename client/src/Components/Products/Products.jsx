import React, { useEffect, useState } from 'react'
import ProductsItem from './ProductsItem'
import { PlusOutlined,EditOutlined } from "@ant-design/icons"
import Add from './Add'
import { useNavigate } from 'react-router-dom'

export default function Products({categories}) {
    const [products, setProducts] = useState([])
    const [addModalOpen, setAddModalOpen] = useState(false);
    const navigate=useNavigate()

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch("http://localhost:5000/api/products/get-all")
            const data = await res.json()
            setProducts([...data])

        }
        getProducts()
    }, [])

    const showAddModal = () => {
        setAddModalOpen(true);
    };
    return (
        <div className='products-wrapper grid grid-cols-card gap-4'>
            <ProductsItem key={products._id} products={products} />
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
