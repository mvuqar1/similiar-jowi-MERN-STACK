import React from 'react'
import { Modal, Form, Input, Select, Button, Card } from 'antd';


export default function CreateBill({ isModalOpen, handleCancel,showModal}) {
    console.log("1212")
    const onFinish = (values) => {
        console.log(isModalOpen)
        console.log(values)
    };
    return (
        <>
            <Modal
                title="Yeni Faktura"
                open={isModalOpen}
                footer={false}
                onCancel={handleCancel}
            >
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Musteri adi"
                        name={"user"}
                        rules={[{ required: true, message: "Username is required" }]} >
                        <Input placeholder="Musterini qeyd et" />
                    </Form.Item>
                    <Form.Item
                        label="Mob nomre"
                        name={"mob"}
                        rules={[{ required: true, message: "Mob number is required" }]}>
                        <Input placeholder="Mobil nomre" />
                    </Form.Item>
                    <Form.Item
                        label="Select"
                        name={"pay"}
                        rules={[{ required: true, message: "Select Pay is required" }]}>
                        <Select placeholder="Odenis usulunu sec">
                            <Select.Option value="Naqd">Naqd</Select.Option>
                            <Select.Option value="Kart">Kart</Select.Option>
                        </Select>
                    </Form.Item>
                    <Card size="small" >
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
                        <div>
                        <Button 
                        onClick={() =>{ showModal(); console.log("first"); }} 
                        className='primary mt-4 w-full' 
                        type='primary' 
                        size='large'
                        htmlType='submit'
                        >
                            Sifarish ele
                        </Button>
                        </div>

                    </Card>
                </Form>
            </Modal>
        </>
    )
}
