import React, { useRef } from 'react'
import { Button, Card, Input, Popconfirm, Space, Table } from 'antd';
import { useState } from 'react';
import Header from '../../Components/Header/Header'
import CreateBill from '../../Components/CreateBill/CreateBill';
import { useSelector, useDispatch } from 'react-redux';
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { increase, decrease, deleteProduct } from '../../Redux/cartSlice'
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';




export default function CartPage() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });


  const columns = [
    {
      title: 'Mehsul',
      dataIndex: 'img',
      key: 'img',
      width: "125px",
      render: (text) => {
        return (<img src={text} alt="" className='w-full h-20 object-cover' />)
      }

    },
    {
      title: 'Mehsulun adi',
      dataIndex: 'title',
      key: 'title',
      ...getColumnSearchProps('title'),
    },
    {
      title: 'Kateqoriya',
      dataIndex: 'category',
      key: 'category',
      ...getColumnSearchProps('category'),
    },
    {
      title: 'Mehsulun qiymeti',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
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
      sorter: (a, b) => a.quantity * a.price - b.quantity * b.price,
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




