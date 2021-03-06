import React, {Component} from 'react';
import './Modal.css';
import CheckModal from '../../services/CheckModal';
import {connect} from "react-redux";
import {toggleVisible} from "../../actions/modalActions";
import Input from './Input';
import ProgressBar from './ProgressBar';
import Submit from './Submit';
import {WithModal} from '../HOC';


class Modal extends Component {

    componentWillMount() {
        //передадим props из HOC
        this.setState(this.props);
    }

    validateInput = (id, value) => {
        this.setState(({inputs}) => {
            const index = inputs.findIndex(el => el.id === id);
            const newInputs = [...inputs];
            newInputs[index].value = value;
            newInputs[index].isValid = CheckModal[id](value);
            const newPercent = this.changePercent(newInputs);
            const newDisabled = this.changeSubmitDisabled(newInputs);
            return {
                inputs: newInputs,
                submit: {disabled: newDisabled},
                progressBar: {percent: newPercent},
                textArea: {class: 'hide'}
            };
        });
    };

    closeModal = (event) => {
        const {classOverlay, classClose} = this.state;
        if ((event.target.className.includes(classOverlay)) ||
            (event.target.className.includes(classClose))) {
            this.props.toggleVisible();
        }
    };

    changePercent = (inputs) => {
        const len = inputs.length;
        return Math.floor(inputs.filter(el => el.isValid === true).length * 100 / len);
    };

    changeSubmitDisabled = (newInputs) => {
        return newInputs.some(({isValid}) => isValid === false);
    };

    changeInput = (e, id) => {
        const value = e.target.value;
        this.validateInput(id, value);
    };

    clearInputs = () => {
        const progressBar = {percent: 0};
        const inputs = [...this.state.inputs];

        inputs.forEach((input) => {
            input.value = '';
            input.isValid = false;
        });
        this.setState(() => ({inputs, progressBar}));
    };

    submitClick = () => {
        this.setState({message: true});
        this.clearInputs();
    };

    render() {
        const {
            classClose,
            classOverlay,
            progressBar: {percent},
            submit: {disabled},
            message
        } = this.state;

        const inputs = this.state.inputs.map((input) => {
            return (
                <div key={input.key} className="block_input">
                    <Input {...input} changeInput={(e) => this.changeInput(e, input.id)}/>
                </div>
            )
        });

        const messageBlock = message
            ? <span> Сообщение отправлено</span>
            : null;

        return (
            <div
                className={classOverlay}
                onClick={(event) => this.closeModal(event)}>
                <div>
                    <i className={classClose + ' fa fa-close'}></i>
                    <h2>Форма обратной связи</h2>
                    <ProgressBar percent={percent}/>
                    {inputs}

                    <div>
                        <Submit
                            disabled={disabled}
                            submitClick={this.submitClick}
                        />
                        {messageBlock}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataModal: state.dataModal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleVisible: () => dispatch(toggleVisible())
    }
};

const newProps = {
    classClose: 'close',
    classOverlay: 'modal_dialog',
    progressBar: {percent: 0},
    submit: {disabled: true},
    message: false,
    inputs: [
        {
            label: 'Email', id: 'email', type: 'text',
            placeholder: '0885466@gmail.com', key: 1, isValid: false, value: ''
        },
        {
            label: 'Address', id: 'address', type: 'text',
            placeholder: 'Гаккелевская 27/2 кв.173', key: 2, isValid: false, value: ''
        },
        {
            label: 'Phone', id: 'phone', type: 'text',
            placeholder: '8 911 088 54 66', key: 3, isValid: false, value: ''
        }
    ]
};

export default connect(mapStateToProps, mapDispatchToProps)(WithModal(Modal, newProps));