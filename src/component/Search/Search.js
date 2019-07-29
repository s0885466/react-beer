import React, {Component} from 'react';
import './Search.css';
import {connect} from 'react-redux';
import {filterBeers} from "../../actions/beersActions";
import {setAmountPage, setLastPage, setFirstPage} from "../../actions/pageActions";

class Search extends Component {

    filterBeers = (e) => {
        this.props.setFirstPage(1);
        const amountBeers = this.props.dataBeers.beers.length;
        if (e.target.value) {
            //this.props.setAmountPage(amountBeers);
            this.props.setLastPage(1);
        } else {
            //const amountBeersOnPage = this.props.dataPages.amountOnPage;
            //this.props.setAmountPage(amountBeersOnPage);
            const lastPage = Math.ceil(amountBeers / this.props.dataPages.amountOnPage);
            this.props.setLastPage(lastPage);
        }

        this.props.filterBeers(e.target.value);
    };

    componentWillUnmount() {
        //Когда компонент умрет мы делаем все элементы видимыми
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