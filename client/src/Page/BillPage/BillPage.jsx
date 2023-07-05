import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Components/Header/Header';
import { Button, Card, Input, Space, Table } from 'antd';
import PrintBill from '../../Components/PrintBill/PrintBill';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

export default function BillPage() {
  const[billData,setBillData]=useState()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customer,setCustomer]=useState()

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

  
  useEffect(()=>{
    const getBills=async()=>{
      const res=await fetch(process.env.REACT_APP_SERVER_URL + "/api/bill/get-all")
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
            ...getColumnSearchProps('customerName'),
        },
        {
            title: 'Elaqe nomresi',
            dataIndex: 'customerPhoneNumber',
            key: 'customerPhoneNumber',
            ...getColumnSearchProps('customerPhoneNumber'),
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
            ...getColumnSearchProps('paymentMode'),
            
            
        },
        {
            title: 'Umumi mebleq',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            sorter: (a, b) => a.totalAmount - b.totalAmount,
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
