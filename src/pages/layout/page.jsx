import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from "../home";


const Page = () => (
    <Router>
        <div className="page">
            <Home/>
        </div>
    </Router>
);

export default Page;
