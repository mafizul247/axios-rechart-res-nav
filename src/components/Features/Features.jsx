import React from 'react';
import { BeakerIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div className='flex items-center gap-2'>
            <CheckCircleIcon className="size-6 text-purple-500" />
            <span>{feature}</span>
        </div>
    );
};

export default Features;