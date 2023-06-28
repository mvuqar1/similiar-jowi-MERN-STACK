import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message, Modal, Select, Table } from 'antd';

export default function Edit() {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([]);
    const [editingItem, setEditingItem] = useState({});
    const showEditModal = () => {
        setEditModalOpen(true);
    };
    const [form] = Form.useForm();

    useEffect(() => {
        const getCategories = async () => {
          try {
            const res = await fetch("http://localhost:5000/api/categories/get-all");
            const data = await res.json();
            data &&
              setCategories(
                data.map((item) => {
                  return { ...item, value: item.title };
                })
              );
          } catch (error) {
            console.log(error);
          }
        };
    
        getCategories();
      }, []);

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch("http://localhost:5000/api/products/get-all")
            const data = await res.json()
            setProducts([...data])

        }
        getProducts()
    }, [])



    const onFinish = (values) => {
      try {
        fetch("http://localhost:5000/api/products/update-product", {
          method: "PUT",
          body: JSON.stringify({ ...values, productId: editingItem._id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        message.success("Ürün başarıyla güncellendi.");
        setProducts(
          products.map((item) => {
            if (item._id === editingItem._id) {
              return values;
            }
            return item;
          })
        );
      } catch (error) {
        message.error("Bir şeyler yanlış gitti.");
        console.log(error);
      }
    };

    const deleteProduct = (id) => {
            console.log(id)
            if(window.confirm("Eminsiniz?")){
            try {
                fetch("http://localhost:5000/api/products/delete-product",{
                    method:"DELETE",
                    body:JSON.stringify({productId:id}),
                    headers:{"Content-type":"application/json; charset=UTF-8"}
                })
                message.success("Ugurla silindi")
                setProducts(products.filter((item) => item._id !== id));
            } catch (error) {
                console.log(error)
                message.success("Sehv getdi")

            }
        }
    }
    const columns = [
        {
            title: 'Product listi',
            dataIndex: 'title',
            width: "8%"
        },
        {
            title: 'Mali goster',
            dataIndex: 'img',
            width: "5%",
            render: (_, record) => {
                return (
                    <img src={record.img} alt="im" className='w-full h-20 object-cover ' />
                )
            }
        },
        {
            title: 'Qiymet',
            dataIndex: 'price',
            width: "8%",
        },
        {
            title: 'Category',
            dataIndex: 'category',
            width: "8%",
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            width: "8%",
            render: (_, record) => {
                return (
                    <div>
                        <Button type="link" onClick={() => { showEditModal(); setEditingItem(record); }} className='pl-0'>Duzelt</Button>

                        <Button type="link" onClick={() => deleteProduct(record._id)} danger>Sil</Button>
                    </div>
                )
            }
        }
    ]
    const handleCancel = () => {
        setEditModalOpen(false);
    };

    return (
        <>
            <Table
                bordered
                dataSource={products}
                columns={columns}
                rowKey="_id"
                scroll={{
                    x: 1000,
                    y: 600
                }}
            />
            <Modal
                open={editModalOpen}
                title="Kateqoriya duzelt"
                footer={false}
                onCancel={handleCancel}
            >
                <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={editingItem}
        >
          <Form.Item
            name="title"
            label="Ürün Adı"
            rules={[
              { required: true, message: "Ürün Adı Alanı Boş Geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün adı giriniz." />
          </Form.Item>
          <Form.Item
            name="img"
            label="Ürün Görseli"
            rules={[
              { required: true, message: "Ürün Görseli Alanı Boş Geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün görseli giriniz." />
          </Form.Item>
          <Form.Item
            name="price"
            label="Ürün Fiyatı"
            rules={[
              { required: true, message: "Ürün Fiyatı Alanı Boş Geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün fiyatı giriniz." />
          </Form.Item>
          <Form.Item
            name="category"
            label="Kategori Seç"
            rules={[
              { required: true, message: "Kategori Alanı Boş Geçilemez!" },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Güncelle
            </Button>
          </Form.Item>
        </Form>
            </Modal>
        </>
    )
}
