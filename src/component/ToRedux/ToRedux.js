import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadBeers, filterBeers} from "../../actions/beersActions";
import {setLastPage} from "../../actions/pageActions";
import {getLocalStorage} from "../../services/LocalStorage/LocalStorage";
import DataContext from '../../services/DataContext';
import Proptypes from 'prop-types';

class ToRedux extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getData()
            .then(data => {
                //трансформация данных
                    const idFromLocalStorage = getLocalStorage();
                    if (idFromLocalStorage) {
                        idFromLocalStorage.forEach(id => {
                            data.forEach(el => {
                                if (el.id === id) {
                                    el.favorite = true;
                                }
                            })
                        });
                        //Загрузка данных в Redux
                        this.props.loadBeers(data);
                        this.props.filterBeers('');
                        const amountBeers = data.length;
                        const lastPage = Math.ceil(amountBeers / this.props.dataPages.amountOnPage);
                        this.props.setLastPage(lastPage);
                    }
            })
            .catch(err => {
                console.error(err);
                const error = {error: true};
                this.props.loadBeers(error);
            })
    }

    render() {
        return (
            null
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

export default connect(mapStateToProps, mapDispatchToProps)(ToRedux);

ToRedux.propTypes = {
    loadBeers: Proptypes.func.isRequired,
    setLastPage: Proptypes.func.isRequired,
    filterBeers: Proptypes.func.isRequired,
    dataBeers: Proptypes.object.isRequired,
    dataPages: Proptypes.object.isRequired,
};

