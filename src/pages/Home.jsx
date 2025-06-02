import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Campaign from '../components/Campaign';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <Campaign />
            <Footer />
        </div>
    );
};

export default Home;