import React, {Component} from 'react';
import './Sort.css';

const SortItem = (props) => {
    const {label, param, sortBeers} = props;
    const sort = (isUp) => ({param, isUp});
    return (
        <div className="">
            <span>{label}</span>
            <i
                onClick={() => sortBeers(sort(true))}
                className="fa fa-sort-up">
            </i>
            <i
                onClick={() => sortBeers(sort(false))}
                className="fa fa-sort-down">
            </i>
        </div>
    )
};

const Sort = (props) => {
    return (
        <div className="sort row col-8">
            <SortItem {...props} label="По содержанию спирта" param="abv" />
            <SortItem {...props} label="По горечи IBU" param="ibu" />
            <span className="button" onClick={() => props.sortBeers({param:'id', isUp:true})}>Сброс</span>
        </div>
    )
};
export default Sort;
