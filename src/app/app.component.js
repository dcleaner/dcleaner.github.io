import React, { Component } from 'react';
import './app.component.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import ToolbarComponent from './shared/toolbar/toolbar.component.js';
import MainComponent from './pages/main/main.component';
import PriceComponent from './pages/price/price.component';
import SupportComponent from './pages/support/support.component';
import LoginComponent from './pages/login/login.component';
import FooterComponent from './shared/footer/footer.component.js';

class AppComponent extends Component {
    render() {
        return (
            <Router basename='/' >
                <div className='App'>
                    <Grid centered={ true }>
                        <Grid.Column  width={ 16 }>
                            <ToolbarComponent />
                            <div className='Toolbar__margin' />
                        </Grid.Column>
                        <Grid.Column width={ 16 }>
                            <Switch>
                                <Route exact path='/' component = { MainComponent } />
                                <Route exact path='/price' component = { PriceComponent } />
                                <Route exact path='/support' component = { SupportComponent } />
                                <Route exact path='/login' component = { LoginComponent } />
                                <Redirect from="**" to='/'/>
                            </Switch>
                        </Grid.Column>
                        <Grid.Column mobile={ 16 } tablet={ 14 } computer={ 14 }>
                            <FooterComponent />
                        </Grid.Column>
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default AppComponent;
