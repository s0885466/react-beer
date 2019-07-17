import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header row">
            <div className="col-10">
                <a href='/'>Главная</a>
            </div>
            <div className="col-2">
                <a href='favorites'>Избранное</a>
            </div>
        </div>
    );
};

export default Header;