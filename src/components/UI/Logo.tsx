import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css'

const Logo = () => {
    return (
        <div className='Logo'>
            <Link to="/"><span className="fast-flicker">r</span>ec<span className="flicker">t</span>ville</Link>
            {/* <span className="fast-flicker">r</span>ect<span className="flicker">v</span>ille */}
        </div>
    );
};

export default Logo;