import React, {Component} from 'react';
import './FavoritesPage.css';

import BeerList from '../../BeerList';
import Spinner from '../../Spinner';

import {connect} from 'react-redux';
import Search from "../../Search";

export class FavoritesPage extends Component {

    render() {
        const {loading} = this.props.dataBeers;

        const dataPages = {
            page: 1,
            amountOnPage: this.props.dataBeers.beers.length + 1
        };

        const beers = this.props.dataBeers.beers;
        const newBeers = beers.filter((beer) => (beer.favorite === true));

        const result = (loading)
            ? <Spinner/>
            : <React.Fragment>
                <Search/>
                <BeerList beers={newBeers} {...dataPages}/>

            </React.Fragment>;

        return (
            <React.Fragment>
                {result}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataBeers: state.dataBeers
    }
};

export default connect(mapStateToProps)(FavoritesPage);

