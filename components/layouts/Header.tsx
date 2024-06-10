import Link from "next/link";

export const Header: React.FC = () => {
    return (
        <header className="bg-[#002F34] shadow-sm px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex items-center justify-between h-full relative">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <img
                        src="/images/olx.png"
                        width={50}
                        height={20}
                        alt="Hero Image"
                        className="mx-auto"
                    />
                </Link>
                <div className="ml-auto flex items-center gap-4">
                    <Link href="/products" className="text-white hover:text-gray-200" prefetch={false}>
                        Products
                    </Link>
                    <Link
                        href="/products/new"
                        className="inline-flex items-center justify-center rounded-sm border-white bg-white px-4 py-2 text-black font-medium hover:bg-gray-100 focus:outline-none"
                        prefetch={false}
                    >
                        Add Product
                    </Link>
                </div>
            </div>
            
        </header>
    );
};