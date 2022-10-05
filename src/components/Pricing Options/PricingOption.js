import React from 'react';
import Feature from '../Feature/Feature';

const PricingOption = (props) => {
    return (
        <div>
            <div className='text-center bg-slate-800 text-white p-5 mt-5 rounded-md'>
                <p><span className='text-3xl font-semibold'>{props.pricing.price} টাকা</span> <span>/ মাস</span></p>
                <p className='font-semibold mt-5'>{props.pricing.name}</p>
                <div className="mt-5">
                {
                    props.pricing.feature.map(feature => <Feature info={feature}></Feature>)
                }
                </div>
                
                <button className='text-center hover:text-white hover:bg-slate-600 text-slate-800 bg-white rounded-md p-3 mt-8'>কিনে ফেলুন !</button>
            </div>
        </div>
    );
};

export default PricingOption;