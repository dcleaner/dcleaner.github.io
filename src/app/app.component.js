import React, { Component } from 'react';
import './app.component.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ToolbarComponent from './shared/toolbar/toolbar.component.js';
import MainComponent from './pages/main/main.component';
import InfoComponent from './pages/info/info.component';
import PriceComponent from './pages/price/price.component';
import SupportComponent from './pages/support/support.component';
import LoginComponent from './pages/login/login.component';
import RegistComponent from './pages/regist/regist.component';
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
                        <Route exact path='/info' component = { InfoComponent } />
                        <Route exact path='/price' component = { PriceComponent } />
                        <Route exact path='/support' component = { SupportComponent } />
                        <Route exact path='/login' component = { LoginComponent } />
                        <Route exact path='/regist' component = { RegistComponent } />
                        <Redirect from="**" to='/'/>
                    </Switch>
                    <FooterComponent />
                </div>
            </Router>
        );
    }
}

export default AppComponent;
