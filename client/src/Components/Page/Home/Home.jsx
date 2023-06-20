import React from 'react'
import Categories from '../../Categories/Categories'
import Products from '../../Products/Products'
import CarTotals from '../../CartTotals/CarTotals'
import Header from '../../Header/Header'

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home px-6 flex md:flex-row flex-col justify-between gap-10">
        <div className="categories overflow-auto max-h-[calc(100vh-118px)] md:h-auto h-32">
            <Categories/>
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
