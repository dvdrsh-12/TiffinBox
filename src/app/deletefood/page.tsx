'use client';

import React, { useState } from 'react';

const DeleteItem = () => {
    const [itemName, setItemName] = useState('');

    const handleDelete = async () => {
        try {
            const response = await fetch('/api/deletefood', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: itemName }),
            });

            if (response.ok) {
                console.log('Food item deleted successfully');
                setItemName(''); // Reset the input field
            } else {
                console.error('Failed to delete food item');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className='bg-black w-[1288px] h-screen flex flex-col gap-5 justify-center items-center'>
            <h2 className='text-white text-xl'>Delete Food Item</h2>
            <div>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter food item name"
                className='mr-5 focus:outline-none w-[400px] h-[54px] p-4 rounded-lg bg-ingrey text-white'
            />
            <button onClick={handleDelete} className=' p-4 bg-inyellow text-black rounded-lg'>Delete</button>
            </div>
        </div>
    );
};

export default DeleteItem;