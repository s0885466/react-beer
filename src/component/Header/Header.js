import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    state = {
        elements: [
            {id: 1, link: '/', name: 'Главная', classItem: 'col-2 text_center'},
            {id: 2, link: '/favorites', name: 'Избранное', classItem: 'col-2 text_center'}
        ]
    };

    render() {
        const activeClass = 'selected';
        const headerItems = this.state.elements.map(({id, link, name, classItem}) => {
            return (
                    <NavLink exact to={link}
                             activeClassName={activeClass}
                             key={id} className={classItem}
                    >{name}</NavLink>
            )
        });
        return (
            <div className="header row flex_end">
                {headerItems}
            </div>
        );
    }
}

export default Header;