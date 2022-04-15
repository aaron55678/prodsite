import React from 'react';
import './Header.css';

import Herotext from './Herotext';
import Nav from './Nav';

// Wrapped both Nav and Herotext into this file so i can overlay the background correctly and not fuck the mui appbar
const Header = () => {
    
    return (
        <div className='header'>
            <Nav />
            <Herotext />
        </div>
    );
        
}

export default Header;
            