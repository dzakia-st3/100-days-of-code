import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleBeverage from './pages/SingleBeverage';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar'

const Beverage = () => {
    return (
        <Navbar />
    )
}

export default Beverage