import React from 'react';
import './ModalButton.css';
import {connect} from 'react-redux';
import {toggleVisible} from "../../actions/modalActions";
import Proptypes from 'prop-types';

const ModalButton = (props) => {
    return (
        <div
            onClick={props.toggleVisible}
            className="modal_button">
            Обратная связь
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggleVisible: () => dispatch(toggleVisible())
    }
};

export default connect(() => ({}), mapDispatchToProps)(ModalButton);

ModalButton.propTypes = {
    toggleVisible: Proptypes.func.isRequired,
};