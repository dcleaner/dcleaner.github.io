import React, { Component } from 'react';
import './app.component.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ToolbarComponent from './shared/toolbar/toolbar.component.js';
import MainComponent from './pages/main/main.component';
import FooterComponent from './shared/footer/footer.component.js';

class AppComponent extends Component {
    render() {
        return (
            <Router basename='/' >
                <div className='App'>
                    <ToolbarComponent />
                    <div className='Toolbar__margin' />

                    <Switch>
                        <Route exact path='/' component = { MainComponent } />
                        <Redirect from="**" to='/'/>
                    </Switch>
                    <FooterComponent />
                </div>
            </Router>
        );
    }
}

export default AppComponent;
