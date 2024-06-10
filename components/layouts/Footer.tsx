import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#002F34]  text-gray-500 px-4 lg:px-6 h-16 flex items-center justify-between shadow-md">
            <div className="container mx-auto flex items-center justify-between h-full relative">
                <p className="text-gray-500 text-sm">&copy; 2024 OLX Products. All rights reserved.</p>
                <p className="text-gray-500 hover:text-gray-700">Made by <b>Vladislav</b></p>
            </div>
        </footer>
    );
};