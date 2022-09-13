import React from 'react';
import Info from './Info';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';


export default function Digital () {
    return (
        <div className="digital">
            <Info />
            <About/>
            <Interest/>
            <Footer/>
            
        </div>
    )
};