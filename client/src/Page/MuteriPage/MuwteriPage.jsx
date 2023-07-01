import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import { Table } from 'antd';

export default function MuwteriPage() {
  const[billData,setBillData]=useState()
  useEffect(()=>{
    const getBills=async()=>{
      const res=await fetch("http://localhost:5000/api/bill/get-all")
      const data=await res.json()
      data.reverse()
      setBillData(data)
      
    }
    getBills()
  },[])


  const columns = [
    {
      title: 'Musteri',
      dataIndex: 'customerName',
      key: 'name',
    },
    {
      title: 'Elaqe nomresi',
      dataIndex: 'customerPhoneNumber',
      key: 'mob',
    },
    {
      title: 'Sifaris tarixi',
      dataIndex: 'createdAt',
      key: 'data',
      render:(text)=>{
        return(
          <p>{text.substring(0,10)} {text.substring(11,16)}</p>
        )
      }

      
    },
  ];
  return (
    <>
      <Header />
      <div className='px-6'>
        <h1 className='text-4xl font-bold text-center mb-4'>Muwteriler</h1>
        <Table 
        dataSource={billData} 
        columns={columns} 
        rowKey={(record) => record._id} 
        bordered
        scroll={{x:1000,y:300}}
        pagination={false} />
        <div className=''>
        </div>
      </div>

    </>
  )
}
