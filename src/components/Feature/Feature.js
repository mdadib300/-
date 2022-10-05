import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = (props) => {
    return (
        <div>
            <div className='flex content-center'>
                <CheckCircleIcon className='h-6 w-6'></CheckCircleIcon>
                <p className='ml-2'>{props.info}</p>
            </div>
        </div>
    );
};

export default Feature;