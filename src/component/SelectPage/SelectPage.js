import React from 'react';
import './SelectPage.css';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';

import {nextPage, prevPage} from "../../actions/pageActions";

const SelectPage = (props) => {
    const {nextPage, prevPage} = props;
    const {page, lastPage} = props.dataPages;

    const classPrevButton = (page > 1)
        ? ""
        : "hide";
    const classNextButton = (page < lastPage)
        ? ""
        : "hide";

    return (
        <div className="select_pages row">
            <div className="col-2">
                <div
                    onClick={prevPage}
                    className={`${classPrevButton} button`}>Назад
                </div>
            </div>
            <div className="col-8 text_center">
                <b>Страница {page}({lastPage})</b>
            </div>
            <div className="col-2">
                <div
                    onClick={nextPage}
                    className={`${classNextButton} button`}>Вперед
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = state => {
    return {
        dataPages: state.dataPages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        nextPage: () => dispatch(nextPage()),
        prevPage: () => dispatch(prevPage()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPage);

SelectPage.propTypes = {
    nextPage: Proptypes.func.isRequired,
    prevPage: Proptypes.func.isRequired,
    dataPages: Proptypes.shape({
        page: Proptypes.number.isRequired,
        amountOnPage: Proptypes.number.isRequired,
        lastPage: Proptypes.number.isRequired,
    })
};