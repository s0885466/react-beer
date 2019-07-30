import React, {Component} from 'react';
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
            <Header/>
            <Switch>
                <Route path="/"
                       render={() => (
                           <ErrorBoundary>
                               <HomePage/>
                           </ErrorBoundary>
                       )}
                       exact
                />
                <Route path="/favorites/"
                       render={() => (
                           <ErrorBoundary>
                               <FavoritesPage/>
                           </ErrorBoundary>

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