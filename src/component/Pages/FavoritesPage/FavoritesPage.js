import React from 'react';
import './FavoritesPage.css';
import Search from "../../Search";
import Spinner from '../../Spinner';
import BeerList from '../../BeerList';
import Sort from '../../Sort';
import {connect} from 'react-redux';
import {sortBeers} from "../../../actions/beersActions";
import Proptypes from 'prop-types';
import BeerInfo from "../../BeerInfo";
import ErrorBoundary from '../../ErrorBoundary';
import Error from "../HomePage/HomePage";

const FavoritesPage = (props) => {
    const {error} = props.dataBeers.beers;
    const {loading, beers} = props.dataBeers;
    let newBeers;
    if (!error) {
        newBeers = beers.filter((beer) => (beer.favorite === true));
    }

    const dataPages = {
        page: 1,
        amountOnPage: beers.length + 1
    };

    const result = (error)
        ? <Error/>
        : (loading)
            ? <Spinner/>
            : <React.Fragment>
                <ErrorBoundary>
                    <div className="row">
                        <Sort sortBeers={props.sortBeers}/>
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
                </ErrorBoundary>
                <ErrorBoundary>
                    <BeerInfo/>
                </ErrorBoundary>
            </React.Fragment>
    ;

    return (
        <React.Fragment>
            {result}
        </React.Fragment>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

FavoritesPage.propTypes = {
    dataBeers: Proptypes.object.isRequired,
    sortBeers: Proptypes.func.isRequired,
};

