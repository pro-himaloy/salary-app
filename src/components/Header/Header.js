import React from 'react';
import logo from '../../images/pngwave.png';
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
           <div className = "logo">          
                <img src={logo} alt=""/>
                <h1 className= "header-name">HAS Salary App</h1>
            </div>
                <nav>
                    <a href="/sheet">Salary Sheet</a>
                    <a href="/history">Salary History</a>
                    <a href="/review">Review Salary</a>
                </nav>
            

        </div>
    );
};

export default Header;