import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, FileTextOutlined, UserOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Badge, Input, message } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../Redux/cartSlice';
import "./style.css"

export default function Header({setSearch}) {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const cartStateLength=useSelector((state)=>state.cart.cartItems.length)
    const {pathname}=useLocation()

    const logOut=()=>{
        if(window.confirm("Cixis etmeye eminsiniz ?")){
            localStorage.removeItem("posUser")
            navigate("/login")
            dispatch(reset())
            message.success("Yeniden gozleyirik ")
        }
    
    }
    
    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex justify-between items-center ' >
                <div className="logo">
                    <Link to={"/"}>
                        <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                    </Link>
                </div>
                <div className="header-search flex-1 flex justify-center" onClick={()=>{pathname!=="/" &&navigate("/")}}>
                    <Input 
                    size="large" 
                    placeholder="Search items" 
                    prefix={<SearchOutlined />} 
                    
                    onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                    className='rounded-full max-w-[800px]' />
                </div>

                <div className="menu-links flex justify-between items-center gap-7 z-40 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
                    <Link to={"/"} className={`menu-link ${pathname==="/"? "active" :""}`}>
                        <HomeOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Esas sehife</span>
                    </Link>
                    <Badge count={cartStateLength} offset={[-2, 2]} className='md:flex hidden items-center'>
                        <Link to={"/cart"} className={`menu-link ${pathname==="/cart"? "active" :""}`}>
                            <ShoppingCartOutlined className='md:text-2xl' />
                            <span className='md:text-xs text-[10px]'>Sebet</span>
                        </Link>
                    </Badge>
                    <Link to={"/bills"} className={`menu-link ${pathname==="/bills"? "active" :""}`}>
                        <FileTextOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Faktura</span>
                    </Link>
                    <Link to={"/customers"} className={`menu-link ${pathname==="/customers"? "active" :""}`}>
                        <UserOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Musteri</span>
                    </Link>
                    <Link to={"/statistik"} className={`menu-link ${pathname==="/statistik"? "active" :""}`}>
                        <BarChartOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Statistika</span>
                    </Link>
                    <div onClick={logOut} >
                    <Link className='menu-link items-center'>
                        <LogoutOutlined className='md:text-2xl text-2xl' />
                        <span className='md:text-xs text-[10px]'>Cixis</span>
                    </Link>
                    </div>
                </div>
                <Badge count={cartStateLength} offset={[0, 6]} className='md:hidden flex'>
                    <Link to={"/cart"} className={`menu-link ${pathname==="/cart"? "active" :""}`}>
                        <ShoppingCartOutlined className='text-2xl' />
                        <span className='md:text-xs text-[10px]'>Sebet</span>
                    </Link>
                </Badge>
            </header>
        </div>
    )
}
