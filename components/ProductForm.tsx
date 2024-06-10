'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { createProduct } from '@/api/productsService';
import InputField from '@/components/ui/InputField';

const ProductForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();
    const queryClient = useQueryClient();

    const createProductMutation = useMutation(createProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries('products');
        },
    });

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            setIsUploading(true);
            try {
                const response = await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setImage(response.data.location);
                setIsUploading(false);
            } catch (error) {
                console.error('Error uploading file:', error);
                setIsUploading(false);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !price || !description || !category || !image) {
            alert("All fields are required.");
            return;
        }

        const newProduct = {
            title,
            price: parseFloat(price),
            description,
            category,
            image,
        };

        try {
            createProductMutation.mutate(newProduct);
            const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
            existingProducts.push(newProduct);
            localStorage.setItem('products', JSON.stringify(existingProducts));

            router.push('/products');
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
                label="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
            />
            <InputField
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required={true}
            />
            <InputField
                label="Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                isTextArea={true}
                required={true}
            />
            <InputField
                label="Category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required={true}
            />
            <div>
                <label className="block text-sm font-medium text-gray-700">Image</label>
                <input
                    type="file"
                    onChange={handleFileChange}
                    required={true}
                    className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {isUploading && <p>Uploading...</p>}
                {image && <img src={image} alt="Uploaded" className="mt-2 w-32 h-32 object-cover" />}
            </div>
            <button
                type="submit"
                disabled={isUploading}
                className="inline-flex items-center justify-center rounded-sm border-white bg-white px-4 py-2 text-black font-medium hover:bg-gray-200 focus:outline-none disabled:bg-gray-700"
            >
                Create Product
            </button>
        </form>
    );
};

export default ProductForm;
