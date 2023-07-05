import React from 'react'
import { Button, Form, Input, Modal, Select, message } from 'antd';

export default function Add({ categories,products, addModalOpen, setAddModalOpen,setProducts }) {
    const [form] = Form.useForm()
    const handleCancel = () => {
        setAddModalOpen(false);
    };
    const onFinish = (values) => {
        console.log(values)
        try {
            fetch(process.env.REACT_APP_SERVER_URL + "/api/products/add-product",{
                method:"POST",
                body:JSON.stringify(values),
                headers:{"Content-type":"application/json;charset=UTF-8"},
            })
            message.success("ugur ile yuklendi")
            form.resetFields()
            handleCancel()
            setProducts([
                ...products,
                {...values,
                    price:Number(values.price)
                }
            ])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Modal
                title="Yeni mal yukle"
                open={addModalOpen}

                onCancel={handleCancel}
                footer={false}
            >
                <Form layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item
                        name="title"
                        label="Malin adi"
                        rules={[{ required: true, message: "category bosh qala bilmez" }]}
                    >
                        <Input placeholder='Malin adini yazin' />
                    </Form.Item>
                    <Form.Item
                        name="img"
                        label="Malin wekili"
                        rules={[{ required: true, message: "category bosh qala bilmez" }]}
                    >
                        <Input placeholder='Wekil yukleyin' />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Malin qiymeti"
                        rules={[{ required: true, message: "category bosh qala bilmez" }]}
                    >
                        <Input typeof='number' placeholder='Malin qiymetini qeyd edin' />
                    </Form.Item>
                    <Form.Item
                        name="category"
                        label="Malin kategoriyasi"
                        rules={[{ required: true, message: "category bosh qala bilmez" }]}
                    >
                        <Select options={categories.map(category => ({
                            label: category.title,
                            value: category.title
                        }))} placeholder='Kategoriya novunu qeyd edin' />
                    </Form.Item>
                    <Form.Item className='flex justify-end mb-0'>
                        <Button type='primary' htmlType="submit" className='primary'>Yaddasha al</Button>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}
