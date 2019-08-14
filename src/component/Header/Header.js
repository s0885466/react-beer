import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import Proptypes from 'prop-types';
import {WithHeader} from '../HOC';

const Header = (props) => {
    const activeClass = 'selected';
    const headerItems = props.elements.map(({id, link, name, classItem}) => {
        return (
            <NavLink exact to={link}
                     activeClassName={activeClass}
                     key={id} className={classItem}
            >{name}
            </NavLink>
        )
    });

    return (
        <div className="header row flex_end">
            {headerItems}
        </div>
    );
};

const newProps = {
    elements: [
        {id: 1, link: '/', name: 'Главная', classItem: 'col-2 text_center'},
        {id: 2, link: '/favorites', name: 'Избранное', classItem: 'col-2 text_center'}
    ]
};

export default WithHeader(Header, newProps);

Header.propTypes = {
    elements: Proptypes.array.isRequired,
};