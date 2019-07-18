import React, {Component} from 'react';
import './HomePage.css';

import Spinner from '../../Spinner';
import Error from '../../Error';
import BeerList from '../../BeerList';

import {connect} from 'react-redux';

import DataContext from '../../DataContext';

import {loadBeers} from "../../../actions/beersActions";
import {setLastPage} from "../../../actions/pageActions";

class HomePage extends Component {
    static contextType = DataContext;

    state = {
        error: false,
        load: true
    };

    componentDidMount() {
        this.context.getData()
            .then(data => {
                //Первоначальная загрузка данных
                this.props.loadBeers(data);
                //Вычислим количество страниц
                const amountBeers = data.length;
                const lastPage = Math.ceil(amountBeers/this.props.dataPages.amountOnPage);
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
        const {beers} = this.props.dataBeers;
        const {pages} = this.props.dataPages;
        const {load, error} = this.state;
        const result = (error)
            ?  <Error/>
            : (load)
                ? <Spinner/>
                : <BeerList beers = {beers}/>;

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
)(HomePage);