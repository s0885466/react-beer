import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {
        elements: [
            {id: 1, link: './', name: 'Главная', classItem: 'col-2 text_center selected'},
            {id: 2, link: './search', name: 'Поиск', classItem: 'col-2 text_center'},
            {id: 3, link: './favorites', name: 'Избранное', classItem: 'col-2 text_center'}
        ]
    };

    setClass = (id) => {
      const newElements = [...this.state.elements];
        newElements.forEach((el) => {
            if (el.id !== id) {
                el.classItem = 'col-2 text_center';
            } else {
                el.classItem = 'col-2 text_center selected';
            }
        });

        this.setState({elements: newElements});
    };

    render() {

        const headerItems = this.state.elements.map(({id, link, name, classItem}) => {
            return (
                <div
                    onClick={() => this.setClass(id)}
                    key={id} className={classItem}>
                    <Link to={link}>{name}</Link>
                </div>
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