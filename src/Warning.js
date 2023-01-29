import React from 'react';
import './warning.css';

const Warning = () => {
    return (
        <div id='warning'>
            <div className='theWarning'>
                <h3 style={{ color: 'red' }}>The website is not available for tablet version yet</h3>
            </div>

        </div>
    );
};

export default Warning;