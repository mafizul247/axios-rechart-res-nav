import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])

    return (
        <div>
            <h2 className='text-3xl font-semibold text-center bg-purple-200 text-purple-600 p-10'>Affortable Price for Membership</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 mx-24'>
                {
                    prices?.map(product => <PriceCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PriceList;