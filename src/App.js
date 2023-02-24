import React from 'react';
import {
    BrowserRouter, Switch, Routes, Route,
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Shop from './components/Shop';
import RouteSwitch from './RouteSwitch';
import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/shop" element={<Shop />} exact />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
