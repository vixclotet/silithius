// components/LeftSidebar.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/silithius-logo.png';

const LeftSidebar = () => {
    return (
        <div className="p-4 border-r border-gray-300 h-full">
            <div className="flex flex-col items-center">
                <Image src={logo} alt="Silithius Logo" className="h-32 w-32" />
                <h2 className="mt-4 text-3xl font-bold">Menu</h2>
            </div>
            <ul className="mt-16 space-y-4">
                <li className="transition ease-in-out duration-300 hover:bg-orange-200 p-2 rounded-full text-center bg-gray-100 w-32 mx-auto">
                    <Link href="https://www.silithius.com/" className="text-black block">
                        Home
                    </Link>
                </li>
                <li className="transition ease-in-out duration-300 hover:bg-orange-200 p-2 rounded-full text-center bg-gray-100 w-32 mx-auto">
                    <Link href="#" className="text-black block">
                        Settings
                    </Link>
                </li>
                <li className="transition ease-in-out duration-300 hover:bg-orange-200 p-2 rounded-full text-center bg-gray-100 w-32 mx-auto">
                    <Link href="#" className="text-black block">
                        Billing
                    </Link>
                </li>
                <li className="transition ease-in-out duration-300 hover:bg-orange-200 p-2 rounded-full text-center bg-gray-100 w-32 mx-auto">
                    <Link href="https://x.com/vixclotet" className="text-black block">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LeftSidebar;
