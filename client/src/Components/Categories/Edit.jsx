import React, { useState } from 'react'
import { Button, Form, Input,message, Modal, Table } from 'antd';

export default function Edit({ editModalOpen, setEditModalOpen, categories, setCategories }) {
    const [editingRow, setEditingRow] = useState({})
    const onFinish=(values)=>{
        try {
            fetch("http://localhost:5000/api/categories/update-category",{
                method:"PUT",
                body:JSON.stringify({...values,categoryId:editingRow._id}),
                headers:{"Content-type":"application/json;charset=UTF-8"},
            })
            message.success("Kategoriya ugurla yuklendi.")
            setCategories(
                categories.map((item)=>{
                if(item._id === editingRow._id){
                    return{...item,title:values.title}
                }
                return item
            })
            )
        } catch (error) {
            console.log(error)
            message.success("Bir şeyler sehv getdi.");
        }
    }

    const deleteCategory=(id)=>{
        console.log(id)
        if(window.confirm("Eminsiniz?")){
        try {
            fetch("http://localhost:5000/api/categories/delete-category",{
                method:"DELETE",
                body:JSON.stringify({categoryId:id}),
                headers:{"Content-type":"application/json; charset=UTF-8"}
            })
            message.success("Ugurla silindi")
            setCategories(categories.filter((item) => item._id !== id));
        } catch (error) {
            console.log(error)
            message.success("Sehv getdi")
            
        }
    }
}
    const columns = [
        {
            title: 'Category listi',
            dataIndex: 'title',
            render: (_,record) => {
                console.log(record.title)
                if (record._id === editingRow._id) {
                    return (
                        <Form.Item className='mb-0'  name='title'>
                            <Input  defaultValue={record.title} />
                        </Form.Item>
                    )
                } else {
                    return (
                           <p>{record.title}</p>
                    )
                }
            }
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            render: (_,record) => {
                return (
                    <div>
                        <Button type="link" onClick={()=>setEditingRow(record)} className='pl-0'>Duzelt</Button>
                        <Button type="link" htmlType='submit' className='text-gray-500'>Qeyd et</Button>
                        <Button type="link" onClick={()=>deleteCategory(record._id)} danger>Sil</Button>
                    </div>
                )
            }
        }
    ]
    const handleCancel = () => {
        setEditModalOpen(false);
    };
    return (
        <Modal
            open={editModalOpen}
            title="Kateqoriya duzelt"
            footer={false}
            onCancel={handleCancel}
        >
            <Form onFinish={onFinish}>
                <Table
                bordered 
                dataSource={categories} 
                columns={columns} 
                key="_id"
                />

            </Form>
        </Modal>
    )
}
