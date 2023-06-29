import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, FileTextOutlined, UserOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const cartStateLength=useSelector((state)=>state.cart.cartItems.length)
    
    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex justify-between items-center ' >
                <div className="logo">
                    <Link to={"/"}>
                        <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                    </Link>
                </div>
                <div className="header-search flex-1 flex justify-center">
                    <Input size="large" placeholder="Search items" prefix={<SearchOutlined />} className='rounded-full max-w-[800px]' />
                </div>

                <div className="menu-links flex justify-between items-center gap-7 z-40 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
                    <Link to={"/"} className='flex flex-col items-center hover:text-[#40a9ff] transition-all'>
                        <HomeOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Esas sehife</span>
                    </Link>
                    <Badge count={cartStateLength} offset={[-2, 2]} className='md:flex hidden items-center'>
                        <Link to={"/cart"} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                            <ShoppingCartOutlined className='md:text-2xl' />
                            <span className='md:text-xs text-[10px]'>Sebet</span>
                        </Link>
                    </Badge>
                    <Link to={"/bills"} className='flex flex-col hover:text-[#40a9ff] transition-all items-center'>
                        <FileTextOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Faktura</span>
                    </Link>
                    <Link to={"/customers"} className='flex flex-col hover:text-[#40a9ff] transition-all items-center'>
                        <UserOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>MuSteri</span>
                    </Link>
                    <Link to={"/statistik"} className='flex flex-col hover:text-[#40a9ff] transition-all items-center'>
                        <BarChartOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Statistika</span>
                    </Link>
                    <Link to={"/register"} className='flex flex-col hover:text-[#40a9ff] transition-all items-center'>
                        <LogoutOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Cixis</span>
                    </Link>
                </div>
                <Badge count={cartStateLength} offset={[0, 6]} className='md:hidden flex'>
                    <Link to={"/cart"} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                        <ShoppingCartOutlined className='text-2xl' />
                        <span className='md:text-xs text-[10px]'>Sebet</span>
                    </Link>
                </Badge>
            </header>
        </div>
    )
}
