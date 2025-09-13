import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner';
import { Sections } from '../components/Sections';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Sections></Sections>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout;