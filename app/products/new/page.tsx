'use client';

import React from 'react';
import ProductForm from '@/components/ProductForm';

const NewProductPage: React.FC = () => {
    return (
        <div className="flex-1 pt-20 container">
            <h1 className="text-3xl font-bold mb-4 text-black">Create New Product</h1>
            <ProductForm />
        </div>
    );
};

export default NewProductPage;
