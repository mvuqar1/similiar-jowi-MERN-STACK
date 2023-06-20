import React from 'react'
import { Modal, Form, Input,Select, Button, Card } from 'antd';


export default function CreateBill({ isModalOpen, handleCancel }) {
    return (
        <>
            <Modal title="Yeni Faktura" open={isModalOpen} footer={false} onCancel={handleCancel}>
                <Form layout="vertical">
                    <Form.Item label="Musteri adi" >
                        <Input placeholder="Musterini qeyd et" />
                    </Form.Item>
                    <Form.Item label="Sifarisci" >
                        <Input placeholder="Sifariwcini qeyd et" />
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select placeholder="Odenis usulunu sec">
                            <Select.Option value="Naqd">Naqd</Select.Option>
                            <Select.Option value="Kart">Kart</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
                <Card size="small" className='mt-4 w-100' >
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
              <Button  className='primary mt-4 w-full' type='primary' size='large'>Sifarish ele</Button>
          </Card>
            </Modal>
        </>
    )
}
