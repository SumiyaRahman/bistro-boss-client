import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='space-y-[100px]'>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;