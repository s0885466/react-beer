import React, {Component} from 'react';
import './FavoritesPage.css';

import {connect} from 'react-redux';
import {loadBeers} from "../../../actions/beersActions";
import {setLastPage} from "../../../actions/pageActions";




class FavoritesPage extends Component {
    render() {

        return (
            <div>
                FavoritesPage
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataBeers: state.dataBeers,
        dataPages: state.dataPages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadBeers: (data) => dispatch(loadBeers(data)),
        setLastPage: (page) => dispatch(setLastPage(page))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesPage);