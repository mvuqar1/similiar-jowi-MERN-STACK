import React, { useEffect, useState } from 'react'
import "./style.css"
import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import Add from './Add';
import Edit from './Edit';

export default function Categories({ categories, setCategories,products,setFiltered }) {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [categoryTitle, setCategoryTitle] = useState("Hamisi");

    useEffect(()=>{
        if(categoryTitle==="Hamisi"){
            setFiltered(products)
        }
        else{
            setFiltered(products.filter((item)=>item.category===categoryTitle))
        }
    },[setFiltered,products,categoryTitle])

    const showAddModal = () => {
        setAddModalOpen(true);
    };
    const showEditModal = () => {
        setEditModalOpen(true);
    };

    return (
        <ul className='flex md:flex-col gap-4 text-lg'>
            <li key={"hamisi"} onClick={()=>setCategoryTitle("Hamisi")}
            className={`category-item ${ "Hamisi" === categoryTitle && "!bg-pink-700" }`}
            >
                    <span>Hamisi</span>
            </li>
            {categories.map(item => (
                <li
                key={item._id}
                onClick={()=>setCategoryTitle(item.title)}
                className={`category-item ${ item.title === categoryTitle ? "!bg-pink-700" : ""}`}>
                    <span>{item.title}</span>
                </li>
            ))}

            <li onClick={showAddModal} className="category-item !bg-purple-800 hover:opacity-90">
                <PlusOutlined className='md:text-2xl' />
            </li>
            <Add
                addModalOpen={addModalOpen}
                setAddModalOpen={setAddModalOpen}
                categories={categories}
                setCategories={setCategories}
            />

            <li onClick={showEditModal} className="category-item !bg-orange-800 hover:opacity-90">
                <EditOutlined className='md:text-2xl' />
            </li>
            <Edit
                editModalOpen={editModalOpen}
                setEditModalOpen={setEditModalOpen}
                categories={categories}
                setCategories={setCategories}
            />

        </ul>
    )
}
