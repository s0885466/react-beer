import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HomePage, FavoritesPage} from '../Pages';

import Header from '../Header';

class App extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/"
                               component={HomePage}
                               exact
                        />
                        <Route path="/favorites/"
                               component={FavoritesPage}
                        />
                        <Route/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;