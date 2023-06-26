import React, { useState } from 'react'
import "./style.css"
import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import Add from './Add';
import Edit from './Edit';

export default function Categories({ categories, setCategories }) {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const showAddModal = () => {
        setAddModalOpen(true);
    };
    const showEditModal = () => {
        setEditModalOpen(true);
    };

    return (
        <ul className='flex md:flex-col gap-4 text-lg'>
            {categories.map(item => (
                <li key={item._id} className="category-item">
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
