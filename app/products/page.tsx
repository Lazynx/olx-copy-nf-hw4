'use client';

import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { fetchProducts, Product } from '@/api/productsService';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
    const { data: products, error, isLoading } = useQuery<Product[], Error>('products', fetchProducts);
    const [localProducts, setLocalProducts] = useState<Product[]>([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
        setLocalProducts(storedProducts);
    }, []);

    if (isLoading) return (
        <div className="inset-0 flex items-center justify-center bg-white w-full h-screen">
            <div className="animate-spin rounded-full border-4 border-black border-t-transparent h-14 w-14" />
        </div>
    );

    if (error) return <div>Error: {error.message}</div>;

    const allProducts = [...(products || []), ...localProducts];

    return (
        <main className="flex-1 pt-20">
            <div className="container flex flex-col space-y-5 pb-5">
                {allProducts.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image ?? '/images/bg.jpg'}
                        title={product.title ?? 'No title'}
                        price={product.price ?? '0'}
                        description={product.description ?? 'No description'}
                        category={product.category ?? 'No category'}
                    />
                ))}
            </div>
        </main>
    );
}
