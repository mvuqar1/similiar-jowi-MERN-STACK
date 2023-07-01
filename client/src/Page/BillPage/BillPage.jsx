import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header';
import { Button, Card, Table } from 'antd';
import PrintBill from '../../Components/PrintBill/PrintBill';

export default function BillPage() {
  const[billData,setBillData]=useState()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customer,setCustomer]=useState()

  
  useEffect(()=>{
    const getBills=async()=>{
      const res=await fetch("http://localhost:5000/api/bill/get-all")
      const data=await res.json()
      data.reverse()
      setBillData(data)
      
    }
    getBills()
  },[])
  const showModal = () => {
    setIsModalOpen(true);
};


  
  const columns = [
        {
            title: 'Musteri',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Elaqe nomresi',
            dataIndex: 'customerPhoneNumber',
            key: 'customerPhoneNumber',
        },
        {
            title: 'Yaranma tarixi',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render:(text)=>{
              return(
                <p>{text.substring(0,10)}  {text.substring(11,16)}</p>
              )
            }
        },
        {
            title: 'Odeme novu',
            dataIndex: 'paymentMode',
            key: 'paymentMode',
            
        },
        {
            title: 'Umumi mebleq',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render:(text)=>{
              return(
                <p>{text.toFixed(2)} Azn</p>
              )
            }
        },
        {
            title: 'Action',
            key:"action",
            render:(_,record)=>{
              return(
                <Button onClick={() => { showModal(); setCustomer(record)}}>Detallar</Button>


              )
            }
            
        },
    ];


    return (
        <>
            <Header />
            <div className='px-6'>
            <h1 className='text-4xl font-bold text-center mb-4'>Faktura</h1>
                <Table dataSource={billData} columns={columns} bordered pagination={false} rowKey={(record) => record._id} scroll={{x:1000,y:300}} />
                <div className=''>
                    <Card size="small" className='mt-4 ' >
                        <Button onClick={showModal} className='primary mt-4 w-full' type='primary' size='large'>Sifarish Yazdir</Button>
                    </Card>
                </div>
            </div>
            <PrintBill setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} customer={customer}/>

        </>
    )
}
