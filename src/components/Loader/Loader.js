import React from 'react';

import './loader.sass';

function Loader() {

    window.onload = function() {
        document.querySelector('.home').style.display = 'none';
    }

    return (
        <div class="home">
            <div id="container">
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
                <div class='dot'></div>
            </div>
        </div>
    )
}

export default Loader;