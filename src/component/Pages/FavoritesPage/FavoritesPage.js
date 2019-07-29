import React, {Component} from 'react';
import './FavoritesPage.css';

import Search from "../../Search";
import Spinner from '../../Spinner';
import BeerList from '../../BeerList';
import Sort from '../../Sort';
import {connect} from 'react-redux';

import {sortBeers} from "../../../actions/beersActions";

class FavoritesPage extends Component {

    render() {
        const {loading, beers} = this.props.dataBeers;
        const newBeers = beers.filter((beer) => (beer.favorite === true));
        const dataPages = {
            page: 1,
            amountOnPageDefault: beers.length + 1
        };

        const result = (loading)
            ? <Spinner/>
            : <React.Fragment>
                <div className="row">
                    <Sort sortBeers={this.props.sortBeers}/>
                    <Search/>
                </div>
                <div className="select_pages row">
                    <div className="col-2">
                    </div>
                    <div className="col-8 text_center">
                        <b>Страница 1(1)</b>
                    </div>
                    <div className="col-2">

                    </div>
                </div>
                <BeerList beers={newBeers} {...dataPages}/>
            </React.Fragment>
        ;

        return (
            <React.Fragment>
                {result}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataBeers: state.dataBeers,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sortBeers: (param) => dispatch(sortBeers(param)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesPage);

