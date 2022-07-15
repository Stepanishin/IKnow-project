import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css'

const Logo = () => {
    return (
        <div className='Logo'>
            <Link to="/"><span className="fast-flicker">R</span>ek<span className="flicker">t</span>ville</Link>
        </div>
    );
};

export default Logo;