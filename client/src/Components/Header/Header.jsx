import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, FileTextOutlined, UserOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function Header() {
    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex justify-between items-center ' >
                <div className="logo">
                    <a href="/">
                        <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1">
                    <Input size="large" placeholder="Search items" prefix={<SearchOutlined />} className='rounded-full max-w-[800px]' />
                </div>
                <div className="menu-links flex justify-between items-center gap-8">
                    <a href={"menu-link"} className='flex flex-col'>
                        <HomeOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Home</span>
                    </a>
                    <a href={"menu-link"} className='flex flex-col'>
                        <ShoppingCartOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Korzina</span>
                    </a>
                    <a href={"menu-link"} className='flex flex-col'>
                        <FileTextOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Fatura</span>
                    </a>
                    <a href={"menu-link"} className='flex flex-col'>
                        <UserOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Muwteri</span>
                    </a>
                    <a href={"menu-link"} className='flex flex-col'>
                        <BarChartOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Statiks</span>
                    </a>
                    <a href={"menu-link"} className='flex flex-col'>
                        <LogoutOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Exit</span>
                    </a>
                </div>
            </header>
        </div>
    )
}
