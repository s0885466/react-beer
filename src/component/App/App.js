import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HomePage, FavoritesPage} from '../Pages';
import ErrorBoundary from '../ErrorBoundary';
import DataComponent from '../ToRedux';

import Header from '../Header';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <DataComponent/>
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
    }
}

export default App;