import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HomePage, FavoritesPage, SearchPage} from '../Pages';
import ErrorBoundary from '../ErrorBoundary';
import DataComponent from '../DataComponent';

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
                        <Route path="/search/"
                               render={() => <SearchPage/>}
                        />
                        <Route path="/favorites/"
                               render={() => <FavoritesPage/>}
                        />
                        <Route/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;