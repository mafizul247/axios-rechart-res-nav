import React from 'react';


const Link = ({route}) => {
    return (
        <li className='mr-8 py-2 px-4 hover:bg-purple-700 rounded'>
            <a href={route.path} className='text-xl font-semibold hover:font-bold'>{route.name}</a>
        </li>
    );
};

export default Link;