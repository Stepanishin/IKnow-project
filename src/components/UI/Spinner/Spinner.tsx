import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className='Spinner_contaner'>
            <SpinnerCircular color='#00FFFF'  size='50' />
        </div>
    );
};

export default Spinner;