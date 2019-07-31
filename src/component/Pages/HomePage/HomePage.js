import React from 'react';
import './HomePage.css';
import Search from "../../Search";
import Spinner from '../../Spinner';
import BeerList from '../../BeerList';
import SelectPage from '../../SelectPage';
import Sort from '../../Sort';
import {connect} from 'react-redux';
import {loadBeers, sortBeers} from "../../../actions/beersActions";
import {setLastPage} from "../../../actions/pageActions";
import BeerInfo from '../../BeerInfo';
import Proptypes from "prop-types";

const HomePage = (props) => {
    const {loading} = props.dataBeers;
    const result = (loading)
        ? <Spinner/>
        : <React.Fragment>
            <div className="row">
                <Sort sortBeers={props.sortBeers}/>
                <Search/>
            </div>
            <SelectPage/>
            <BeerList {...props.dataBeers} {...props.dataPages}/>
            <BeerInfo/>
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
        dataPages: state.dataPages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadBeers: (data) => dispatch(loadBeers(data)),
        setLastPage: (page) => dispatch(setLastPage(page)),
        sortBeers: (param) => dispatch(sortBeers(param))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

HomePage.propTypes = {
    dataPages: Proptypes.object.isRequired,
    dataBeers: Proptypes.object.isRequired,
    loadBeers: Proptypes.func.isRequired,
    setLastPage: Proptypes.func.isRequired,
    sortBeers: Proptypes.func.isRequired
};

