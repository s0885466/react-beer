import React, {Component} from 'react';
import './Search.css';
import {connect} from 'react-redux';
import {filterBeers} from "../../actions/beersActions";

class Search extends Component{

    filterBeers = (e) => {
        this.props.filterBeers(e.target.value);
    };

    componentDidMount() {

    }

    componentWillUnmount() {
        //Когда компонент умрет мы делаем все элементы видимыми
        this.props.filterBeers('');
    }

    render(){
        return (
            <div className="row search">
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
        dataBeers: state.dataBeers
    }
};

const mapDispatchToProps = dispatch => {
    return {
        filterBeers: (filter) => dispatch(filterBeers(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);