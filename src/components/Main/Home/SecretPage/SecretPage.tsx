import React, { useEffect } from 'react';
import './SecretPage.css'
// import secret from './img/Secret.jpeg'

const SecretPage = () => {

    useEffect(() => {
        window.scroll(0,0);
    }, [])

    return (
        <div className='SecretPage'>
            <h2 className='SecretPage_title'>Coming soon...</h2>
            <div className='SecretPage_image_container'></div>
        </div>
    );
};

export default SecretPage;