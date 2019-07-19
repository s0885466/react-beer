import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header row">
            <div className="col-2 selected text_center">
                <Link to = '/'>Главная</Link>
            </div>
            <div className="col-8">
            </div>
            <div className="col-2 text_center">
                <Link to = '/favorites'>Избранное</Link>
            </div>
        </div>
    );
};

export default Header;