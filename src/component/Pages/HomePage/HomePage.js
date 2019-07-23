import React, {Component} from 'react';
import './HomePage.css';

import Spinner from '../../Spinner';
import Error from '../../Error';
import BeerList from '../../BeerList';
import SelectPage from '../../SelectPage';
import Sort from '../../Sort';

import {connect} from 'react-redux';

import DataContext from '../../../services/DataContext';

import {loadBeers, sortBeers, filterBeers} from "../../../actions/beersActions";
import {setLastPage} from "../../../actions/pageActions";

class HomePage extends Component {
    static contextType = DataContext;

    state = {
        error: false,
        load: true
    };

    componentDidMount() {
        console.log('componentDidMount homePage');


        this.context.getData()
            .then(data => {
                //Первоначальная загрузка данных, когда Redux пуст
                if (this.props.dataBeers.beers.length < 1) {
                    data.forEach(el => {
                        el.isVisible = true;
                    });
                    this.props.loadBeers(data);
                    //Вычислим количество страниц
                    const amountBeers = data.length;
                    const lastPage = Math.ceil(amountBeers / this.props.dataPages.amountOnPage);
                    this.props.setLastPage(lastPage);
                }
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
        const {load, error} = this.state;
        const result = (error)
            ? <Error/>
            : (load)
                ? <Spinner/>
                : <React.Fragment>
                    <div className="row">
                        <Sort sortBeers={this.props.sortBeers}/>
                    </div>
                    <SelectPage/>
                    <BeerList {...this.props.dataBeers} {...this.props.dataPages}/>
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
        dataPages: state.dataPages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadBeers: (data) => dispatch(loadBeers(data)),
        setLastPage: (page) => dispatch(setLastPage(page)),
        sortBeers: (param) => dispatch(sortBeers(param)),
        filterBeers: (filter) => dispatch(sortBeers(filter))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

