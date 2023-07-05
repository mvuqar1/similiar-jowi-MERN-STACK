import React, { useEffect, useState } from 'react'
import Categories from '../../Components/Categories/Categories'
import Products from '../../Components/Products/Products'
import CarTotals from '../../Components/CartTotals/CarTotals'
import Header from '../../Components/Header/Header'
import { Spin } from 'antd'

export default function Home() {
  const [categories,setCategories]=useState()  //  const [categories,setCategories]=useState([]) spinnere gore deiwdim ki ici false olsun
  const [products, setProducts] = useState()  //  const [products, setProducts] = useState([]) spinnere gore deiwdim ki ici false olsun
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState("")
 
  useEffect(()=>{
    const getCategories=async()=>{
      try {
        const res=await fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/get-all")
        const data=await res.json()
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategories()
  },[setCategories])

  useEffect(() => {
      const getProducts = async () => {
          try {
            const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/products/get-all")
          const data = await res.json()
          setProducts([...data])
          } catch (error) {
            console.log(error)
          }

      }
      getProducts()
  }, [])

  return (
    <>
    <Header setSearch={setSearch}/>
   {categories && products
   ?(
    <div className="home px-6 flex md:flex-row flex-col justify-between gap-10">
    <div className="categories overflow-auto max-h-[calc(100vh-118px)] md:h-auto h-32">
        <Categories categories={categories} setCategories={setCategories} products={products} setFiltered={setFiltered}/>
    </div>
    <div className="products flex-[8] overflow-auto max-h-[calc(100vh-118px)]">
        <Products products={products} setProducts={setProducts} categories={categories} filtered={filtered} search={search} />
    </div>
    <div className="cart-wrapper min-w-[300px] md:-mt-[24px] md:-mr-[24px] border md:pb-0 pb-16">
        <CarTotals/>
    </div>
</div>
   ):  <Spin size="large" className='absolute w-screen h-3/4 flex items-center justify-center'/>}
    </>
  )
}
