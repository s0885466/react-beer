import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadBeers, filterBeers} from "../../actions/beersActions";
import {setLastPage, setAmountPage} from "../../actions/pageActions";

import DataContext from '../../services/DataContext';

class Connect extends Component {

    static contextType = DataContext;

    componentDidMount() {

        this.context.getData()
            .then(data => {
                //Первоначальная загрузка данных, когда Redux пуст
                  this.props.loadBeers(data);
                  this.props.filterBeers('');
                  //Вычислим количество страниц
                  const amountBeers = data.length;
                  setAmountPage(this.props.dataPages.amountOnPageDefault);
                  const lastPage = Math.ceil(amountBeers / this.props.dataPages.amountOnPageDefault);
                  this.props.setLastPage(lastPage);
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <React.Fragment/>
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
        setLastPage: (page) => dispatch(setLastPage(page)),
        setAmountPage: (page) => dispatch(setAmountPage(page)),
        filterBeers: (filter) => dispatch(filterBeers(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Connect);