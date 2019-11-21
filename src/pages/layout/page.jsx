import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from "./header";
import Home from "../home";

//import strings from '../../comonents';

const Page = () => (
    <Router>
        <div className="page">
            <Home/>
        </div>
    </Router>
);

export default Page;
