import React, {Component} from 'react';
import './SearchPage.css';
import Search from '../../Search';
import BeerList from '../../BeerList';
import Spinner from '../../Spinner';
import {connect} from 'react-redux';


export class SearchPage extends Component {

    render() {
        const {loading} = this.props.dataBeers;

        const dataPages = {
            page: 1,
            amountOnPage: this.props.dataBeers.beers.length + 1
        };

        const result = (loading)
            ? <Spinner/>
            : <React.Fragment>
                <Search/>
                <BeerList {...this.props.dataBeers} {...dataPages}/>
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

export default connect(mapStateToProps)(SearchPage);