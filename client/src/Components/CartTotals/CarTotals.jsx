import React from 'react'
import { Button } from "antd"
import { ClearOutlined, PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"

export default function CarTotals() {
    return (
        <div className="cart h-full max-h-[calc(100vh-91px)] flex flex-col">
            <h2 className='bg-blue-600 text-center py-4 text-white font-bold tracking-wide'>
                Basket
            </h2>
            <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2 py-2 overflow-y-auto">
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
                <li className="cart-item flex items-center justify-around ">
                    <div className='flex items-center'>
                        <img src="https://unimall.az/images/detailed/234/40147561c48cee8b8a64cf76b26cd2cd.jpg" alt="im" className='w-16 h-16 object-cover ' />
                        <div className='flex flex-col ml-2'>
                            <b>Alma</b>
                            <span className='font-bold'>1 azn *2</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} />
                        <span className='font-bold'>1</span>
                        <Button type="primary" size='middle' className='w-full flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} />
                    </div>
                </li>
            </ul>
            <div className="cart-totals mt-auto">
                <div className='border-t border-b'>
                    <div className=' flex justify-between p-2'>
                        <b>All total</b>
                        <span>99 azn</span>
                    </div>
                </div>
                <div className='border-t border-b'>
                    <div className=' flex justify-between p-2'>
                        <b>Edv</b>
                        <span className='text-red-700'>10 %</span>
                    </div>
                </div>
                <div className='border-t'>
                    <div className=' flex justify-between p-2  text-green-500 text-xl'>
                        <b>Umumi total</b>
                        <span >99 tl</span>
                    </div>
                </div>
                <div className='py-4 px-2'>
                    <Button type="primary" size='large' className='primary w-full'>Sifarish ele</Button>
                    <Button type="primary" size='large' danger className='w-full mt-2 flex items-center justify-center' icon={<ClearOutlined />}>Temizle </Button>
                </div>
            </div>
        </div>
    )
}
