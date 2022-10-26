import React from 'react';

function Header() {
    return (
        <React.Fragment>
        <header>
            <div className='header-content'>
            <p>Opa</p>
            <div className='header-content-right'>
                <img src={require('../../Photos/userIcon.png')} alt='user icon'></img>
            </div>
            </div>

            <div className='divider'></div>
        </header>
        </React.Fragment>
    );
}

export default Header;