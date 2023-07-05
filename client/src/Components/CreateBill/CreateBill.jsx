import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, Input, Select, Button, Card, message} from 'antd';
import { reset } from '../../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';


export default function CreateBill({ isModalOpen, handleCancel,showModal}) {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    
    const onFinish =async (values) => {
        try {
            const res=await fetch(process.env.REACT_APP_SERVER_URL + "/api/bill/add-bill",{
                method:"POST",
                body:JSON.stringify({
                    ...values,
                    cartItems:cart.cartItems,
                    subTotal:+cart.total,
                    tax:+(cart.total * cart.tax / 100),
                    totalAmount:+(cart.total + +(cart.total * cart.tax / 100))

                }),
                headers:{"Content-type":"application/json;charset=UTF-8"},
            })
            if(res.status===200){
                message.success("ugurla yuklendi")
                dispatch(reset())
                navigate("/bills")
            }
            
        } catch (error) {
            console.log(error)
            message.success("sehv getdi")
            
        }
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
                        name="customerName"
                        rules={[{ required: true, message: "Username is required" }]} >
                        <Input placeholder="Musterini qeyd et" />
                    </Form.Item>
                    <Form.Item
                        label="Mob nomre"
                        name="customerPhoneNumber"
                        rules={[{ required: true, message: "Mob number is required" }]}>
                        <Input placeholder="Mobil nomre" />
                    </Form.Item>
                    <Form.Item
                        label="Select"
                        name="paymentMode"
                        rules={[{ required: true, message: "Select Pay is required" }]}>
                        <Select placeholder="Odenis usulunu sec">
                            <Select.Option value="Naqd">Naqd</Select.Option>
                            <Select.Option value="Kart">Kart</Select.Option>
                        </Select>
                    </Form.Item>
                    <Card size="small" >
                        <div className='flex justify-between'>
                            <span>Mebleq</span>
                            <span>{cart.total.toFixed(2)} Azn</span>
                        </div>
                        <div className='flex justify-between my-2'>
                            <span>EDV 10%</span>
                            <span className='text-red-600'>{(cart.total * cart.tax / 100).toFixed(2)} Azn</span>
                        </div>
                        <div className='flex justify-between'>
                            <b>Umumi mebleq</b>
                            <b>{(cart.total + +(cart.total * cart.tax / 100)).toFixed(2)} Azn</b>
                        </div>
                        <div>
                        <Button 
                        // onClick={() =>{ }} 
                        className='primary mt-4 w-full' 
                        type='primary' 
                        size='large'
                        htmlType='submit'
                        disabled={cart.cartItems.length ===0}
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
