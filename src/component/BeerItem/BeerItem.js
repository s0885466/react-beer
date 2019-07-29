import {connect} from 'react-redux';

import {toggleFavoriteInBeers} from "../../actions/beersActions";
import {addLocalStorage, removeLocalStorage} from "../../services/LocalStorage/LocalStorage";

import Proptypes from 'prop-types';
import React, {Component} from 'react';
import './BeerItem.css';

class BeerItem extends Component {

    toggleLocalStorage = () => {
        const {
            beer: {
                id,
                favorite
            }
        } = this.props;
        if (favorite) {
            removeLocalStorage(id)
        } else {
            addLocalStorage(id)
        }
    };

    clickHandler = (id) => {
        this.toggleLocalStorage();
        this.props.toggleFavoriteInBeers(id);
    };

    render() {

        const {
            beer: {
                id,
                name,
                image_url,
                abv,
                ibu,
                description,
                contributed_by,
                first_brewed,
                favorite
            }

        } = this.props;

        const favoriteClass = favorite
            ? "fa fa-heart"
            : "fa fa-heart-o";

        return (
            <div className="col-3 cart_item">
                <div className="clearfix">
                    <h3>{name}</h3>

                    <i
                        onClick={() => this.clickHandler(id)}
                        className={favoriteClass}
                    />

                </div>

                <div><img src={image_url} alt={name}/></div>
                <ul>
                    <li>Поставщик: {contributed_by}</li>
                    <li>Впервые сварено: {first_brewed}</li>
                    <li>Алкоголь: {abv}%</li>
                    <li>Горечь IBU: {ibu}</li>
                </ul>
                <h4>Описание:</h4>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFavoriteInBeers: (id) => dispatch(toggleFavoriteInBeers(id))
    }
};

const mapStateToProps = state => {
    return {
        dataBeers: state.dataBeers,
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeerItem);

BeerItem.propTypes = {
    toggleFavoriteInBeers: Proptypes.func.isRequired,
    beer: Proptypes.object.isRequired
};