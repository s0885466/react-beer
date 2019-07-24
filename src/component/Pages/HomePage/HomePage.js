import React, {Component} from 'react';
import './HomePage.css';

import Spinner from '../../Spinner';
import BeerList from '../../BeerList';
import SelectPage from '../../SelectPage';
import Sort from '../../Sort';

import {connect} from 'react-redux';

import {loadBeers, sortBeers} from "../../../actions/beersActions";
import {setLastPage} from "../../../actions/pageActions";

class HomePage extends Component {

    componentWillReceiveProps(nextProps){
    }

    componentDidMount() {
    }


    render() {
        const {loading} = this.props.dataBeers;

        const result = (loading)
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
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

