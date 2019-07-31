import {toggleFavoriteInBeers} from "../../actions/beersActions";
import {addLocalStorage, removeLocalStorage} from "../../services/LocalStorage/LocalStorage";
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import React from 'react';
import './BeerItem.css';

const BeerItem = (props) => {
    const toggleLocalStorage = () => {
        const {
            beer: {
                id,
                favorite
            }
        } = props;

        if (favorite) {
            removeLocalStorage(id)
        } else {
            addLocalStorage(id)
        }
    };

    const clickHandler = (id) => {
        toggleLocalStorage();
        props.toggleFavoriteInBeers(id);
    };

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
    } = props;

    const favoriteClass = favorite
        ? "fa fa-heart"
        : "fa fa-heart-o";

    return (
        <div className="col-3 cart_item">
            <div className="clearfix">
                <h3>{name}</h3>
                <i
                    onClick={() => clickHandler(id)}
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
};

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