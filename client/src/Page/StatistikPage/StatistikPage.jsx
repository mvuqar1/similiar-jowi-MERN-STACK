import Header from '../../Components/Header/Header'
import Statistiks from '../../Components/Statistiks/Statistiks'
import React, { useEffect, useState } from 'react'
import { Area, Pie } from '@ant-design/plots';


export default function StatistikPage() {
  
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([])
  const user=JSON.parse(localStorage.getItem("posUser"))
  console.log(user)

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch(process.env.REACT_APP_SERVER_URL + "/api/bill/get-all")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/products/get-all")
            const data = await res.json()
            setProducts([...data])

        }
        getProducts()
    }, [])
    const config = {
        data,
        xField: 'customerName',
        yField: 'subTotal',
        xAxis: {
            range: [0, 1],
        },
    };

  

    const config2 = {
        appendPadding: 10,
        data,
        angleField: 'subTotal',
        colorField: 'customerName',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: 'Toplam Deyer',
            },
        },
    };
    const totalAmount=()=>{
      const amount=data.reduce((total,item)=>total+item.totalAmount,0)
      return `${amount.toFixed(2)} Azn`
    }

    const uniqueCustomerNames = [...new Set(data?.map(item => item.customerName))];

    return (
         <>
         <Header />
         <div className="px-6 md:pb-0 pb-20">
           <h1 className="text-4xl font-bold text-center mb-4">Statistika</h1>
           <div className="statistic-section">
             <h2 className="text-lg">
               Xosh geldin{" "}
               <span className="text-green-700 font-bold text-xl">{user.username}</span>.
             </h2>
             <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
               <Statistiks
                 title={"Musteri sayi"}
                 amount={uniqueCustomerNames?.length}
                 image={"Images/user.png"}
               />
               <Statistiks
                 title={"Toplam Qazanc"}
                 amount={totalAmount()}
                 image={"Images/money.png"}
               />
               <Statistiks
                 title={"Toplam Satis"}
                 amount={data?.length}
                 image={"Images/sale.png"}
               />
               <Statistiks
                 title={"Toplam Mehsul"}
                 amount={products.length}
                 image={"Images/product.png"}
               />
             </div>
             <div className="flex justify-between gap-10 lg:flex-row flex-col items-center scroll-auto">
               <div className="lg:w-1/2 lg:h-full h-72">
                 <Area {...config} />
               </div>
               <div className="lg:w-1/2 lg:h-full h-72">
                 <Pie {...config2} />
               </div>
             </div>
           </div>
         </div>
       </>
    )
}
