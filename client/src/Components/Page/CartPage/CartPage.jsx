import React from 'react'
import { Button,Card, Table } from 'antd';
import { useState } from 'react';
import Header from '../../Header/Header'
import CreateBill from '../../CreateBill/CreateBill';

export default function CartPage() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header />
      <div className='px-6'>
        <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>
        <div className='flex justify-end'>
          <Card size="small" className='mt-4 w-72' >
            <div className='flex justify-between'>
              <span>All total</span>
              <span>99 azn</span>
              </div>
            <div className='flex justify-between my-2'>
              <span>EDV 10%</span>
              <span className='text-red-600'>9.9 azn</span>
              </div>
            <div className='flex justify-between'>
              <b>Umumi total</b>
              <b>99 azn</b>
              </div>
              <Button onClick={showModal} className='primary mt-4 w-full' type='primary' size='large'>Sifarish ele</Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} handleCancel={handleCancel}/>
    

    </>
  )
}




