import React from 'react';
import './main-footer.component.css';

import { Grid } from 'semantic-ui-react';

import MainFooterButtonComponent from './main-footer-button/main-footer-button.component';
import MainFooterTextComponent from './main-footer-text/main-footer-text.component';

export default function MainFooterComponent(){
    return (
        <div className='MainFooter'>
            <Grid centered={ true } columns='equal'>
                <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                    <MainFooterTextComponent />
                </Grid.Column>
                <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                    <MainFooterButtonComponent />
                </Grid.Column>
            </Grid>
        </div>
    );
}