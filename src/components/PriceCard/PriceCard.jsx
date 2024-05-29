import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({ product }) => {
    const { id, name, price, features } = product;
    // console.log(product);
    return (
        <div className='bg-indigo-200  p-8 rounded-md flex flex-col'>
            <h2 className='font-bold text-center'><span className='text-5xl font-bold text-purple-500'>{price}</span>/Month</h2>
            <h4 className='text-xl font-bold mt-3 text-center'>{name}</h4>
            <h4 className='text-xl font-bold mt-4 mb-2'>Features</h4>
            {
                features?.map((feature, index) => <Features key={index} feature={feature} /> )
            }
            <button className='bg-green-600 p-2 rounded w-full cursor-pointer mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;