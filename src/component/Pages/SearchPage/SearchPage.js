import React, {Component} from 'react';
import './SearchPage.css';
import Search from '../../Search';
import BeerList from '../../BeerList';

import {connect} from 'react-redux';


class SearchPage extends Component {


    render() {
        const dataPages = {
            page: 1,
            amountOnPage: this.props.dataBeers.beers.length + 1
        };

        return (
            <div>
                <Search/>
                <BeerList {...this.props.dataBeers} {...dataPages}/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataBeers: state.dataBeers
    }
};

export default connect(mapStateToProps)(SearchPage);