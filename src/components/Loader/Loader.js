import React from 'react';

import './loader.sass';

function Loader() {

    window.onload = function() {
        document.querySelector('.home').style.display = 'none';
    }

    return (
        <div className="home">
            <div id="container">
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
        </div>
    )
}

export default Loader;