import React from 'react';
import './footer.component.css';
import { Grid } from 'semantic-ui-react';

import logo from '../../../assets/dcleaner.png';

export default function FooterComponent(){
    return (
        <div className='Footer'>
            <Grid centered={ true }>
                <Grid.Column mobile={ 16 } tablet={ 12 } computer={ 13 }>
                    <div className='Footer__Grid Text' >
                        Copyright © 2018 Dcleaner. All Rights Reserved.
                    </div>
                </Grid.Column>
                <Grid.Column mobile={ 16 } tablet={ 4 } computer={ 3 }>
                    <div className='Footer__Grid Image' >
                        <img className='Footer__Logo' src={ logo } />
                    </div>
                </Grid.Column>                
            </Grid>
        </div>
    );
}