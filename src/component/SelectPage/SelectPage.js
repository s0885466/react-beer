import React, {Component} from 'react';
import './SelectPage.css';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';

import {nextPage, prevPage} from "../../actions/pageActions";

class SelectPage extends Component {
    render() {
        const {nextPage, prevPage} = this.props;
        const {page, lastPage} = this.props.dataPages;

        const classPrevButton = (page > 1)
            ? ""
            : "hide";
        const classNextButton = (page < lastPage)
            ? ""
            : "hide";


        return (
            <div className="select_pages row">
                <div className="col-2">
                    <button
                        onClick={prevPage}
                        className={classPrevButton}>Назад
                    </button>
                </div>
                <div className="col-8 text_center">
                    Страница {page}({lastPage})
                </div>
                <div className="col-2">
                    <button
                        onClick={nextPage}
                        className={classNextButton}>Вперед
                    </button>
                </div>
            </div>
        );
    }
}

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