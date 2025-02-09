import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import { useLocation } from 'react-router-dom';

const HomeLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    if (isLoginPage) {
        return <Outlet></Outlet>;
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;