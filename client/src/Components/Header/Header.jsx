import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, FileTextOutlined, UserOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';

export default function Header() {
    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex justify-between items-center ' >
                <div className="logo">
                    <a href="/">
                        <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1 flex justify-center">
                    <Input size="large" placeholder="Search items" prefix={<SearchOutlined />} className='rounded-full max-w-[800px]' />
                </div>

                <div className="menu-links flex justify-between items-center gap-7 z-40 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
                    <a href={"/"} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                        <HomeOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Home</span>
                    </a>
                    <Badge count={5} offset={[0, 6]} className='md:flex hidden'>
                        <a href={"cart"} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                            <ShoppingCartOutlined className='md:text-2xl' />
                            <span className='md:text-xs text-[10px]'>Korzina</span>
                        </a>
                    </Badge>
                    <a href={"menu-link"} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                        <FileTextOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Fatura</span>
                    </a>
                    <a href={"menu-link"} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                        <UserOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Muwteri</span>
                    </a>
                    <a href={"menu-link"} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                        <BarChartOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Statiks</span>
                    </a>
                    <a href={"menu-link"} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                        <LogoutOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Exit</span>
                    </a>
                </div>
                <Badge count={5} offset={[0, 6]} className='md:hidden flex'>
                    <a href={"/cart"} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                        <ShoppingCartOutlined className='text-2xl' />
                        <span className='md:text-xs text-[10px]'>Korzina</span>
                    </a>
                </Badge>
            </header>
        </div>
    )
}
