import React from 'react';
import './BeerList.css';
import BeerItem from '../BeerItem';

import WithSearch from '../HOC/WithSearch'

const BeerList = (props) => {

    const {page, amountOnPageDefault} = props;
    const firstIndex = page * amountOnPageDefault - amountOnPageDefault;
    const lastIndex = firstIndex + amountOnPageDefault - 1;

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

export default WithSearch(BeerList);

