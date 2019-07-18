import React from 'react';
import './BeerList.css';
import BeerItem from '../BeerItem';

const BeerList = ({beers}) => {
    const beerList = beers.map(beer => {
        //console.log(beer);

        return (
        <BeerItem key={beer.id} beer={beer}/>
        );
    });
    return (
        <div className="row beer-list">
            {beerList}
        </div>
    );
};

export default BeerList;
