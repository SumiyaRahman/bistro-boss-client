import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mb-12 w-4/12 mx-auto text-center'>
            <p className='text-[#D99904] italic text-lg mb-4'>---{subHeading}---</p>
            <hr />
            <h3 className='uppercase text-[#151515] text-[40px] my-5'>{heading}</h3>
            <hr />
        </div>
    );
};

export default SectionTitle;