import React, {Component} from 'react';
import './Search.css';
import {connect} from 'react-redux';
import {filterBeers} from "../../actions/beersActions";
import {setAmountPage, setLastPage, setFirstPage} from "../../actions/pageActions";
import Proptypes from 'prop-types';

class Search extends Component {
    filterBeers = (e) => {
        this.props.setFirstPage(1);
        const amountBeers = this.props.dataBeers.beers.length;
        if (e.target.value) {
            this.props.setLastPage(1);
        } else {
            const lastPage = Math.ceil(amountBeers / this.props.dataPages.amountOnPage);
            this.props.setLastPage(lastPage);
        }

        this.props.filterBeers(e.target.value);
    };

    componentWillUnmount() {
        //Чтобы произвести сброс филтра и страниц при уничтожении компонента
        const amountBeers = this.props.dataBeers.beers.length;
        const lastPage = Math.ceil(amountBeers / this.props.dataPages.amountOnPage);
        this.props.setLastPage(lastPage);
        this.props.filterBeers('');
    }

    render() {
        return (
            <div className="col-4 search">
                <div className="right">
                    <label htmlFor="search">Поиск: </label>
                    <input
                        onChange={this.filterBeers}
                        type="text" id="search"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataBeers: state.dataBeers,
        dataPages: state.dataPages,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        filterBeers: (filter) => dispatch(filterBeers(filter)),
        setAmountPage: (page) => dispatch(setAmountPage(page)),
        setLastPage: (page) => dispatch(setLastPage(page)),
        setFirstPage: () => dispatch(setFirstPage())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
    dataBeers: Proptypes.object.isRequired,
    dataPages: Proptypes.object.isRequired,
    filterBeers: Proptypes.func.isRequired,
    setAmountPage: Proptypes.func.isRequired,
    setLastPage: Proptypes.func.isRequired,
    setFirstPage: Proptypes.func.isRequired,
};