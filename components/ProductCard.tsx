import Link from 'next/link';

type ProductCardProps = {
    id: number;
    image: string;
    title: string;
    price: string;
    description: string;
    category: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ 
    id,
    image, 
    title, 
    price,
    description,
    category,
}) => {
    return (
        <div className="flex flex-col md:flex-row p-4 border rounded-lg shadow-md bg-white">
            <div className="flex-none w-48 md:w-48 h-48 md:h-auto relative">
                <img src={image} alt={title} className="absolute inset-0 w-full h-full md:object-cover rounded-lg" />
            </div>
            <div className="flex-auto p-4">
                <div className="flex items-baseline justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                    <div className="text-lg font-semibold text-gray-900">{price} $</div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>
                        {description}
                    </span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>{category}</span>
                </div>
                <Link href={`/products/${id}`} className="block mt-4 text-sm font-medium text-blue-600 hover:underline">
                    Подробнее
                </Link>
            </div>
        </div>
    );
};