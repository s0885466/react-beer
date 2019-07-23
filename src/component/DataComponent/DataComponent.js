import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadBeers, filterBeers} from "../../actions/beersActions";
import {setLastPage} from "../../actions/pageActions";

import DataContext from '../../services/DataContext';

class DataComponent extends Component {
    state = {
        error: false,
        load: true
    };

    static contextType = DataContext;

    componentDidMount() {
        this.context.getData()
            .then(data => {
                //Первоначальная загрузка данных, когда Redux пуст
                this.props.loadBeers(data);
                this.props.filterBeers('');
                //Вычислим количество страниц
                const amountBeers = data.length;
                const lastPage = Math.ceil(amountBeers / this.props.dataPages.amountOnPage);
                this.props.setLastPage(lastPage);
            })
            .then(() => {
                this.setState({load: false});
            })
            .catch(err => {
                this.setState({error: true});
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
        filterBeers: (filter) => dispatch(filterBeers(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DataComponent);