
import { Form, Input, Button } from 'antd'
import { Link } from "react-router-dom"
import { Carousel } from 'antd';


import React from 'react'
import AuthCarusel from '../../Components/AuthCarusel/AuthCarusel'

export default function REgister() {

    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 relative flex flex-col w-full h-full justify-center">
                    <h1 className='text-center text-5xl font bold mb-2'>LOGO</h1>
                    <Form layout='vertical'>
                        <Form.Item
                            label="user name"
                            name={"username"}
                            rules={[
                                {
                                    required: true,
                                    message: "user name yaz"
                                }
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="email"
                            name={"email"}
                            rules={[
                                {
                                    required: true,
                                    message: "email yaz"
                                }
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="sifre"
                            name={"password"}
                            rules={[
                                {
                                    required: true,
                                    message: "wifreni daxil et"
                                }
                            ]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="tekrar sifre"
                            name={"repeatPassword"}
                            dependencies={['password']}
                            rules={[
                                {
                                  required: true,
                                  message: 'Shifreni tekrarlayin!',
                                },
                                ({ getFieldValue }) => ({
                                  validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                      return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Shifreni duzgun tekrarlayin!'));
                                  },
                                }),
                              ]}
                            >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType="submit"
                                className='w-full'
                                size="large"
                            >
                                Yadda Saxla
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full  '>
                        Bir hesabiniz var ? &nbsp;
                        <Link to={"/login"} className='text-blue-600'>Indi daxil ol !</Link>
                    </div>
                </div>
                <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff]'>
                    <div className='w-full h-full flex items-center'>
                        <div className='w-full'>
                        <Carousel autoplay  className='!h-full'>
                            < AuthCarusel image={"Images/responsive.svg"} title={"Responsive"} desc={"Butun cihaz boyunca uygunluq"}/>
                            < AuthCarusel image={"Images/statistic.svg"} title={"Statistik"} desc={"Genish tutulan statistikalar"}/>
                            < AuthCarusel image={"Images/customer.svg"} title={"Musteri memnuniyyeti"} desc={"Teqdimatdan sonra memnun qalan muwteriler"}/>
                            < AuthCarusel image={"Images/admin.svg"} title={"Idare panel"} desc={"Tek yerden idare"}/>
                        </Carousel>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
