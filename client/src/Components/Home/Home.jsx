import React from 'react'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import CarTotals from '../CartTotals/CarTotals'

export default function Home() {
  return (
    <div className="home px-6 flex justify-between gap-10">
        <div className="categories overflow-auto max-h-[calc(100vh-118px)]">
            <Categories/>
        </div>
        <div className="products flex-[8]">
            <Products/>
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mt-[24px] md:-mr-[24px] border">
            <CarTotals/>
        </div>
    </div>
  )
}
