import React from 'react'
import { Button, message } from "antd"
import { ClearOutlined, PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, increase, decrease,reset } from '../../Redux/cartSlice'
import { useNavigate } from 'react-router-dom'




export default function CarTotals() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    return (
        <div className="cart h-screen max-h-[calc(100vh-91px)] flex flex-col ">
            <h2 className='bg-blue-600 text-center py-4 text-white font-bold tracking-wide'>
                Sebet
            </h2>
            <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2 py-2 overflow-y-auto">

                {cart.cartItems.length > 0 ?
                    cart.cartItems.map((item) => (
                        <li key={item._id} className="cart-item flex items-center justify-around ">
                            <div className='flex items-center'>
                                <img src={item.img} alt="im" onClick={() => dispatch(deleteProduct(item))} className='w-16 h-16 object-cover cursor-pointer ' />
                                <div className='flex flex-col ml-2'>
                                    <b>{item.title}</b>
                                    <span className='font-bold'>{item.price} Azn *{item.quantity}</span>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <Button onClick={() => dispatch(increase(item))} type="primary" size='middle' className='primary w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                                <span className='font-bold w-6 inline-block text-center'>{item.quantity}</span>
                                <Button
                                    onClick={() => {
                                        if (item.quantity === 1) {
                                            if (window.confirm("Mall silinsin?")) {
                                                dispatch(decrease(item))
                                            }
                                        }
                                        else{
                                            dispatch(decrease(item))
                                        }
                                    }}
                                    type="primary" size='middle' className='primary w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                            </div>
                        </li>

                    )).reverse()
                    : "Sebet Boshdur ..."
                }
            </ul>
            <div className="cart-totals mt-auto">
                <div className='border-t border-b'>
                    <div className=' flex justify-between p-2'>
                        <b>Mebleq</b>
                        <span>{cart.total.toFixed(2) > 0 ? cart.total.toFixed(2) : 0} Azn</span>
                    </div>
                </div>
                <div className='border-t border-b'>
                    <div className=' flex justify-between p-2'>
                        <b>EDV {cart.tax}%</b>
                        <span className='text-red-700'>{(cart.total * cart.tax / 100).toFixed(2) > 0 ? (cart.total * cart.tax / 100).toFixed(2) : 0} Azn</span>
                    </div>
                </div>
                <div className='border-t'>
                    <div className=' flex justify-between p-2  text-green-500 text-xl'>
                        <b>Umumi mebleq</b>
                        <span >{(cart.total + +(cart.total * cart.tax / 100).toFixed(2)) > 0 ? (cart.total + +(cart.total * cart.tax / 100).toFixed(2)) : 0} Azn</span>
                    </div>
                </div>
                <div className='py-4 px-2'>
                    <Button disabled={cart.cartItems.length ===0} onClick={()=>navigate("/cart")} type="primary" size='large' className='primary w-full'>Sifarish ele</Button>
                    <Button disabled={cart.cartItems.length ===0} onClick={()=>{if(window.confirm("Umumen butun sifariwin silinmeyine eminsiniz?")){dispatch(reset() ,message.success("Temizlendi"))}}} type="primary" size='large' danger className='w-full mt-2 flex items-center justify-center' icon={<ClearOutlined />}>Temizle </Button>
                </div>
            </div>
        </div>
    )
}
