import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className='flex'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[118px] h-[104px] mr-8' src={image}/>
            <div className='mr-1'>
                <h3 className='uppercase text-[#151515] text-lg tracking-[0.1rem]'>{name} ----------</h3>
                <p className='text-[#737373] text-base'>{recipe}</p>
            </div>
            <p className='text-[#BB8506] text-lg'>${price}</p>
        </div>
    );
};

export default MenuItem;