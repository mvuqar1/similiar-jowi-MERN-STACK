import React from 'react'
import Header from '../../Header/Header'
import Statistiks from '../../Statistiks/Statistiks'


export default function StatistikPage() {
    return (
        <>
            <Header />
            <div className='px-6'>
                <h1 className='text-4xl font-bold text-center mb-4'>Statistik</h1>
                <div className='statistic-section'>

                    <h2 className='text-lg'> Xosh Geldin <span className='text-green-700 font-bold text-xl'> admin</span> </h2>


                    <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">


                       <Statistiks image={"Images/user.png"} title={"Toplam muwteri"} amount={"10"}/>
                       <Statistiks image={"Images/money.png"} title={"Toplam kazanc"} amount={"1000"}/>
                       <Statistiks image={"Images/sale.png"} title={"Toplam satis"} amount={"6"}/>
                       <Statistiks image={"Images/product.png"} title={"Toplam urun"} amount={"28"}/>


                    </div>
                </div>
            </div>
        </>
    )
}
