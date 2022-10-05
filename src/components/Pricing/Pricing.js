import React from 'react';
import PricingOption from '../Pricing Options/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name:'ফ্রি', price:'০', feature: [
        'প্রোডাক্ট সম্পূর্ণ ফ্রি',
        'ডেলিভারি চার্জ ফ্রি',
        'কিউ.সি চেকড প্রোডাক্টস']},
        {id:2, name:'রেগুলার', price:'১০০০', feature: [
            'মাত্র ১০০০ টাকা',
            'ডেলিভারি চার্জ ফ্রি',
            'কিউ.সি চেকড প্রোডাক্টস']},
        {id:3, name:'প্রিমিয়াম', price:'৩০০০', feature: [
            'মাত্র ৩০০০ টাকা',
            'ডেলিভারি চার্জ ফ্রি',
            'কিউ.সি চেকড প্রোডাক্টস']}
    ];
    return (
        <div>
            <p className='bg-slate-500 p-5 text-white text-4xl font-bold'>এলাকার সেরা ডিল !</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
            {
                pricingOptions.map(pricing => <PricingOption 
                id={pricing.id} 
                pricing={pricing}></PricingOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;