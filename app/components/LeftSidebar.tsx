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
                    <Link href="http://localhost:3000/examples/market-rec" className="text-black block">
                        Strategies
                    </Link>
                </li>
                <li className="transition ease-in-out duration-300 hover:bg-orange-200 p-2 rounded-full text-center bg-gray-100 w-32 mx-auto">
                    <Link href="http://localhost:3000/examples/case-studies" className="text-black block">
                        Case Studies
                    </Link>
                </li>
                <li className="transition ease-in-out duration-300 hover:bg-orange-200 p-2 rounded-full text-center bg-gray-100 w-32 mx-auto">
                    <Link href="http://localhost:3000/examples/basic-chat" className="text-black block">
                        Live Assistant
                    </Link>
                </li>
                <li className="transition ease-in-out duration-300 hover:bg-orange-200 p-2 rounded-full text-center bg-gray-100 w-32 mx-auto">
                    <Link href="https://x.com/vixclotet" className="text-black block">
                        Contact
                    </Link>
                </li>
            </ul>
            <ul className="mt-16 space-y-4">
                <div className="flex flex-col items-center">
                    <h2 className="mt-4 text-xl font-bold">Would you like to unlock full access to Silithius?</h2>
                </div>
            <li className="transition ease-in-out duration-300 hover:bg-orange-200 p-2 rounded-full text-center bg-sky-200 w-64 mx-auto">
                    <Link href="https://forms.gle/RheqoNfrWo3997rv7" className="text-black block">
                    Join the wailist!
                </Link>
            </li>
            </ul>
        </div>
        
        
    );
};

export default LeftSidebar;
