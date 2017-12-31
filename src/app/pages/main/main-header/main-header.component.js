import React from 'react';
import './main-header.component.css';

import { Grid } from 'semantic-ui-react';

import MainHeaderImageComponent from './main-header-image/main-header-image.component';
import MainHeaderTextComponent from './main-header-text/main-header-text.component';

export default function MainHeaderComponent(){
    return (
        <div className='MainHeader'>
            <Grid reversed='computer tablet' centered={ true } columns='equal'>
                <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                    <MainHeaderImageComponent />
                </Grid.Column>
                <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                    <MainHeaderTextComponent />
                </Grid.Column>
            </Grid>
        </div>
    );
}