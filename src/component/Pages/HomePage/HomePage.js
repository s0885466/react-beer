import React, {Component} from 'react';
import './HomePage.css';

import Spinner from '../../Spinner';
import Error from '../../Error';

import {connect} from 'react-redux';

import DataContext from '../../DataContext';

import {loadBeers} from "../../../actions/beersActions";

class HomePage extends Component {
    static contextType = DataContext;

    state = {
        error: false,
        load: true
    };

    componentDidMount() {
        this.context.getData()
            .then(data => {
                this.props.loadBeers(data);
            })
            .then(() => {
                this.setState({load:false});
            })
            .catch(err => {
                this.setState({error: true});
                console.log(err);
            })
    }


    render() {


        console.log(this.props);

        const {load, error} = this.state;
        return (
            <React.Fragment>
                {load ? <Spinner/> : null}
                {error? <Error/> : null}
                <div className="row">
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        beers: state.beers
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadBeers: (data) => dispatch(loadBeers(data))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);