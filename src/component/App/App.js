import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HomePage, FavoritesPage} from '../Pages';
import ErrorBoundary from '../ErrorBoundary';
import ToRedux from '../ToRedux';
import Modal from '../Modal';
import ModalButton from '../ModalButton';
import {connect} from 'react-redux';
import Header from '../Header';

const App = (props) => (
    <div>
        <BrowserRouter>
            <ErrorBoundary>
                <ModalButton/>
                {props.dataModal.isVisible && <Modal/>}
            </ErrorBoundary>
                <ToRedux/>
            <ErrorBoundary>
                <Header/>
            </ErrorBoundary>
            <Switch>
                <Route path="/"
                       render={() => (
                           <HomePage/>
                       )}
                       exact
                />
                <Route path="/favorites/"
                       render={() => (
                           <FavoritesPage/>
                       )}
                       exact
                />
                <Route/>
            </Switch>
        </BrowserRouter>
    </div>
);

const mapStateToProps = state => {
    return {
        dataModal: state.dataModal
    }
};

export default connect(mapStateToProps)(App);