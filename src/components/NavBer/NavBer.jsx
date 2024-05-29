import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const NavBer = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Product", path: "/product" },
        { id: 5, name: "Service", path: "/service" }
    ];

    return (
        <nav className='bg-purple-400 p-2'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open ? <XMarkIcon className="size-6 text-purple-500 cursor-pointer" /> :
                            <Bars3Icon className="size-6 text-purple-500 cursor-pointer" />
                    }
                </span>
            </div>
            <ul className={`md:flex absolute md:static duration-500 px-3 bg-purple-300 ${open ? 'top-10': '-top-64'}`}>
                {
                    routes?.map(route => <Link key={route.id} route={route} />)
                }
            </ul>
        </nav>
    );
};

export default NavBer;