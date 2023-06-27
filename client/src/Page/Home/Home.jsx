import React, { useEffect, useState } from 'react'
import Categories from '../../Components/Categories/Categories'
import Products from '../../Components/Products/Products'
import CarTotals from '../../Components/CartTotals/CarTotals'
import Header from '../../Components/Header/Header'

export default function Home() {
  const [categories,setCategories]=useState([])
 
  useEffect(()=>{
    const getCategories=async()=>{
      try {
        const res=await fetch("http://localhost:5000/api/categories/get-all")
        const data=await res.json()
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategories()
  },[setCategories])
  return (
    <>
    <Header/>
    <div className="home px-6 flex md:flex-row flex-col justify-between gap-10">
        <div className="categories overflow-auto max-h-[calc(100vh-118px)] md:h-auto h-32">
            <Categories categories={categories} setCategories={setCategories}/>
        </div>
        <div className="products flex-[8] overflow-auto max-h-[calc(100vh-118px)]">
            <Products/>
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mt-[24px] md:-mr-[24px] border md:pb-0 pb-16">
            <CarTotals/>
        </div>
    </div>
    </>
  )
}
