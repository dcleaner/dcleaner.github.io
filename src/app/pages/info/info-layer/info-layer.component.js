import React from 'react';
import './info-layer.component.css';
import { Grid } from 'semantic-ui-react';

import InfoLayerCardComponent from './info-layer-card/info-layer-card.component';

export default function InfoLayerComponent({ right, left, isReversed }){
    return (
        <div className='InfoLayer'>
            <Grid reversed={ isReversed ? 'computer tablet' : '' } centered={ true } columns='equal'>
                <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                    <InfoLayerCardComponent image={ right.image } text={ right.text } />
                </Grid.Column>
                <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                    <InfoLayerCardComponent image={ left.image } text={ left.text } />
                </Grid.Column>
            </Grid>
        </div>
    );
}