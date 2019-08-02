import React from 'react';
import './BeerList.css';
import BeerItem from '../BeerItem';
import Proptypes from 'prop-types';

const BeerList = (props) => {
    const {page, amountOnPage} = props;
    const firstIndex = page * amountOnPage - amountOnPage;
    const lastIndex = firstIndex + amountOnPage - 1;
    const beerListInPage = props.beers.slice(firstIndex, lastIndex + 1);
    const beerList = beerListInPage.map(beer => {
        if (beer.isVisible) {
            return (
                <BeerItem key={beer.id} beer={beer}/>
            );
        }
    });

    return (
        <div className="row beer-list">
            {beerList}
        </div>
    );
};

export default BeerList;

BeerList.propTypes = {
    beers: Proptypes.array.isRequired,
    amountOnPage: Proptypes.number.isRequired,
    page: Proptypes.number.isRequired
};
