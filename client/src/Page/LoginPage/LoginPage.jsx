import { Form, Input, Button, Checkbox, message } from 'antd'
import { Link, useNavigate } from "react-router-dom"
import { Carousel } from 'antd';


import React, { useState } from 'react'
import AuthCarusel from '../../Components/AuthCarusel/AuthCarusel';

export default function LoginPage() {
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()

    const onFinish = async(values) => {
        setLoading(true)
        try {
           const res=await fetch(process.env.REACT_APP_SERVER_URL + "/api/auth/login",{
                method:"POST",
                body:JSON.stringify(values),
                headers:{"Content-type":"application/json;charset=UTF-8"},
            })
            const user = await res.json();
            console.log(await user)
            if(res.status === 200){
                localStorage.setItem("posUser",JSON.stringify({username: user.username,email: user.email}))
                message.success("Xosh geldiniz")
                navigate("/")
                setLoading(false)
            }
            else if(res.status===404){
                message.success("Bele bir email movcud deyil")
                setLoading(false)
            }
            else if(res.status===403){
                message.success("Sifre yanlish")
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            message.success("Xeta bash verdi")
            setLoading(false)
        }
    }
    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 relative flex flex-col w-full h-full justify-center">
                    <h1 className='text-center text-5xl font bold mb-2'>LOGO</h1>
                    <Form
                        onFinish={onFinish}
                        layout='vertical'
                        initialValues={{remember:false}}
                    >
                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Sifre"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name={"remember"}
                            valuePropName='checked'
                        >
                            <div className='flex justify-between'>
                                <Checkbox>Remember me</Checkbox>
                                <Link>Forgot password?</Link>
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button type='primary'
                                htmlType="submit"
                                className='w-full primary'
                                loading={loading}
                                size="large">
                                
                               Daxil ol
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full  '>
                        Hele de hesabiniz yoxdur ? &nbsp;
                        <Link to={"/register"} className='text-blue-600'>Qeydiyyatdan kecin !</Link>
                    </div>
                </div>
                <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff]'>
                    <div className='w-full h-full flex items-center'>
                        <div className='w-full'>
                            <Carousel autoplay className='!h-full'>
                                < AuthCarusel image={"Images/responsive.svg"} title={"Responsive"} desc={"Butun cihaz boyunca uygunluq"} />
                                < AuthCarusel image={"Images/statistic.svg"} title={"Statistik"} desc={"Genish tutulan statistikalar"} />
                                < AuthCarusel image={"Images/customer.svg"} title={"Musteri memnuniyyeti"} desc={"Teqdimatdan sonra memnun qalan muwteriler"} />
                                < AuthCarusel image={"Images/admin.svg"} title={"Idare panel"} desc={"Tek yerden idare"} />
                            </Carousel>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
