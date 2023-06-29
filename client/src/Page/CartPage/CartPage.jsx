import React from 'react'
import { Button, Card, Popconfirm, Table } from 'antd';
import { useState } from 'react';
import Header from '../../Components/Header/Header'
import CreateBill from '../../Components/CreateBill/CreateBill';
import { useSelector, useDispatch } from 'react-redux';
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { increase, decrease, deleteProduct } from '../../Redux/cartSlice'


export default function CartPage() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const columns = [
    {
      title: 'Malin Gorunuwu',
      dataIndex: 'img',
      key: 'img',
      width: "125px",
      render: (text) => {
        return (<img src={text} alt="" className='w-full h-20 object-cover' />)
      }

    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Malin qiymeti',
      dataIndex: 'price',
      key: 'price',
      render: (text) => {
        return (
          <span>{text.toFixed(2)} Azn</span>
        )
      }
    },
    {
      title: 'Edeti',
      dataIndex: 'quantity',
      key: 'category',
      render: (text, record) => {
        return (
          <div className='flex items-center'>
            <Button onClick={() => dispatch(increase(record))} type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
            <span className='font-bold w-6 inline-block text-center'>{text}</span>
            <Button
              onClick={() => {
                if (record.quantity === 1) {
                  if (window.confirm("Mall silinsin?")) {
                    dispatch(decrease(record))
                  }
                }
                else {
                  dispatch(decrease(record))
                }
              }}
              type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
          </div>

        )
      }
    },
    {
      title: 'Toplam',
      render:(_,record)=>{
        return(
          <p>{record.quantity*record.price}</p>
        )
      }
    },
    {
      title: 'Action',
      render:(_,record)=>{
        return(
          <Popconfirm
          title="Silmek ucun eminsiniz?"
          onConfirm={()=>dispatch(deleteProduct(record))}
          okText="Beli"
          cancelText="Xeyir"
          >
            <Button>Sil</Button>
          </Popconfirm>
        )
      }
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
        <Table 
        dataSource={cart.cartItems} 
        columns={columns} 
        bordered 
        pagination={false}
        scroll={{
          x:1200,
          y:300
        }}
        />
        <div className='flex justify-end'>
          <Card size="small" className='mt-4 w-72' >
            <div className='flex justify-between'>
              <span>All total</span>
              <span>{cart.total.toFixed(2)} Azn</span>
            </div>
            <div className='flex justify-between my-2'>
              <span>EDV 10%</span>
              <span className='text-red-600'>{(cart.total * cart.tax / 100).toFixed(2)} Azn</span>
            </div>
            <div className='flex justify-between'>
              <b>Umumi total</b>
              <b>{(cart.total + +(cart.total * cart.tax / 100)).toFixed(2)} Azn</b>
            </div>
            <Button disabled={cart.cartItems.length ===0} onClick={showModal} className='primary mt-4 w-full' type='primary' size='large'>Sifarish ele</Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} showModal={showModal} handleCancel={handleCancel} />


    </>
  )
}




