import React from 'react'
import { Button, Form, Input, Modal,message } from 'antd';

export default function Add({setCategories,categories,addModalOpen,setAddModalOpen}) {
    const [form]=Form.useForm()
    const handleCancel = () => {
        setAddModalOpen(false);
    };
    const onFinish = (values) => {
        try {
            fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/add-category",{
                method:"POST",
                body:JSON.stringify(values),
                headers:{"Content-type":"application/json;charset=UTF-8"},
            })
            message.success("ugur ile yuklendi")
            form.resetFields()
            handleCancel()
            setCategories([...categories,
                {
                    _id:Math.random(),
                    title:values.title
                }])
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <>
     <Modal
                title="Yeni kategoriya yukle"
                open={addModalOpen}

                onCancel={handleCancel}
                footer={false}
            >
                <Form layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item
                        name="title"
                        label="kategoriya yukle"
                        rules={[{ required: true, message: "category bosh qala bilmez" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item className='flex justify-end mb-0'>
                        <Button type='primary' htmlType="submit" className='primary'>Yaddasha al</Button>
                    </Form.Item>

                </Form>
            </Modal>
    </>
  )
}
